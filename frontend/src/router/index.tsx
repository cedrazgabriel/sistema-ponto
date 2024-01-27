import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "@/components/pages/Login/Login";
import { Register } from "@/components/pages/Register/Register";
import { Dashboard } from "@/components/pages/Dashboard/Dashboard";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AuthGuard isPrivate={false} />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<AuthGuard isPrivate={true} />}>
                    <Route path="/" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}