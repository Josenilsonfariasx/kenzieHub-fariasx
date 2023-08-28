import { MdClose } from "react-icons/md"

import style from "./style.module.scss"
import { Input } from "../Input/Input"
import { useForm } from "react-hook-form"
import { useTechContext } from "../../providers/TechContext"

export const ModalEdit = ({ visible, EditModaValue }) => {
    const { register, handleSubmit } = useForm()
    const { editTech } = useTechContext()

    const submit = (status) => {
        const id = EditModaValue[0].id
        editTech(id, status)
        visible(false)
    }
    return (
        <div role="dialog" className={style.modalOverlay}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <span className="title two white">Editar Tecnologia</span>
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
                            value={EditModaValue}
                            edit={true}
                        />
                        <label className="title headline white">Selecionar Status</label>
                        <select {...register("status")}>
                            <option value=""> Altere o status </option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediario</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button className="button">Salvar Alterações</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
