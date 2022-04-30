import Input from '../Input'
import Button from '../Button'
import useFormu from '../../hooks/useFormu'

const UserForm = ({ submit }) => {
    const [formu, handleChange, reset] = useFormu({
        name: '',
        lastname: '',
        correo: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formu)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Nombre"
                name="name"
                value={formu.name}
                onChange={handleChange}
                placeholder="Nombre"
            />
            <Input
                label="Apellido"
                name="lastname"
                value={formu.lastname}
                onChange={handleChange}
                placeholder="Apellido"
            />
            <Input
                label="Email"
                name="correo"
                value={formu.correo}
                onChange={handleChange}
                placeholder="Email"
            />
            <Button>enviar</Button>
        </form>
    )
}
export default UserForm
