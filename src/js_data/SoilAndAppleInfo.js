// Information about apples that grow well in loam soils
const loamBasedApples = {
    Sand: { value: 1100, rank: 0 },
    ClayeySand: { value: 1200, rank: 0 },
    LoamySand: { value: 2100, rank: 2 },
    HeavilyLoamySand: { value: 2200, rank: 2 },
    Loam: { value: 3100, rank: 5 },
    SandyLoam: { value: 3200, rank: 4 },
    Clay: { value: 4100, rank: 0 },
    HeavyLoam: { value: 4200, rank: 5, },
    Peat: { value: 5000, rank: 0 },
    SandPeat: { value: 6110, rank: 0 },
    LoamySandPeat: { value: 6120, rank: 2 },
    LoamPeat: { value: 6130, rank: 3 },
    ClayPeat: { value: 6140, rank: 0 },
    PeatSand: { value: 6210, rank: 0 },
    PeatLoamySand: { value: 6220, rank: 1 },
    PeatLoam: { value: 6230, rank: 4 },
    PeatClay: { value: 6240, rank: 0 },
    SandOnSandyLoam: { value: 7110, rank: 1 },
    SandOnLoam: { value: 7120, rank: 3 },
    SandOnHeavyLoam: { value: 7130, rank: 3 },
    SandOnClay: { value: 7140, rank: 0 },
    ClayeySandOnLoam: { value: 7210, rank: 3 },
    ClayeySandOnHeavyLoam: { value: 7220, rank: 3 },
    ClayeySandOnClay: { value: 7230, rank: 0 },
    LoamySandOnHeavyLoam: { value: 7310, rank: 4 },
    LoamySandOnSand: { value: 7320, rank: 1 },
    LoamySandOnClay: { value: 7330, rank: 1 },
    HeavilyLoamySandOnClay: { value: 7400, rank: 1 },
    ClayOnHeavilyLoamySand: { value: 7510, rank: 1 },
    ClayOnLoamySand: { value: 7520, rank: 1 },
    ClayOnClayeySand: { value: 7530, rank: 0 },
    ClayOnSand: { value: 7540, rank: 0 },
    HeavyLoamOnLoamySand: { value: 7610, rank: 4 },
    HeavyLoamOnClayeySand: { value: 7620, rank: 2 },
    HeavyLoamOnSand: { value: 7630, rank: 2 },
    LoamOnClayeySand: { value: 7710, rank: 2 },
    LoamOnSand: { value: 7720, rank: 2 },
    SandyLoamOnSand: { value: 7800, rank: 1 },
    SandOnPeat: { value: 8110, rank: 0 },
    LoamySandOnPeat: { value: 8120, rank: 1 },
    LoamOnPeat: { value: 8130, rank: 2 },
    ClayOnPeat: { value: 8140, rank: 0 },
    PeatOnSand: { value: 8210, rank: 0 },
    PeatOnLoamySand: { value: 8220, rank: 1 },
    PeatOnLoam: { value: 8230, rank: 3 },
    PeatOnClay: { value: 8240, rank: 0 },
    LoamToPeatTransition: { value: 9120, rank: 3 },
    LoamySandWithHighStoneContent: { value: 9130, rank: 1 },
    LoamWithHighStoneContent: { value: 9140, rank: 4 }
  }

  // Information about apples that grow well in loam and sand soils
  const loamAndSandBasedApples = {
    Sand: { value: 1100, rank: 5 },
    ClayeySand: { value: 1200, rank: 4 },
    LoamySand: { value: 2100, rank: 5 },
    HeavilyLoamySand: { value: 2200, rank: 5 },
    Loam: { value: 3100, rank: 5 },
    SandyLoam: { value: 3200, rank: 5 },
    Clay: { value: 4100, rank: 0 },
    HeavyLoam: { value: 4200, rank: 5, },
    Peat: { value: 5000, rank: 0 },
    SandPeat: { value: 6110, rank: 3 },
    LoamySandPeat: { value: 6120, rank: 4 },
    LoamPeat: { value: 6130, rank: 3 },
    ClayPeat: { value: 6140, rank: 0 },
    PeatSand: { value: 6210, rank: 4 },
    PeatLoamySand: { value: 6220, rank: 4 },
    PeatLoam: { value: 6230, rank: 4 },
    PeatClay: { value: 6240, rank: 0 },
    SandOnSandyLoam: { value: 7110, rank: 5 },
    SandOnLoam: { value: 7120, rank: 5 },
    SandOnHeavyLoam: { value: 7130, rank: 5 },
    SandOnClay: { value: 7140, rank: 3 },
    ClayeySandOnLoam: { value: 7210, rank: 4 },
    ClayeySandOnHeavyLoam: { value: 7220, rank: 4 },
    ClayeySandOnClay: { value: 7230, rank: 2 },
    LoamySandOnHeavyLoam: { value: 7310, rank: 5 },
    LoamySandOnSand: { value: 7320, rank: 5 },
    LoamySandOnClay: { value: 7330, rank: 2 },
    HeavilyLoamySandOnClay: { value: 7400, rank: 2 },
    ClayOnHeavilyLoamySand: { value: 7510, rank: 3 },
    ClayOnLoamySand: { value: 7520, rank: 3 },
    ClayOnClayeySand: { value: 7530, rank: 2 },
    ClayOnSand: { value: 7540, rank: 3 },
    HeavyLoamOnLoamySand: { value: 7610, rank: 5 },
    HeavyLoamOnClayeySand: { value: 7620, rank: 3 },
    HeavyLoamOnSand: { value: 7630, rank: 5 },
    LoamOnClayeySand: { value: 7710, rank: 4 },
    LoamOnSand: { value: 7720, rank: 5 },
    SandyLoamOnSand: { value: 7800, rank: 5 },
    SandOnPeat: { value: 8110, rank: 2 },
    LoamySandOnPeat: { value: 8120, rank: 1 },
    LoamOnPeat: { value: 8130, rank: 2 },
    ClayOnPeat: { value: 8140, rank: 0 },
    PeatOnSand: { value: 8210, rank: 3 },
    PeatOnLoamySand: { value: 8220, rank: 3 },
    PeatOnLoam: { value: 8230, rank: 3 },
    PeatOnClay: { value: 8240, rank: 0 },
    LoamToPeatTransition: { value: 9120, rank: 3 },
    LoamySandWithHighStoneContent: { value: 9130, rank: 1 },
    LoamWithHighStoneContent: { value: 9140, rank: 4 }
  }

  // Information about apples that grow well in loam and clay soils
  const loamAndClayBasedApples = {
    Sand: { value: 1100, rank: 0 },
    ClayeySand: { value: 1200, rank: 2 },
    LoamySand: { value: 2100, rank: 4 },
    HeavilyLoamySand: { value: 2200, rank: 0 },
    Loam: { value: 3100, rank: 5 },
    SandyLoam: { value: 3200, rank: 4 },
    Clay: { value: 4100, rank: 5 },
    HeavyLoam: { value: 4200, rank: 5, },
    Peat: { value: 5000, rank: 0 },
    SandPeat: { value: 6110, rank: 0 },
    LoamySandPeat: { value: 6120, rank: 2 },
    LoamPeat: { value: 6130, rank: 3 },
    ClayPeat: { value: 6140, rank: 3 },
    PeatSand: { value: 6210, rank: 0 },
    PeatLoamySand: { value: 6220, rank: 1 },
    PeatLoam: { value: 6230, rank: 4 },
    PeatClay: { value: 6240, rank: 4 },
    SandOnSandyLoam: { value: 7110, rank: 1 },
    SandOnLoam: { value: 7120, rank: 3 },
    SandOnHeavyLoam: { value: 7130, rank: 3 },
    SandOnClay: { value: 7140, rank: 3 },
    ClayeySandOnLoam: { value: 7210, rank: 4 },
    ClayeySandOnHeavyLoam: { value: 7220, rank: 4 },
    ClayeySandOnClay: { value: 7230, rank: 4 },
    LoamySandOnHeavyLoam: { value: 7310, rank: 4 },
    LoamySandOnSand: { value: 7320, rank: 1 },
    LoamySandOnClay: { value: 7330, rank: 4 },
    HeavilyLoamySandOnClay: { value: 7400, rank: 4 },
    ClayOnHeavilyLoamySand: { value: 7510, rank: 2 },
    ClayOnLoamySand: { value: 7520, rank: 2 },
    ClayOnClayeySand: { value: 7530, rank: 3 },
    ClayOnSand: { value: 7540, rank: 2 },
    HeavyLoamOnLoamySand: { value: 7610, rank: 4 },
    HeavyLoamOnClayeySand: { value: 7620, rank: 4 },
    HeavyLoamOnSand: { value: 7630, rank: 2 },
    LoamOnClayeySand: { value: 7710, rank: 3 },
    LoamOnSand: { value: 7720, rank: 2 },
    SandyLoamOnSand: { value: 7800, rank: 1 },
    SandOnPeat: { value: 8110, rank: 0 },
    LoamySandOnPeat: { value: 8120, rank: 1 },
    LoamOnPeat: { value: 8130, rank: 2 },
    ClayOnPeat: { value: 8140, rank: 2 },
    PeatOnSand: { value: 8210, rank: 0 },
    PeatOnLoamySand: { value: 8220, rank: 1 },
    PeatOnLoam: { value: 8230, rank: 3 },
    PeatOnClay: { value: 8240, rank: 3 },
    LoamToPeatTransition: { value: 9120, rank: 3 },
    LoamySandWithHighStoneContent: { value: 9130, rank: 1 },
    LoamWithHighStoneContent: { value: 9140, rank: 4 }
  }

  // Information about soil type that favor apple trees that grow in loam and peat
  const loamAndPeatBasedApples = {
    Sand: { value: 1100, rank: 0 },
    ClayeySand: { value: 1200, rank: 0 },
    LoamySand: { value: 2100, rank: 2 },
    HeavilyLoamySand: { value: 2200, rank: 2 },
    Loam: { value: 3100, rank: 5 },
    SandyLoam: { value: 3200, rank: 4 },
    Clay: { value: 4100, rank: 0 },
    HeavyLoam: { value: 4200, rank: 5, },
    Peat: { value: 5000, rank: 5 },
    SandPeat: { value: 6110, rank: 4 },
    LoamySandPeat: { value: 6120, rank: 5 },
    LoamPeat: { value: 6130, rank: 5 },
    ClayPeat: { value: 6140, rank: 4 },
    PeatSand: { value: 6210, rank: 2 },
    PeatLoamySand: { value: 6220, rank: 3 },
    PeatLoam: { value: 6230, rank: 5 },
    PeatClay: { value: 6240, rank: 3 },
    SandOnSandyLoam: { value: 7110, rank: 1 },
    SandOnLoam: { value: 7120, rank: 3 },
    SandOnHeavyLoam: { value: 7130, rank: 3 },
    SandOnClay: { value: 7140, rank: 0 },
    ClayeySandOnLoam: { value: 7210, rank: 3 },
    ClayeySandOnHeavyLoam: { value: 7220, rank: 3 },
    ClayeySandOnClay: { value: 7230, rank: 0 },
    LoamySandOnHeavyLoam: { value: 7310, rank: 4 },
    LoamySandOnSand: { value: 7320, rank: 1 },
    LoamySandOnClay: { value: 7330, rank: 1 },
    HeavilyLoamySandOnClay: { value: 7400, rank: 1 },
    ClayOnHeavilyLoamySand: { value: 7510, rank: 1 },
    ClayOnLoamySand: { value: 7520, rank: 1 },
    ClayOnClayeySand: { value: 7530, rank: 0 },
    ClayOnSand: { value: 7540, rank: 0 },
    HeavyLoamOnLoamySand: { value: 7610, rank: 4 },
    HeavyLoamOnClayeySand: { value: 7620, rank: 2 },
    HeavyLoamOnSand: { value: 7630, rank: 2 },
    LoamOnClayeySand: { value: 7710, rank: 2 },
    LoamOnSand: { value: 7720, rank: 2 },
    SandyLoamOnSand: { value: 7800, rank: 1 },
    SandOnPeat: { value: 8110, rank: 3 },
    LoamySandOnPeat: { value: 8120, rank: 4 },
    LoamOnPeat: { value: 8130, rank: 5 },
    ClayOnPeat: { value: 8140, rank: 0 },
    PeatOnSand: { value: 8210, rank: 2 },
    PeatOnLoamySand: { value: 8220, rank: 3 },
    PeatOnLoam: { value: 8230, rank: 5 },
    PeatOnClay: { value: 8240, rank: 2 },
    LoamToPeatTransition: { value: 9120, rank: 5 },
    LoamySandWithHighStoneContent: { value: 9130, rank: 1 },
    LoamWithHighStoneContent: { value: 9140, rank: 4 }
  }

