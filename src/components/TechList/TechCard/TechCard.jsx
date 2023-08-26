import icon_paint from "../../../assets/paint.svg";
import icon_trash from "../../../assets/trash.svg";
import style from "./style.module.scss";

export const TechCard = ({title, status}) => {
    return (
        <>
            <li className={style.li}>
                <div>
                    <div>
                        <span className="title two white">{title}</span>
                    </div>
                    <div>
                        <span className="title handline grey">{status}</span>
                        <img src={icon_paint} alt="pincel" />
                        <img src={icon_trash} alt="lixeira" />
                    </div>
                </div>
            </li>
        </>
    );
};
