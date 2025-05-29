import { Container, LoadingIcon } from "./styles"

interface IContainerProps {
    marginTop?: string,
    width?: string,
    height?: string,
    position?: string,
    bottom?: string,
    right?: string
}

const Loading: React.FC<IContainerProps> = ({
    marginTop,
    width,
    height,
    position,
    bottom,
    right
}) => (
    <Container
        marginTop={marginTop}
        position={position}
        bottom={bottom}
        right={right}
    >
        <LoadingIcon width={width} height={height}/>
    </Container>
)

export default Loading
