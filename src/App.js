import { useState, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";
import treeRecommend from "./treeRecommend";
import {loamBasedApples, loamAndClayBasedApples, loamAndPeatBasedApples, loamAndSandBasedApples, meadowOrchards} from "./js_data/SoilAndAppleInfo";

function App() {
  const [apples, setApples] = useState([]); // Apple data
  const [selectedApple, setSelectedApple] = useState(null); // Selected apple
  const [sidebarContent, setSidebarContent] = useState(''); // Sidebar content
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Sidebar visibility
  const mapRef = useRef(null); // Map reference

  // This function is called when selecting an apple from the dropdown
  const handleSelectChange = (event) => {
    const appleName = event.target.value;
    const apple = apples.find((item) => item["Name of the apple"] === appleName);
    setSelectedApple(apple || null);
  };

  // This function toggles the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // This function is called when clicking on the map
  const handleMapClick = (event) => {
    const map = mapRef.current;
    const features = map.queryRenderedFeatures(event.point, { layers: ['bodenschatzung'] }); // Query the rendered features
    // Check if a feature was clicked
    if (features.length) {
      const feature = features[0];
      try {
          feature.treeRecommend = treeRecommend(feature);
      } catch (e) {
          console.log("Soil information could not be loaded.");
      }
      setSidebarContent(
        <>
          <br />
          <br />
          <h4>Bodentyp:</h4> {feature.treeRecommend.soiltype}
          <br />
          <br />
          <h4>Baumempfehlung:</h4> {feature.treeRecommend.treeRecommendation.map((item) => item.name).join(", ")}
        </>
      );
      setIsSidebarVisible(true); // Open sidebar on clicks
    }
  };

  // Load data and initialize the map
  useEffect(() => {
    // Fetch apple data
    fetch("/data/apples.json")
      .then((response) => response.json())
      .then((data) => setApples(data))
      .catch((error) => console.error("Error loading apples.json:", error));

    // Initialize map
    const map = new maplibregl.Map({
      container: "map",
      style: "https://vtod1.bayernwolke.de/styles/by_style_standard.json",
      center: [11.5, 48.8],
      zoom: 8,
    });

  map.addControl(new maplibregl.NavigationControl()); // Add navigation control
  mapRef.current = map; // Save map reference
  
  map.on("click", handleMapClick); // Add click event listener

  // Add meadow orchards to the map
  map.once("load", () => {
    meadowOrchards.forEach((orchard) => {
      const { name, address, website, email, phone, location } = orchard;
      let popupContent = `
        <h3>${name}</h3>
        <p><strong>Addresse: </strong>${address}</p>
        <p><strong>Webseite: </strong>${website}</p>
        <p><strong>E-Mail: </strong>${email}</p>
        <p><strong>Telefonnummer: </strong>${phone}</p>
      `;
    
      // Create a popup with the content
      let popup = new maplibregl.Popup({ offset: 25, anchor: 'top' }) // Change anchor to 'top', 'bottom', etc.
        .setHTML(popupContent);
    
      // Ensure valid coordinates before setting marker
      if (location && location.length === 2) {
        let marker = new maplibregl.Marker()
          .setLngLat(location) // Assuming location is in [longitude, latitude] format
          .setPopup(popup)
          .addTo(map);
      } else {
        console.warn("Invalid location for orchard:", orchard);
      }
    });
  });

  // Wait for the map to fully load before adding sources and layers
  map.on("load", () => {
    // Add the GeoJSON source once the map style is fully loaded
    map.addSource("bodenschatzung", {
      type: "geojson",
      data: "/data/bodenschatzung.geojson", // Replace with the correct path to your GeoJSON
    });

    // Add a layer to display the GeoJSON data
    map.addLayer({
      id: "bodenschatzung",
      type: "fill",
      source: "bodenschatzung",
    paint: {
      'fill-color': '#D3D3D3', // Light grey color
      'fill-opacity': 0.5, // Adjust opacity if needed
    },
    });
  });
    return () => {
      map.remove();
    };
  }, []);
  
  // Update the map when the selected apple changes
  useEffect(() => {
    if (!mapRef.current || !selectedApple) return;
  
    const map = mapRef.current;
  
    // Get the soil types from the selected apple
    const soilTypes = selectedApple["Soil type(-s)"]
      .split(", ")
      .map((type) => type.trim());
  
    // Check specific soil type combinations
    const hasLoam = soilTypes.includes("Loam");
    const hasClay = soilTypes.includes("Clay");
    const hasSand = soilTypes.includes("Sand");
    const hasPeat = soilTypes.includes("Peat");
  
    // Define rank color map
    const rankColorMap = {
      5: "#006400", // Dark green
      4: "#32CD32", // Lime green
      3: "#FFD700", // Yellow
      2: "#FFA500", // Orange
      1: "#FF4500", // Orange-red
      0: "#FF0000", // Red
    };
  
    // Determine which dataset to use
    let dataset;
    if (hasLoam && hasClay) {
      dataset = loamAndClayBasedApples;
    } else if (hasLoam && hasSand) {
      dataset = loamAndSandBasedApples;
    } else if (hasLoam && hasPeat) {
      dataset = loamAndPeatBasedApples;
    } else if (hasLoam) {
      dataset = loamBasedApples;
    } else {
      dataset = null; // No valid soil type found
    }
  
    if (dataset) {
      // Apply paint properties to the map using the dataset
      map.setPaintProperty("bodenschatzung", "fill-color", [
        "match",
        ["get", "KN1"],
        ...Object.entries(dataset).flatMap(([key, info]) => [
          info.value,
          rankColorMap[info.rank],
        ]),
        "#cccccc", // Default gray color for unmatched areas
      ]);
    } else {
      // Handle case where no dataset matches
      map.setPaintProperty("bodenschatzung", "fill-color", "#cccccc"); // Default gray
    }
  }, [selectedApple]);
  

  return (
    // Render the map and sidebar
    <div className="app">
      {/* Map */}
      <div className="map">
        <div
          id="map"
          style={{ width: "100%", height: "75vh" }}
        ></div>
        {/* Sidebar */}
        <div
          className={`sidebar ${isSidebarVisible ? "visible" : ""}`}
          style={{
            width: "20%",
            height: "100vh",
            background: "#f4f4f4",
            padding: "10px",
            overflowY: "auto",
            position: "fixed",
            right: isSidebarVisible ? "0" : "-30%",
            transition: "right 0.3s ease",
          }}
        >
          <h3
          style={{ position: "absolute", top: "100px", left: "10px"}}
          >Apfelinformationen</h3>
          {/* Add a close button to the sidebar */}
          <button
            onClick={toggleSidebar}
            style={{ position: "absolute", top: "170px", left: "10px"}}
          >
            {/* Close button */}
            <strong>Seitenleiste einklappen</strong>
          </button>
          {/* Sidebar content */}
          <div
          style={{ position: "absolute", top: "200px", left: "10px"}}
          >{sidebarContent}
          </div>
        </div>
      </div>
      {/* Dropdown */}
      <select onChange={handleSelectChange} style={{ position: "absolute", top: "150px", left: "150px" }}>
        <option value="">Apfel auswählen</option>
        {apples.map((apple) => (
          <option key={apple["Name of the apple"]} value={apple["Name of the apple"]}>
            {apple["Name of the apple"]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
