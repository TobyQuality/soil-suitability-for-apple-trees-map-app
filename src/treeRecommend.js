import soilcodes from "./js_data/soilCode.js";
import appleEnv from "./js_data/appleTreeCondition.js";

// This function takes a feature object as input and returns a tree recommendation
const treeRecommend = (obj) => {
    console.log(obj);
    // Find corresponding soiltype
    const soiltype = soilcodes.find(
        (element) => parseInt(element.value) === obj.properties.KN1
    );

    /*
        Filter out trees that do not have any of the soil types in their
        recommended soil type.
    */
    let recommendedApples = appleEnv.filter((item) => {
        //Error handling for missing data
        try {
            for (let i = 0; i < soiltype.soilCategory.length; i++) {
                if (item.soilType.includes(soiltype.soilCategory[i])) {
                    return true;
                }
            }
            return false;
        } catch (err) {
            return false; // If error, filter out
        }
    });

    /*
        If there are no suitable trees for the soiltype.
    */
    if (recommendedApples.length === 0) {
        return {
            soiltype: soiltype.display,
            recommendedTree: ["No trees were found"],
        };
    }

    /*
        Narrow selection down until there is only one option left, or everything
        has been checked.
    */
    for (
        let i = 0;
        i < soiltype.soilCategory.length && recommendedApples.length !== 1;
        i++
    ) {
        let narrowDownRec = recommendedApples.filter((item) => {
            return item.soilType.includes(soiltype.soilCategory[i]);
        });

        if (narrowDownRec.length > 0) {
            recommendedApples = narrowDownRec;
        }
    }

    return {
        soiltype: soiltype.display,
        treeRecommendation: recommendedApples,
    };
};

export default treeRecommend;
