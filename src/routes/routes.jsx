import { Route, Routes } from "react-router-dom"
import { SingIn } from "../pages/SingIn/SingIn"
import { Register } from "../pages/Register/Register"

export const RoutesMain = () =>{
    return (
        <Routes>
            <Route path="/" element={<SingIn />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    )
}