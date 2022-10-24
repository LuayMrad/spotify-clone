import Constants from "./constants";

const Token = {
  setToken: () => {
    const urlHash = window.location.hash.substring(1);

    const parsedHash = new URLSearchParams(urlHash);

    const token = parsedHash.get("access_token");

    if (token === null || token === undefined) {
      if (localStorage.getItem(Constants.TOKEN_KEY) === null) {
        window.location = Constants.DEFAULT_REROUTE_LOCATION;
      }
    }

    localStorage.setItem(Constants.TOKEN_KEY, token);
  },

  fetchToken: () => {
    return localStorage.getItem(Constants.TOKEN_KEY);
  },
};

export default Token;
