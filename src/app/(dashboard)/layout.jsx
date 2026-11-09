import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <main className="global-wrapper" style={{ flex: 1 }}>
        {/* <div className="container">{children}</div> */}
      </main>
      <Footer />
    </div>
  );
}
