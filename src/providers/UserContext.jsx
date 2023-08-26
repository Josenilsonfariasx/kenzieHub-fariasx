import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [tech, setTech] = useState(null)
    const navi = useNavigate();

    useEffect(() => {
        const authLogin = async () => {
            const token = localStorage.getItem("@KU-User");
            if (token) {
                try {
                    const { data } = await Api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(data);
                    setTech(data.techs)
                    navi("/home");
                } catch (error) {
                    console.log(error);
                    toast.warning(error.message);
                    navi("/");
                }
            } else {
                navi("/");
            }
        };
        authLogin();
    }, []);

    const registerUser = async (form) => {
        try {
            const { data } = await Api.post("/users", form);
            toast.success("Voce foi redirecionado para o login 🚀");
            navi("/");
        } catch (error) {
            toast.warning(`Algo de errado aconteceu, tente novamente😡`);
        }
    };

    const login = async (form) => {
        try {
            const { data } = await Api.post("/sessions", form);
            setUser(data.user);
            localStorage.setItem("@KU-User", data.token);
            localStorage.setItem("@KU-Id", data.user.id);
            toast.success("Logado com sucesso");
            navi("/home");
        } catch (error) {
            {
                "Incorrect email / password combination".includes(
                    error.response.data.message
                )
                    ? toast.warning("Email ou Senha incorretos")
                    : null;
            }
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("@KU-User");
        navi("/");
    };

    return (
        <UserContext.Provider value={{ user, tech, setTech, registerUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
