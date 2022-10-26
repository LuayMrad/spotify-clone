import { useEffect } from "react"
import Token from "../util/token"


const ReRoute = () => {

    useEffect(() => {
     
     Token.setToken()

     //   window.location = '/search'

    }, [])

    return(
        <div>Re-routing you to search</div>
    )
}

export default ReRoute