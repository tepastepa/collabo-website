import ProductPage from "../../components/ProductPage";
import { paritex } from "../../content";

export const metadata = { title: `${paritex.name} — ${paritex.title}` };

export default function Paritex() {
  return <ProductPage product={paritex} />;
}
