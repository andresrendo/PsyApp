import { Outlet } from "react-router-dom";
import TopNav from "../navbar/TopNav";

export function Layout() {
    return (
        <main>
            <TopNav />

            <section className="body">
                <Outlet />
            </section>
        </main>
    );
}