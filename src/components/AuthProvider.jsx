import { useNavigate } from "react-router-dom"
import { auth, getUserInfo, registerNewUser, userExist } from "../firebase/firebase"
import { GoogleAuthProvider , onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { useEffect, useState } from "react"

const AuthProvider = ({children , onUserLogin , onUserNotLogin, onUserNotRegister}) => {

    useEffect(()=>{
        onAuthStateChanged(auth, handleUserStateChanged)
    },[])

    const handleUserStateChanged = async(user) => {
        if(user){
            const isRegister = await userExist(user.uid)
            if(isRegister){
                const userInfo = await getUserInfo(user.uid)
                if(userInfo.processCompleted){
                    onUserLogin(userInfo)
                } else {
                    onUserNotLogin(userInfo)
                }
            } else {
                await registerNewUser({
                    uid: user.uid,
                    displayName: user.displayName,
                    profiePicture: "",
                    username: "",
                    processCompleted: false
                })
                onUserNotLogin(user)
            }
        } else {
            onUserNotRegister()
        }
    }

    return (
        <>{children}</>
    )
}

export default AuthProvider