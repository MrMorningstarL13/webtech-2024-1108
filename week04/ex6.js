async function getCountryBoundingBox (name){
    try{
        const response = await fetch(`https://nominatim.openstreetmap.org/search?country=romania&format=json`)
        const data = await response.json;
        console.log(data)
        return data;
    }catch(error){
        console.warn(error)
    }
}

getCountryBoundingBox('romania')