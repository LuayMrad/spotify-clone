import { React, useEffect, useState } from "react";
import Constants from "../util/constants";
import Api from "../util/api";
import Token from "../util/token";
import { useParams } from "react-router-dom";
import Album from "../components/album";

const ArtistAlbum = () => {
  var token = "";

  const { id } = useParams();

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    token = Token.fetchToken();

    if (token === null) {
      window.location = Constants.DEFAULT_REROUTE_LOCATION;
    }

    fetchArtist();
  }, []);

  const fetchArtist = async () => {
    let endPoint = `${Constants.BASE_URL}/artists/${id}/albums`;

    let data = await Api.getWithAuthToken(endPoint, token);

    if (data.statusCode !== 200) {
      console.error("Error while fetching data");

      return;
    }

    setAlbums(data.data.items);
  };

  return (
    <div>
      {albums.map((album, index) => {
        return <Album key={index} album={album} />;
      })}
    </div>
  );
};

export default ArtistAlbum;
