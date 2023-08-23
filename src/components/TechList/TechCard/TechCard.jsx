import icon_paint from "../../../assets/paint.svg";
import icon_trash from "../../../assets/trash.svg";
import style from "./style.module.scss";

export const TechCard = () => {
    return (
        <>
            <li className={style.li}>
                <div>
                    <div>
                        <span className="title two white">React</span>
                    </div>
                    <div>
                        <span className="title handline grey">Iniciante</span>
                        <img src={icon_paint} alt="pincel" />
                        <img src={icon_trash} alt="lixeira" />
                    </div>
                </div>
            </li>
        </>
    );
};
