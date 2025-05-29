import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../components/Layout"
import Profile from "../pages/Profile"
import ReportLocation from "../pages/ReportLocation"
import ListReports from "../pages/ListReports"

const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/report-location" element={<ReportLocation />} />
                <Route path="/list-reports" element={<ListReports />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Layout>
    )
}

export default AppRoutes