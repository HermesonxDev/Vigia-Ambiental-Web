import { Aside, Container, Content, Icon, Link, MainHeader } from "./style"
import Profile from "../../assets/img/FaUserCircle.png"
import Camera from "../../assets/img/MdAddAPhoto.png"
import List from "../../assets/img/FaListCheck.png"
import Power from "../../assets/img/FaPowerOff.png"

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Container>
            <MainHeader />
            <Aside>
                <h1>Vigia Ambiental</h1>

                <div>
                    <Link href="">
                        <Icon src={Profile} />
                        Perfil
                    </Link>

                    <Link href="">
                        <Icon src={Camera} />
                        Denunciar Local
                    </Link>

                    <Link href="">
                        <Icon src={List} />
                        Acomp. Denuncias
                    </Link>

                    <Link href="">
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