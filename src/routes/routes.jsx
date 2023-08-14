import { Route, Routes } from "react-router-dom"
import { SingIn } from "../pages/SingIn/SingIn"
import { Register } from "../pages/Register/Register"
import { useState } from "react"
import { Dashboard } from "../pages/Dashborad/Dashborad"

export const RoutesMain = () =>{
    const [user, setUser] = useState()
    return (
        <Routes>
            <Route path="/" element={<SingIn user={user} setUser={setUser} />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/home" element={<Dashboard user={user} setUser={setUser}  />}/>
        </Routes>
    )
}