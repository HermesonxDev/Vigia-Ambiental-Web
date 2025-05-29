import InputWithLabel from "../../components/InputWithLabel"
import TextareaWithLabel from "../../components/TextareaWithLabel"
import Title from "../../components/Title"
import { Button, Container, Fields, Form } from "./style"
import { useState } from "react"
import type { ReportForm } from "../../utils/interfaces"
import { useFirestore } from "../../hooks/firestore"
import { useNavigate } from "react-router-dom"
import Loading from "../../components/Loading"

const ReportLocation: React.FC = () => {

    const { user, loading, addReport } = useFirestore()
    const navigate = useNavigate()

    const [formState, setFormState] = useState<ReportForm>({
        reportingUserId: user?.uid,
        street: '',
        number: '',
        neighborhood: '',
        referencePoint: '',
        description: ''
    })

    const [preview, setPreview] = useState<string | null>(null);

    const handleChangeForm = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        key: keyof ReportForm
    ) => {
        const { value } = event.target as HTMLInputElement
        setFormState((prev) => {
            const updatedState = { ...prev, [key]: value }
            return updatedState
        })
    }

     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    }

    return (
        <Container>
            <Title afterWidth="100px">Denunciar Local</Title>

            <Form onSubmit={(e) => addReport(e, formState, navigate)}>
                <Fields>
                    <InputWithLabel
                        label="Rua"
                        width="30%"
                        value={formState.street}
                        onChange={(e) => handleChangeForm(e, 'street')}
                        required
                    />

                    <InputWithLabel
                        label="Número"
                        width="30%"
                        value={formState.number}
                        onChange={(e) => handleChangeForm(e, 'number')}
                        required
                    />

                    <InputWithLabel
                        label="Bairro"
                        width="30%"
                        value={formState.neighborhood}
                        onChange={(e) => handleChangeForm(e, 'neighborhood')}
                        required
                    />

                    <InputWithLabel
                        label="Ponto de Referência"
                        width="30%"
                        value={formState.referencePoint}
                        onChange={(e) => handleChangeForm(e, 'referencePoint')}
                        required
                    />

                    <TextareaWithLabel
                        label="Descreva o Problema"
                        width="30%"
                        value={formState.description}
                        onChange={(e) => handleChangeForm(e, 'description')}
                        required
                    />

                    <div>
                        <input type="file" onChange={handleImageChange} accept="image/*" />
                        {preview && <img src={preview} alt="Preview" width={200} />}
                    </div>
                </Fields>

                {!loading
                    ? <Button>Salvar</Button>
                    : <Loading
                        marginTop="0"
                        position="absolute"
                        bottom="1.5rem"
                        right="1.5rem"
                        />
                }
            </Form>
        </Container>
    )
}

export default ReportLocation