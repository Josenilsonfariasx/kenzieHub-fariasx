import { MdClose } from "react-icons/md";

import style from "./style.module.scss";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { useTechContext } from "../../providers/TechContext";

export const ModalCreate = ({ visible }) => {
    const { register, handleSubmit } = useForm();
    const { createTech } = useTechContext();

    const submit = (dataForm) => {
        createTech(dataForm);
    };
    return (
        <div role="dialog" className={style.modalOverlay}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <span className="title two white">
                        Cadastrar Tecnologia
                    </span>
                    <button onClick={() => visible(false)}>
                        <MdClose />
                    </button>
                </div>
                <div className={style.divForm}>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input
                            label="Nome"
                            type="text"
                            placeholder="Digite o nome da Tech"
                            {...register("title")}
                        />
                        <label className="title headline white">Selecionar Status</label>
                        <select {...register("status")}>
                            <option value=""> Selecionar</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button className="button">Cadastrar tecnologia</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
