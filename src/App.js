import {
  HomePage,
  ContactPage,
  Error404Page,
  CheckoutPage,
  ReviewsPage,
  LoginPage,
  CrearPage,
  RankingPage,
  TypeUsePage,
  SupportPage,
  AboutPage,
  GuidesPage,
  QuestionsPage,
  VendedoresPage,
  PerfilPage,
  TicketPage,
  InfluencerPage,
  PagoPage,
  ProductInfoPage,
  PaymentPage,
} from "./components/pages";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuildPcPage from "./components/pages/BuildPcPage";
import PcPage from "./components/pages/PcPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Error404Page />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="crear" element={<CrearPage />} />
          <Route path="ranking" element={<RankingPage />} />
          <Route path="typeuse" element={<TypeUsePage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="questions" element={<QuestionsPage />} />
          <Route path="vendedores" element={<VendedoresPage />} />
          <Route path="perfil" element={<PerfilPage />} />
          <Route path="Ticket" element={<TicketPage />} />
          <Route path="build" element={<BuildPcPage />} />
          <Route path="product/:id" element={<ProductInfoPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="Influencer" element={<InfluencerPage />} />
          <Route path="pc/:id" element={<PcPage />} />

          <Route path="Pago" element={<PagoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
