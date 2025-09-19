import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";

// ⚠️ Added: grab query param from the browser URL
const getUserParam = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("note") || "No note provided";
};

const Main = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDescription, setpokeDescription] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const result = await axios.get(url);
    setNextUrl(result.data.next);
    setPrevUrl(result.data.previous);
    getPokemon(result.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const pokemonDetails = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    setData(pokemonDetails.sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={Data}
            loading={loading}
            infoPokemon={(poke) => setpokeDescription(poke)}
          />

          <div className="btn-group">
            <button
              onClick={() => {
                setData([]);
                setUrl(prevUrl);
              }}
            >
              previous
            </button>
            <button
              onClick={() => {
                setData([]);
                setUrl(nextUrl);
              }}
            >
              next
            </button>
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDescription} />

          {/* ⚠️ Vulnerable: directly injects user-provided query param into DOM */}
          <div
            dangerouslySetInnerHTML={{ __html: getUserParam() }}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
