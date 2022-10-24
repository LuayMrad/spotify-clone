import { React, useEffect, useState } from "react";
import Constants from "../util/constants";
import Api from "../util/api";
import Token from "../util/token";
import CardView from "../components/cardView";
import "../styles/searchBar.css";
import { Container } from "react-bootstrap";

const SearchArtist = () => {
  const queryLimit = 10;
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState("");

  const [foundArtist, setFoundArtist] = useState({ items: [] });

  function onSearch(e) {
    setFoundArtist({ items: [] });
    setQuery(e.target.value);
  }

  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(Token.fetchToken());

    if (token === null) {
      window.location = Constants.DEFAULT_REROUTE_LOCATION;
    }
  }, []);

  const fetchArtist = async (artistQuery) => {
    console.log(token);

    let endPoint = `${
      Constants.BASE_URL
    }/search?type=artist&q=${encodeURIComponent(
      artistQuery
    )}&limit=${queryLimit}&offset=${offset}`;

    console.log(artistQuery + " " + query);

    let data = await Api.getWithAuthToken(endPoint, token);

    if (data.statusCode !== 200) {
      console.error("Error while fetching data");

      return;
    }

    setFoundArtist({
      items: [...foundArtist.items, ...data.data.artists.items],
    });

    setOffset(offset + queryLimit);
  };

  return (
    <Container>
      <div className="input-field">
        <input
          className="input-style"
          placeholder="Search for Artists"
          type="text"
          onChange={(e) => onSearch(e)}
        ></input>
        <button
          className="button"
          onClick={async () => await fetchArtist(query)}
        >
          Search
        </button>
      </div>
      <div className="flex-grow-1 my-2" style={{ overFlowY: "auto" }}>
        {foundArtist.items.map((artist, index) => {
          return <CardView artist={artist} key={index} />;
        })}
      </div>
    </Container>
  );
};

export default SearchArtist;
