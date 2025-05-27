import InputWithLabel from "../../components/InputWithLabel"
import SelectWithLabel from "../../components/SelectWithLabel"
import Title from "../../components/Title"
import { useTheme } from "../../hooks/theme"
import { Button, Container, Fields, Form } from "./style"

const Profile: React.FC = () => {

    const { theme } = useTheme()

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
                        onChange={() => {}}
                        // labelBackground="tertiary"
                    />

                    <InputWithLabel
                        label="Email"
                        width="30%"
                        onChange={() => {}}
                        // labelBackground="tertiary"
                    />

                    <InputWithLabel
                        label="Senha"
                        width="30%"
                        onChange={() => {}}
                        // labelBackground="tertiary"
                    />

                    <SelectWithLabel
                        label="Tema"
                        width="30%"
                        value={theme.title}
                        onChange={() => {}}
                        options={themeOptions}
                        // labelBackground="tertiary"
                    />
                </Fields>

                <Button>Salvar</Button>
            </Form>
        </Container>
    )
}

export default Profile