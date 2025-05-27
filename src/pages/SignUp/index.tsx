import { Button, Container, Content, Fields, Form } from "./styles"
import InputWithLabel from "../../components/InputWithLabel"
import type { SignUpForm } from "../../utils/interfaces"
import { useState } from "react"
import { useBack4App } from "../../hooks/back4app"

const SignUp: React.FC = () => {

    const { register } = useBack4App()
    
    const [formState, setFormState] = useState<SignUpForm>({
        name: '',
        email: '',
        password: ''
    })

    const handleChangeForm = (
        event: React.ChangeEvent<HTMLInputElement>,
        key: keyof SignUpForm
    ) => {
        const { value } = event.target as HTMLInputElement
        setFormState((prev) => {
            const updatedState = { ...prev, [key]: value }
            return updatedState
        })
    }


    return (
        <Container>
            <Content>
                <Form onSubmit={(e) => register(e, formState)}>
                    <h1>Registro</h1>

                    <div>
                        <Fields>
                            <InputWithLabel
                                label="Nome"
                                value={formState.name}
                                onChange={(e) => handleChangeForm(e, 'name')}
                                required
                            />

                            <InputWithLabel
                                label="Email"
                                value={formState.email}
                                onChange={(e) => handleChangeForm(e, 'email')}
                                required
                            />

                            <InputWithLabel
                                label="Senha"
                                value={formState.password}
                                onChange={(e) => handleChangeForm(e, 'password')}
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