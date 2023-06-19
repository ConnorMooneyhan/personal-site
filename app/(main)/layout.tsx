import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./global.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
