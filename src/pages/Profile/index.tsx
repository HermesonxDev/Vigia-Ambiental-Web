import InputWithLabel from "../../components/InputWithLabel"
import SelectWithLabel from "../../components/SelectWithLabel"
import Title from "../../components/Title"
import { useFirestore } from "../../hooks/firestore"
import { useTheme } from "../../hooks/theme"
import { Button, Container, Fields, Form } from "./style"

const Profile: React.FC = () => {

    const { theme, handleChangeTheme } = useTheme()
    const { user } = useFirestore()

    const themeOptions = [
        { value: 'green', label: 'Verde' },
        { value: 'blue', label: 'Azul' },
        { value: 'neutral', label: 'Neutro' }
    ];

    return (
        <Container>
            <Title>Perfil</Title>

            <Form>
                <Fields>
                    <InputWithLabel
                        label="Nome"
                        width="30%"
                        value={user?.name}
                        onChange={() => {}}
                    />

                    <SelectWithLabel
                        label="Tema"
                        width="30%"
                        value={theme.title}
                        onChange={handleChangeTheme}
                        options={themeOptions}
                    />
                </Fields>

                <Button>Salvar</Button>
            </Form>
        </Container>
    )
}

export default Profile