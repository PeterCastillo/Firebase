import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthProvider from "../components/AuthProvider"
import { existsUserName, upDateUser } from "../firebase/firebase"

const ChooseUserName = () => {

    const [ state , setState ] = useState(0)
    const [ currentUser, setCurrentUser ] = useState({})
    const [ userName , setUserName ] = useState('')

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleContinue = async() => {
        if(userName != ""){
            const exist = await existsUserName(userName)
            if(exist){
                setState(5)
            } else {
                const tmp = {...currentUser}
                tmp.username = userName
                tmp.processCompleted = true
                await upDateUser(tmp)
                setState(6)
            }
        }
    }

    const Navigate = useNavigate()

    const HandleLogin = (user) => {
        Navigate('/Dashboard')
    }
    const HandleNotLogin = (user) => {
        setState(3)
        setCurrentUser(user)
    }
    const HandleNotRegister = () => {
        Navigate('/Login')
    }
    
    if(state == 3) {
        return (
            <div className="row mt-3">
                <h1>Bienvenido {currentUser.displayName}</h1>
                <p>Elije el nombre de usuario</p>
                <input 
                    type="text"
                    onChange={handleUserName} 
                />
                <button onClick={handleContinue}>Continuar</button>
                {state == 5 ? <span>Nombre YA existe</span>: <></>}
            </div>
        )
    }

    if(state == 6){
        return (
            <div>
                <div>Felicidades ya puedes ir al dashBoard</div>
                <Link to={'/Dashboard'}>Continuar</Link>
            </div>
        )
    }
    return (
        <AuthProvider onUserLogin={HandleLogin} onUserNotLogin={HandleNotLogin} onUserNotRegister={HandleNotRegister}>
            <div>Loading...</div>
        </AuthProvider>
    )
}

export default ChooseUserName