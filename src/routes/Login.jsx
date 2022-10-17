import { auth, userExist } from "../firebase/firebase"
import { GoogleAuthProvider , onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthProvider from "../components/AuthProvider"

const Login = () => {

    const [ state , setState ] = useState(0)

    const Navigate = useNavigate()

    const HandleOnClick = async() => {
        const googleProvider = new GoogleAuthProvider()
        await signInWithGoogle(googleProvider)
        const signInWithGoogle = async(googleProvider) => {
            try {
                const res = await signInWithPopup(auth, googleProvider)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const HandleLogin = (user) => {
        Navigate('/Dashboard')
    }
    const HandleNotLogin = (user) => {
        Navigate('/ChooseUserName')
    }
    const HandleNotRegister = () => {
        setState(2)
    }

    if(state == 2) {
        return (
            <div className="row mt-3">
                <button onClick={HandleOnClick} className="btn btn-dark mt-2" >
                    Login with Google
                </button>
            </div>
        )
    }
    return (
        <AuthProvider onUserLogin={HandleLogin} onUserNotLogin={HandleNotLogin} onUserNotRegister={HandleNotRegister}>
            <div>Loading...</div>
        </AuthProvider>
    )
}

export default Login