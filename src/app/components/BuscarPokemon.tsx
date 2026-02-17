"use client"

import { useState, useEffect } from "react"


type Pokemon = {
    name: string;
    id: number;
}

function App() {

const [input, setInput] = useState("")
const [pokemon, setPokemon] = useState<Pokemon | null>(null);
const [nombre, setNombre] = useState("")

function inputEscrito (e) {
    setInput(e.target.value)
}

function botonBuscar () {
    setNombre(input)
}

useEffect (() => {
    const fetchPokemon = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
        const data = await response.json()
        console.log(data)
        setPokemon(data)

    } catch(error) {
        console.error("error", error)
    }
}
if(input) {
    fetchPokemon()
}
}, [nombre])
return (
    <div>
        <input value={input} onChange={inputEscrito} placeholder="Ej. Ceruledge"></input>
        <button onClick={botonBuscar}>buscar</button>
        {pokemon && (
            <div>
                <p>{pokemon.name}</p>
                <p>{pokemon.id}</p>
            </div>
        )}
    </div>
)
}
export default App;
