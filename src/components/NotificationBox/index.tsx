import { useLog } from "../../hooks/log";
import type { NotificationContent } from "../../utils/interfaces";
import { Container, NotificationHeader, WarningIcon, EmailIcon, UpdateIcon, SuccessIcon, CloseIcon, Content } from "./styles";

interface INotificationBoxProps {
    data: NotificationContent,
    type?: string
}

const NotificationBox: React.FC<INotificationBoxProps> = ({ data, type }) => {

    const { removeNotification } = useLog()
      
    return (
        <Container>
            <NotificationHeader>
                {type === 'warning' && <WarningIcon />}
                {type === 'email' && <EmailIcon />}
                {type === 'update' && <UpdateIcon />}
                {type === 'success' && <SuccessIcon />}
            </NotificationHeader>

            <Content>
                <CloseIcon onClick={removeNotification}/>
                <h4>{data.title}</h4>
                <p>{data.message}</p>
            </Content>
        </Container>
    )
}

export default NotificationBox