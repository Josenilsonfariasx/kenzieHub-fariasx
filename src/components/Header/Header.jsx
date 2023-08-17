import logo from "../../assets/Logo.svg";
import { useUserContext } from "../../providers/UserContext";
import style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
export const Header = ({ visible}) => {
    const {user, logout} = useUserContext()
    const navi = useNavigate()
    return (
        <header className={(visible ? style.headerBtn : style.header)}>
            <div className="container">
                <img src={logo} alt="Kenzie Hub" />
                {visible ? (
                    user ? (
                        <button className="button variant" onClick={()=>logout() }>Sair</button>
                    ):<button className="button variant" onClick={()=> navi("/")}>Voltar</button>
                ): null}
            </div>
        </header>
    );
};
