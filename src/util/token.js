import Constants from "./constants"
import { Buffer } from 'buffer';

const Token = {

    setToken : async () => {
        
        const parsedQueries = new URLSearchParams(window.location.search)

        if(parsedQueries.get('code') === null){
          window.location = '/login'
        }

        if(parsedQueries.get('error') !== null){
            console.error('User has not accepted to login to spotify')
            return 
        }

        const tokenRequestCode = parsedQueries.get('code')

        let formData = new URLSearchParams();

    
        formData.append("code", tokenRequestCode)

        formData.append("redirect_uri", Constants.REDIRECT_URI)

        formData.append('grant_type', "authorization_code")


        let headers = {

            'Content-Type' : 'application/x-www-form-urlencoded',

            'Authorization' : 'Basic ' + Buffer.from(Constants.CLIENT_ID + ':' + Constants.CLIENT_SECRET).toString('base64')
        
        }

        let data = await fetch(Constants.TOKEN_ENDPOINT, {
            method : 'POST',
            body : formData,
            headers : headers
        })


        if(data.status !== 200)
        {
            console.error(await data.text())
            return
        }

        let token = await data.json()

        localStorage.setItem(Constants.TOKEN_KEY, JSON.stringify(token))

        window.location = '/search'
    },

    fetchToken : () => {

        var token = JSON.parse(localStorage.getItem(Constants.TOKEN_KEY))
        
        // we can implement the refresh token logic here
    
       return token.access_token 
    }
}

export default Token