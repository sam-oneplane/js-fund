const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}


const getArtistsName = (dataObj, arr=[]) => {
    Object.keys(dataObj).forEach(key => {
        // if it is an array iterate an move to arr
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach((artist) =>{
                arr.push(artist);
            });
        }
        // if not array call recirsive with the object key
        getArtistsName(dataObj[key], arr);
    });
    return arr;
} 

console.log(getArtistsName(artistsByGenre));
