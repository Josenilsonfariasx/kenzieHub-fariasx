import icon_cross from "../../assets/icon-cross.svg"
import { TechCard } from "./TechCard/TechCard"
import style from "./style.module.scss"
export const TechList = () =>{
    return (
        <>
        <section className={style.section}>
            <div>
                <span className="title two white">Tecnologias</span>
                <img src={icon_cross}></img>
            </div>

            <div className={style.list}>
                <ul>
                    <TechCard />
                </ul>
            </div>
        </section>
        </>
    )
}