import { useForm } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import {zodResolver} from "@hookform/resolvers/zod"
import { Validation } from "../../components/ValidationZot";
import { Api } from "../../services/api";
import style from "./style.module.scss"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Register = ()=>{
    const [loading, setLoading] = useState()
    const navi = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver:zodResolver(Validation)
    })
    const registerUser = async (form) =>{
        try {
            setLoading(true)
            const {data} = await Api.post('/users', form)
            toast.success("Voce foi redirecionado para o login 🚀")
            navi("/")
        } catch (error) {
            toast.warning(`Algo de errado aconteceu, tente novamente😡`)
        } finally {
            setLoading(false)
        }
    }
    const submit = (dataForm) =>{
        const {email, password, name, bio, contact, course_module} = dataForm
        const newForm = {
            email,
            password,
            name, 
            bio, 
            contact, 
            course_module
        }
        registerUser(newForm)
        
    }

    return (
        <>
        <Header visible={true}/>
        <main className={style.main}>
                <h1 className="title white">Crie uma conta</h1>
                    <span className="title headline grey">Rapido e gratis, vamos nessa 🚀</span>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <Input label="Nome" type="text" placeholder="Digite seu Nome" {...register("name")} error={errors.name}/>
                            <Input label="Email" type="text" placeholder="Digite seu email" {...register("email")} error={errors.email}/>
                            <Input label="Senha" type="password" placeholder="Digite seu senha" {...register("password")} error={errors.password}/>
                            <Input label="Confirme sua senha" type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} error={errors.confirmPassword}/>
                            <Input label="Bio" type="text" placeholder="Fale sobre voce" {...register("bio")} error={errors.bio}/>
                            <Input label="Contato" type="text" placeholder="Opção de contato contato" {...register("contact")} error={errors.contact}/>
                            <label htmlFor="module" className="title headline white">Selecionar modulo</label>
                            <select {...register("course_module")} name="module">
                                {/* <option value=""> Selecionar</option> */}
                                <option value="Primeiro modulo (M1)">Primeiro modulo</option>
                                <option value="Segundo modulo (M2)">Segundo modulo</option>
                                <option value="Terceiro modulo (M3)">Terceiro modulo</option>
                                <option value="Quarto modulo (M4)">Quarto modulo</option>
                                <option value="Quinto modulo (M5)">Quinto modulo</option>
                                <option value="Sexto modulo (M6)">Sexto modulo</option>
                            </select>
                            {errors.course_module ? <span className="title headline rose">{errors.course_module.message}</span> : null}
                            <button className="button">{loading ? "Cadastrando" :"Cadastre-se"}</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}