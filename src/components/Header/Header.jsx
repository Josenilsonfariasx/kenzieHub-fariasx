import logo from "../../assets/Logo.svg";
import style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
export const Header = ({ visible }) => {
    const navi = useNavigate()
    return (
        <header className={(visible ? style.headerBtn : style.header)}>
            <div className="container">
                <img src={logo} alt="Kenzie Hub" />
                {visible ? (
                    <button className="button variant" onClick={()=> navi("/")}>Voltar</button>
                ) : null}
            </div>
        </header>
    );
};
