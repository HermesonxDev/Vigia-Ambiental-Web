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
                                label="Email"
                                onChange={() => {}}
                            />

                            <InputWithLabel
                                label="Senha"
                                onChange={() => {}}
                            />

                            <InputWithLabel
                                label="Confirmar Senha"
                                onChange={() => {}}
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