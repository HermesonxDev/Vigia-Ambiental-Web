import InputWithLabel from "../../components/InputWithLabel"
import TextareaWithLabel from "../../components/TextareaWithLabel"
import Title from "../../components/Title"
import { Button, Container, Fields, Form } from "./style"
import Profile from "../../assets/img/FaUserCircle.png"

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
                        required
                    />

                    <InputWithLabel
                        label="Número"
                        width="30%"
                        onChange={() => {}}
                        required
                    />

                    <InputWithLabel
                        label="Bairro"
                        width="30%"
                        onChange={() => {}}
                        required
                    />

                    <InputWithLabel
                        label="Ponto de Referência"
                        width="30%"
                        onChange={() => {}}
                        required
                    />

                    <TextareaWithLabel
                        label="Descreva o Problema"
                        width="30%"
                        onChange={() => {}}
                        required
                    />

                    <div>
                        <input type="file" name="" id="" />
                        <img src={Profile} alt="Foto do Local" width={100}/>
                    </div>
                </Fields>

                <Button>Denunciar</Button>
            </Form>
        </Container>
    )
}

export default ReportLocation