import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div>
        <main className="mx-auto bg-cyan-50 h-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
