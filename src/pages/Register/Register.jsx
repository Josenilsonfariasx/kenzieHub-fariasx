import { useForm } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import {zodResolver} from "@hookform/resolvers/zod"
import { Validation } from "../../components/ValidationZot";
import style from "./style.module.scss"

export const Register = ()=>{
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver:zodResolver(Validation)
    })
    const submit = (dataForm) =>{
        console.log(dataForm)
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
                            <select {...register("module")} name="module">
                                <option value=""> Selecionar</option>
                                <option value="m1">Primeiro modulo</option>
                                <option value="m2">Segundo modulo</option>
                                <option value="m3">Terceiro modulo</option>
                                <option value="m4">Quarto modulo</option>
                                <option value="m5">Quinto modulo</option>
                                <option value="m6">Sexto modulo</option>
                            </select>
                            {errors.module ? <span className="title headline rose">{errors.module.message}</span> : null}
                            <button className="button">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}