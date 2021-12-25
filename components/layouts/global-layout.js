import Footer from "./footer";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function GlobalLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Topbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}