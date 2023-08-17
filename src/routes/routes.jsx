import { Route, Routes } from "react-router-dom";
import { SingIn } from "../pages/SingIn/SingIn";
import { Register } from "../pages/Register/Register";
import { Dashboard } from "../pages/Dashborad/Dashborad";
import { UserProvider } from "../providers/UserContext";
import { ProtectedRoutes } from "../ProtectedRoutes/ProtectedRoutes";

export const RoutesMain = () =>{
    return (
        <UserProvider>
            <Routes>
                    <Route path="/" element={<SingIn/>}/>
                    <Route path="/register" element={<Register />}/>
                <Route path="/home" element={<ProtectedRoutes />}>
                    <Route index element={<Dashboard />}/>
                </Route>
            </Routes>
        </UserProvider>
    )
}