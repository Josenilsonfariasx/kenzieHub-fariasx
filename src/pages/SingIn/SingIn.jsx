import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { Api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationLogin } from "./ValidationLogin";
import { toast } from "react-toastify";
import { useState } from "react";
export const SingIn = ({user, setUser}) => {
    const navi = useNavigate()
    const [loading, setLoading] = useState()
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver:zodResolver(ValidationLogin)
    })

    const login = async(form) =>{
        try {
            setLoading(true)
            const {data} = await Api.post("/sessions", form)
            setUser(data.user)
            localStorage.setItem("@KU-User", data.token)
            toast.success("Logado com sucesso")
            navi("/register")
        } catch (error) {
            {"Incorrect email / password combination".includes(error.response.data.message) ? (
                toast.warning("Email ou Senha incorretos")
            ): null}
            console.log(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    const submit = (dataForm) =>{
        login(dataForm)
    }
    
    return (
        <>
            <Header visible={false} />
            <main className={style.main}>
                <h1 className="title white">Login</h1>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <Input label="Email" type="text" placeholder="Digite seu email" {...register("email")} error={errors.email}/>
                            <Input label="senha" type="password" placeholder="Digite seu senha"{...register("password")} error={errors.password}/>
                            <button className="button">{!loading ? "Entrar" : "Tentando conectar"}</button>
                        </div>
                    </form>
                    <span className="title headline grey">Ainda não possui uma conta?</span>
                    <button className="button variant" onClick={()=> navi("/register")}>Cadastre-se</button>
                </div>
            </main>
        </>
    );
};
