import { React, useState} from 'react';
import '../styles/login.css';
import Constants from '../util/constants';


const  Login =  () =>  {

    function _randomId(){
        
        var alphNumeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        const STR_LEN = 16;

        var id = ""
       
        for(var i = 0; i < STR_LEN; i++){
            id += alphNumeric.charAt(
                Math.floor( Math.random() * alphNumeric.length)
            )
        }

        return id;
    }

    var state = _randomId()


    const  loginUrl = `${Constants.AUTH_ENDPOINT}?client_id=${Constants.CLIENT_ID}&redirect_uri=${Constants.REDIRECT_URI}&response_type=code&state=${state}`;

    return(
        <div className="Login">
            <img 
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt=""
      />
        <a href={loginUrl} >LOGIN WITH SPOTIFY</a>
            
        </div>

        
    )
}


export default Login;
