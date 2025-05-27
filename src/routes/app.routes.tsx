import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../components/Layout"
import Profile from "../pages/Profile"

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Layout>
    )
}

export default AppRoutes