// Information about meadow orchards from the Bavarian State Institute for Viticulture and Horticulture
const meadowOrchards = [
  {
    name: "Neuburger Kräutergarten - Verschönerungsverein Neuburg",
    location: [11.1770117, 48.733631],
    address: "Franziskanerstraße 207, 86633 Neuburg an der Donau",
    website: "www.verschoenerungsverein-neuburg.de",
    email: "axel.kalkowski@t-online.de",
    phone: "+490 084 319 377",
  },

  {
    name: "Obstbaumwiese an der Maximilianstraße",
    location: [11.41614, 48.7422715],
    address: "Isidor-Stürber-Straße 16, 85051 Ingolstadt",
    website: "",
    email: "",
    phone: "",
  },

  {
    name: "Bund Naturschutz in Bayern e.V. Kreisgruppe Neuburg-Schrobenhausen",
    location: [11.17729, 48.73717],
    address: "Amalienstraße 20, 86633 Neuburg an der Donau",
    website: "neuburg-schrobenhausen.bund-naturschutz.de",
    email: "neuburg@bund-naturschutz.de",
    phone: "+490 084 316 412 303",
  },

  {
    name: "Reng´s Kirschen",
    location: [11.1595969, 48.7582061],
    address: "Gietlhausen, 86633 Neuburg an der Donau",
    website: "",
    email: "",
    phone: "+490 01744371358",
  },

  {
    name: "Obstbaumwiese",
    location: [11.4030509, 48.8010929],
    address: "Eintrachtstraße 4, 85055 Ingolstadt",
    website: "",
    email: "",
    phone: "",
  },

  {
    name: "Botanischer Obstgarten Donau-Ries auf Schäbles Schenkung",
    location: [10.6725874, 48.8659052],
    address: "St2213, 86650 Wemding",
    website: "www.donau-ries.de",
    email: "info@lra-donau-ries.de",
    phone: "+490 0906 74 - 0",
  },
];

export {
    loamBasedApples,
    loamAndSandBasedApples,
    loamAndClayBasedApples,
    loamAndPeatBasedApples,
    meadowOrchards,
};