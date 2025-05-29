import { BrowserRouter } from "react-router-dom"
import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"
import { useFirestore } from "../hooks/firestore"

const Routes: React.FC = () => {

    const { logged } = useFirestore()

    return (
        <BrowserRouter>
            {logged ? <AppRoutes /> : <AuthRoutes /> }
        </BrowserRouter>
    )
}

export default Routes