import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const AuthRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AuthRoutes