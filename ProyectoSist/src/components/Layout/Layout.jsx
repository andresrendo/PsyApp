import { Outlet } from "react-router-dom";
import TopNav from "../navbar/TopNav";
import Footer from "../Footer/Footer";

export function Layout() {
    return (
        <main>
            <TopNav />

            <section className="body">
                <Outlet />
            </section>

            <Footer />
        </main>
    );
}