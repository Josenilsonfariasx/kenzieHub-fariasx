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
            }
        } else {
            toast.warning("Voce precisa estar logado para criar");
            navi("/");
        }
    };

    const removeTech = async (idTech) =>{
        if(token) {
            try {
                console.log(idTech)
                const {data} = await Api.delete(`/users/techs/${idTech}`, {
                    headers:{
                        Authorization : `Bearer ${token}`
                    }
                })
                const newTech = tech.filter((techs)=>{
                    return techs.id != idTech
                })
                setTech(newTech)
                toast.success("Apagado com sucesso")
            } catch (error) {
                toast.warning("Ocerreu um problema, tente novamente mais tarde")
            }
        }else{
            toast.warning("Voce precisa estar logado")
        }
    }

    const editTech = async (idTech, status) =>{
        console.log(status)
        if(token){
            try {
                console.log('entrando aqui')
                const {data} = await Api.put(`/users/techs/${idTech}`,status, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                const editStateTech = tech.filter((techs) =>{
                    return (
                        techs.id = idTech
                    )
                })
                const removeStateTech = tech.filter((techs) =>{
                    return (
                        techs.id != idTech
                    )
                })

                editStateTech[0].status = status.status
                const techEdit = editStateTech
                setTech([...removeStateTech, ...techEdit])
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <TechContext.Provider value={{ createTech, removeTech, editTech}}>
            {children}
        </TechContext.Provider>
    );
};

export const useTechContext = () => useContext(TechContext);
