// num = position of fib elements
const fib = (num, arr= [0,1]) => {
    if (num <= 2) return arr;
    const [next2Last, last] = arr.slice(-2);
    return fib(num - 1, [...arr, next2Last+last]);
}

console.log(fib(15))

const fibPos = (pos) => {
    if (pos < 2) return pos;
    return fibPos(pos -1) + fibPos(pos -2);
}

// const fibPos = (pos) =>  pos < 2 ? pos : fibPos(pos -1) + fibPos(pos -2)

console.log(fibPos(10))



const artistsByGenre = {
    jazz: {
            classic: ["Miles Davis", "John Coltrane"],
            blue: ["Billie Holiday", "Duke Ellington", "Charlie Parker"], 
    },
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "WhiteSnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["JoyWave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Camp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}


const getArtistsName = (dataObj, arr=[]) => {
    Object.keys(dataObj).forEach(key => {
        // handle case when element in tree is array
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach((artist) =>{
                arr.push(artist);
            });
        }
        // if not array call recursive with the object key
        getArtistsName(dataObj[key], arr);
    });
    return arr;
} 

console.log(getArtistsName(artistsByGenre));
