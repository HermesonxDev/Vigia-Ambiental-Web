import { Button, Container, Content, Fields, Form } from "./styles"
import InputWithLabel from "../../components/InputWithLabel"

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <Form>
                    <h1>Login</h1>

                    <div>
                        <Fields>
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
                            Não tem acesso ainda?
                            <a href="/sign-up">Registrar.</a>
                        </p>
                    </div>

                    <Button>Entrar</Button>
                </Form>
            </Content>
        </Container>
    )
}

export default SignIn