import { Button, Container, Content, Fields, Form } from "./styles"
import InputWithLabel from "../../components/InputWithLabel"
import type { UserForm } from "../../utils/interfaces"
import { useState } from "react"
import { useFirestore } from "../../hooks/firestore"
import Loading from "../../components/Loading"

const SignIn: React.FC = () => {

    const { loading, signIn } = useFirestore()
    
    const [formState, setFormState] = useState<UserForm>({
        email: '',
        password: ''
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

    return (
        <Container>
            <Content>
                <Form onSubmit={(e) => signIn(e, formState)}>
                    <h1>Login</h1>

                    <div>
                        <Fields>
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
                            Não tem acesso ainda?
                            <a href="/sign-up">Registrar.</a>
                        </p>
                    </div>

                    {!loading
                        ? <Button>Entrar</Button>
                        : <Loading marginTop="0"/>
                    }
                </Form>
            </Content>
        </Container>
    )
}

export default SignIn