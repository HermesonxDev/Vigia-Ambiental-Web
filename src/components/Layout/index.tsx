import { Aside, Container, Content, Icon, Link, MainHeader } from "./style"
import Profile from "../../assets/img/FaUserCircle.png"
import Camera from "../../assets/img/MdAddAPhoto.png"
import List from "../../assets/img/FaListCheck.png"
import Power from "../../assets/img/FaPowerOff.png"
import Assess from "../../assets/img/MdAssessment .png"
import { useFirestore } from "../../hooks/firestore"
import { useNavigate } from "react-router-dom"

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const { user, signOut } = useFirestore()
    const navigate = useNavigate()

    return (
        <Container>
            <MainHeader>
                <div />
                <h3>{user?.name}</h3>
            </MainHeader>
            <Aside>
                <h1 onClick={() => navigate("/")}>Vigia Ambiental</h1>

                <div>
                    <Link href="/profile">
                        <Icon src={Profile} />
                        Perfil
                    </Link>

                    <Link href="/report-location">
                        <Icon src={Camera} />
                        Denunciar Local
                    </Link>

                    <Link href="/list-reports">
                        <Icon src={List} />
                        Acomp. Denuncias
                    </Link>

                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfkusVACkEUDL52nmRHqNYAfMkYKIQ5IdP5AsVpljYO7EEQuQ/viewform">
                        <Icon src={Assess} />
                        Deixe sua Avaliação
                    </Link>

                    <Link href="" onClick={signOut}>
                        <Icon src={Power} />
                        Sair
                    </Link>
                </div>

                <div />
                <div />
                <div />
                <div />
                <div />

                <p>Versão 1.0</p>
            </Aside>
            <Content>
                { children }
            </Content>
        </Container>
    )
}

export default Layout