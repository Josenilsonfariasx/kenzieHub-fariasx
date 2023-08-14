import logo from "../../assets/Logo.svg";
import style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
export const Header = ({ visible, user, setUser }) => {
    const navi = useNavigate()
    const logout = () =>{
        setUser(null)
        localStorage.removeItem("@KU-User")
        navi("/")    
    }
    return (
        <header className={(visible ? style.headerBtn : style.header)}>
            <div className="container">
                <img src={logo} alt="Kenzie Hub" />
                {visible ? (
                    user ? (
                        <button className="button variant" onClick={()=>logout() }>Sair</button>
                    ):<button className="button variant" onClick={()=> navi("/")}>Voltar</button>
                ) : null}
            </div>
        </header>
    );
};
