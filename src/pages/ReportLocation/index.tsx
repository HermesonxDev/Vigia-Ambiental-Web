import InputWithLabel from "../../components/InputWithLabel"
import TextareaWithLabel from "../../components/TextareaWithLabel"
import Title from "../../components/Title"
import { Button, Container, Fields, Form } from "./style"

const ReportLocation: React.FC = () => {
    return (
        <Container>
            <Title afterWidth="100px">Denunciar Local</Title>

            <Form>
                <Fields>
                    <InputWithLabel
                        label="Rua"
                        width="30%"
                        onChange={() => {}}
                    />

                    <InputWithLabel
                        label="Número"
                        width="30%"
                        onChange={() => {}}
                    />

                    <InputWithLabel
                        label="Bairro"
                        width="30%"
                        onChange={() => {}}
                    />

                    <InputWithLabel
                        label="Ponto de Referência"
                        width="30%"
                        onChange={() => {}}
                    />

                    <TextareaWithLabel
                        label="Descreva o Problema"
                        width="30%"
                        onChange={() => {}}
                    />
                </Fields>

                <Button>Salvar</Button>
            </Form>
        </Container>
    )
}

export default ReportLocation