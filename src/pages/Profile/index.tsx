import InputWithLabel from "../../components/InputWithLabel"
import SelectWithLabel from "../../components/SelectWithLabel"
import Title from "../../components/Title"
import { useTheme } from "../../hooks/theme"
import { Button, Container, Form } from "./style"

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
                <div>
                    <InputWithLabel
                        label="Nome"
                        width="30%"
                        onChange={() => {}}
                    />

                    <InputWithLabel
                        label="Email"
                        width="30%"
                        onChange={() => {}}
                    />

                    <InputWithLabel
                        label="Senha"
                        width="30%"
                        onChange={() => {}}
                    />

                    <SelectWithLabel
                        label="Tema"
                        width="30%"
                        value={theme.title}
                        onChange={() => {}}
                        options={themeOptions}
                    />
                </div>

                <Button>Salvar</Button>
            </Form>
        </Container>
    )
}

export default Profile