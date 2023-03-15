import { Outlet } from "react-router-dom";
import TopNav from "../navbar/TopNav";
import Footer from "../Footer/Footer";
import { UserContextProvider } from "../../context/UserContext";

export function Layout() {
    return (
        <UserContextProvider>
            <main>
                <TopNav />

                <section className="body">
                    <Outlet />
                </section>

                <Footer />
            </main>
        </UserContextProvider>
    );
}