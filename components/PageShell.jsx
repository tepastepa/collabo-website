import Header from "./Header";
import Footer from "./Footer";

// Общая обёртка для всех внутренних страниц: шапка + контент + подвал.
export default function PageShell({ children }) {
  return (
    <div id="top">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
