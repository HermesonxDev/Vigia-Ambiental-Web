import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../components/Layout"

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Layout>
    )
}

export default AppRoutes