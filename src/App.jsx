import { useEffect, useState } from "react";
 import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}:text?size=:size&color=:color/c/s/:text?s=:size&c=:colorjson=true`
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function App (){
    const [fact , setFact] = useState('lorem ipsum cat fact whatever')
    const [ImgaeUrl, setImageUrl] = useState()
    
    useEffect( () =>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
                const threeFirstWord = fact.split('', 3).join(' ')
                // const firstWord = fact.split('').slice(0, 3).join(' ')

            fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response =>{
                const { url } = response
                setImageUrl(url)
            })
            })
    }, [])

    return (
        <main> 
        <h1>App de gatitos</h1>
       {fact && <p>{fact}</p>}
       {ImgaeUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${ImgaeUrl}`} alt={`Imagen extraida usando las tres palabras por ${fact}`}/>}
        </main>
    )
}
                // useEffect( ()=>{
                //     async function getRandomFact () {
                //         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
                //         const json = await res.json()
                //         setFact(json.fact)
                //     }
                //     getRandomFact()
                // },[])