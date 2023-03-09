import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import DeliverPage from "./pages/deliver";
import IndexPage from "./pages";
import { UserProvider } from "./context/UserContext";
import ManageItemPage from "./pages/manageItem";

export default function App() {
    return (
        <UserProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header />
                <Routes>
                    <Route index path="/" element={<IndexPage />} />
                    <Route path="/deliver" element={<DeliverPage />} />
                    <Route path="/manage" element={<ManageItemPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </UserProvider>
    );
}
