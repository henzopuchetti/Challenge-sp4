import Diferencial from "./components/Diferencial/Diferencial";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Servicos from "./components/Servicos/Servicos";

export default function Home() {
  return (
    <>
    <Navbar />
    <Servicos />
    <QuemSomos />
    <Diferencial />
    <Footer />
    </>
  );
}
