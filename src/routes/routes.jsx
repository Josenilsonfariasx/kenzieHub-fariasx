import { Route, Routes } from "react-router-dom"
import { SingIn } from "../pages/SingIn/SingIn"
import { Register } from "../pages/Register/Register"
import { useState } from "react"

export const RoutesMain = () =>{
    const [user, setUser] = useState()
    console.log(user)
    return (
        <Routes>
            <Route path="/" element={<SingIn user={user}  setUser={setUser} />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    )
}