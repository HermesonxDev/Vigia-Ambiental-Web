import { Button, Container, Content, Fields, Form } from "./styles"
import InputWithLabel from "../../components/InputWithLabel"

const SignUp: React.FC = () => {
    return (
        <Container>
            <Content>
                <Form>
                    <h1>Registro</h1>

                    <div>
                        <Fields>
                            <InputWithLabel
                                label="Nome"
                                onChange={() => {}}
                                required
                            />

                            <InputWithLabel
                                label="Email"
                                onChange={() => {}}
                                required
                            />

                            <InputWithLabel
                                label="Senha"
                                onChange={() => {}}
                                required
                            />
                        </Fields>

                        <p>
                            Já possui acesso?
                            <a href="/sign-in"> Logar.</a>
                        </p>
                    </div>

                    <Button>Entrar</Button>
                </Form>
            </Content>
        </Container>
    )
}

export default SignUp