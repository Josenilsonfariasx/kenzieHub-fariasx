import { useState } from "react";
import icon_cross from "../../assets/icon-cross.svg";
import { TechCard } from "./TechCard/TechCard";
import { ModalCreate } from "../ModalCreate/ModalCreate";
import style from "./style.module.scss";
import { useUserContext } from "../../providers/UserContext";
import { useTechContext } from "../../providers/TechContext";
export const TechList = () => {
    const [visible, setVisible] = useState(false);
    const {tech} = useUserContext()
    return (
        <>
            <section className={style.section}>
                <div>
                    <span className="title two white">Tecnologias</span>
                    <img
                        src={icon_cross}
                        onClick={() => setVisible(true)}
                    ></img>
                </div>

                <div className={style.list}>
                    <ul>
                        {tech
                            ? tech.map((techs) => (
                                    <TechCard
                                        key={techs.id}
                                        title={techs.title}
                                        status={techs.status}
                                        id={techs.id}
                                    />
                                ))
                            : null}
                        {visible ? <ModalCreate visible={setVisible} /> : null}
                    </ul>
                </div>
            </section>
        </>
    );
};
