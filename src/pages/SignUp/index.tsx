import { Button, Container, Content, Fields, Form } from "./styles"
import InputWithLabel from "../../components/InputWithLabel"
import type { AuthForm } from "../../utils/interfaces"
import { useState } from "react"
import { useFirestore } from "../../hooks/firestore"

const SignUp: React.FC = () => {

    const { signUp } = useFirestore()
    
    const [formState, setFormState] = useState<AuthForm>({
        name: '',
        email: '',
        password: ''
    })

    const handleChangeForm = (
        event: React.ChangeEvent<HTMLInputElement>,
        key: keyof AuthForm
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
                <Form onSubmit={(e) => signUp(e, formState)}>
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
                                type="password"
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