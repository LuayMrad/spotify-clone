import { React, useState } from "react";
import "../styles/login.css";
import Constants from "../util/constants";

const Login = () => {
  const loginUrl = `${Constants.AUTH_ENDPOINT}?client_id=${Constants.CLIENT_ID}&redirect_uri=${Constants.REDIRECT_URI}&response_type=token&show_dialog=true`;

  return (
    <div className="Login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
