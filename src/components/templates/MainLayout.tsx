import Navbar from "@/components/organisms/Navbar";
import Footer from "../organisms/Footer";

export default function MainLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}