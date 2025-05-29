import { useEffect, useState } from "react"
import Title from "../../components/Title"
import { useFirestore } from "../../hooks/firestore"
import type { IReportProps } from "../../utils/interfaces"
import { Button, Container, GridBodyItem, GridBodyRow, GridContainer, GridHeaderItem, GridHeaderRow } from "./style"
import Loading from "../../components/Loading"

const ListReports: React.FC = () => {

    const { user, loading, getReportsByUserId } = useFirestore()
    const [reports, setReports] = useState<IReportProps[] | null>(null)

    useEffect(() => {
        const loadingReports = async () => {
            const reports = await getReportsByUserId(user?.uid)
            setReports(reports)
        }

        loadingReports()
    }, [user?.uid])
    
    return (
        <Container>
            <Title afterWidth="200px">Acompanhar Denuncias</Title>

            {!loading
                ? <GridContainer>
                        <GridHeaderRow gridCols="1fr 3fr 1fr 1fr" background="primary">
                            <GridHeaderItem padding="0.5rem">N. Denuncia</GridHeaderItem>
                            <GridHeaderItem padding="0.5rem">Endereço</GridHeaderItem>
                            <GridHeaderItem padding="0.5rem">Status</GridHeaderItem>
                            <GridHeaderItem padding="0.5rem">Ações</GridHeaderItem>
                        </GridHeaderRow>

                        {reports?.filter(report => !report.deleted_at).map((report, index) => (
                            <GridBodyRow key={report.id} gridCols="1fr 3fr 1fr 1fr" background="secondary">
                                <GridBodyItem padding="0.5rem">
                                    {(index + 1).toString().padStart(3, '0')}
                                </GridBodyItem>
                                <GridBodyItem padding="0.5rem">
                                    {report.street + ', ' + report.number + ' - ' + report.neighborhood}
                                </GridBodyItem>
                                <GridBodyItem padding="0.5rem">
                                    {report.status}
                                </GridBodyItem>
                                <GridBodyItem padding="0.5rem">
                                    <Button onClick={() => {}}>Excluir</Button>
                                </GridBodyItem>
                            </GridBodyRow>
                        ))}
                    </GridContainer>
                : <Loading marginTop="0"/>
            }
        </Container>
    )
}

export default ListReports