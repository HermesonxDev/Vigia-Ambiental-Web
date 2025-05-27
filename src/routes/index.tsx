import { BrowserRouter } from "react-router-dom"
import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"
import { useBack4App } from "../hooks/back4app"

const Routes: React.FC = () => {

    const { logged } = useBack4App()

    return (
        <BrowserRouter>
            {logged ? <AppRoutes /> : <AuthRoutes /> }
        </BrowserRouter>
    )
}

export default Routes