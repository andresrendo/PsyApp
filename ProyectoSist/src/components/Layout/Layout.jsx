import { Outlet } from "react-router-dom";
import TopNav from "../navbar/TopNav";
import Footer from "../Footer/Footer";
import { UserContextProvider } from "../../context/UserContext";
import { ChatBtn } from "../ChatBtn/ChatBtn";
import { useUser } from "../../context/UserContext";


export function Layout() {
    const user = useUser();

    return (
        <UserContextProvider>
            <main>
                <TopNav />

                <section className="body">
                    <Outlet />
                </section>

                <ChatBtn />
                
                <Footer />
            </main>
        </UserContextProvider>
    );
}