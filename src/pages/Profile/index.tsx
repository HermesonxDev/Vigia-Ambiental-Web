import { useState } from "react"
import InputWithLabel from "../../components/InputWithLabel"
import SelectWithLabel from "../../components/SelectWithLabel"
import Title from "../../components/Title"
import { useFirestore } from "../../hooks/firestore"
import { useTheme } from "../../hooks/theme"
import { Button, Container, Fields, Form } from "./style"
import type { UserForm } from "../../utils/interfaces"
import Loading from "../../components/Loading"

const Profile: React.FC = () => {

    const { theme, handleChangeTheme } = useTheme()
    const { user, loading, editUser } = useFirestore()

    const [formState, setFormState] = useState<UserForm>({
        uid: user?.uid,
        name: user?.name,
        email: '',
        password: '',
    })

    const handleChangeForm = (
        event: React.ChangeEvent<HTMLInputElement>,
        key: keyof UserForm
    ) => {
        const { value } = event.target as HTMLInputElement
        setFormState((prev) => {
            const updatedState = { ...prev, [key]: value }
            return updatedState
        })
    }

    const themeOptions = [
        { value: 'green', label: 'Verde' },
        { value: 'blue', label: 'Azul' },
        { value: 'neutral', label: 'Neutro' }
    ];

    return (
        <Container>
            <Title>Perfil</Title>

            <Form onSubmit={(event) => editUser(event, formState.uid, formState.name)}>
                <Fields>
                    <InputWithLabel
                        label="Nome"
                        width="30%"
                        value={formState.name}
                        onChange={(e) => handleChangeForm(e, 'name')}
                    />

                    <SelectWithLabel
                        label="Tema"
                        width="30%"
                        value={theme.title}
                        onChange={handleChangeTheme}
                        options={themeOptions}
                    />
                </Fields>

                {!loading
                    ? <Button>Salvar</Button>
                    : <Loading
                        marginTop="0"
                        position="absolute"
                        bottom="1.5rem"
                        right="1.5rem"
                      />
                }
            </Form>
        </Container>
    )
}

export default Profile