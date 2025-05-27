import { Container } from "./style"

interface ITitleProps {
    afterWidth?: string,
    children: React.ReactNode
}

const Title: React.FC<ITitleProps> = ({ children, afterWidth }) => (
    <Container afterWidth={afterWidth}>
        { children }
    </Container>
)

export default Title