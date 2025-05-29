import { Aside, Container, Content, Icon, Link, MainHeader } from "./style"
import Profile from "../../assets/img/FaUserCircle.png"
import Camera from "../../assets/img/MdAddAPhoto.png"
import List from "../../assets/img/FaListCheck.png"
import Power from "../../assets/img/FaPowerOff.png"
import { useFirestore } from "../../hooks/firestore"

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const { signOut } = useFirestore()

    return (
        <Container>
            <MainHeader />
            <Aside>
                <h1>Vigia Ambiental</h1>

                <div>
                    <Link href="/profile">
                        <Icon src={Profile} />
                        Perfil
                    </Link>

                    <Link href="/report-location">
                        <Icon src={Camera} />
                        Denunciar Local
                    </Link>

                    <Link href="">
                        <Icon src={List} />
                        Acomp. Denuncias
                    </Link>

                    <Link onClick={signOut}>
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