import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { useUserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { tech, setTech } = useUserContext();
    let newTech = {};

    const navi = useNavigate();
    const token = localStorage.getItem("@KU-User");
    const createTech = async (form) => {
        if (token) {
            try {
                console.log("entrou");
                const { data } = await Api.post("/users/techs", form, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { title, status, id, created_at, updated_at } = data;
                newTech = {
                    id,
                    title,
                    status,
                    created_at,
                    updated_at,
                };
                const add = { ...newTech };
                setTech([...tech, add]);
                toast.success("Adicionado com sucesso")
            } catch (error) {
                console.log(error);
            }
        } else {
            toast.warning("Voce precisa estar logado para criar");
            navi("/");
        }
    };
    return (
        <TechContext.Provider value={{ createTech }}>
            {children}
        </TechContext.Provider>
    );
};

export const useTechContext = () => useContext(TechContext);
