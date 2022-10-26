function getFishType(species) {
    
    let distinctFishTypes = new Set();

    for (const specie of species){
        if(!distinctFishTypes.has(specie.species_type)){
            distinctFishTypes.add(specie.species_type)
        }
    }
    return [...distinctFishTypes];
}

export default getFishType;