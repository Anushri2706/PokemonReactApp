import React from "react";

const Card =({pokemon, loading, infoPokemon})=>{
    console.log(pokemon)
    return(
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2> 
                                <h3>Hallo</h3>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}

export default Card;