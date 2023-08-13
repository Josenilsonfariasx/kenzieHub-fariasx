import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import style from "./style.module.scss";
export const SingIn = () => {
    const navi = useNavigate()
    
    return (
        <>
            <Header visible={false} />
            <main className={style.main}>
                <h1 className="title white">Login</h1>
                <div>
                    <form>
                        <div>
                            <Input label="Email" type="text" placeholder="Digite seu email"/>
                            <Input label="senha" type="password" placeholder="Digite seu senha"/>
                            <button className="button">Entrar</button>
                        </div>
                    </form>
                    <span className="title headline grey">Ainda não possui uma conta?</span>
                    <button className="button variant" onClick={()=> navi("/register")}>Cadastre-se</button>
                </div>
            </main>
        </>
    );
};
