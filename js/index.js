

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}



document.addEventListener('DOMContentLoaded', () => {
    let random = getRandomInt(1, 151)
    console.log(random)
    fetchData(random)
})

// Peticion de datos de API PokeAPI

const fetchData = async (int) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${int}`)
        const data =  await respuesta.json()
        console.log(data.name)
    }catch (error) {
        console.log(error)
    }
}

//..................................