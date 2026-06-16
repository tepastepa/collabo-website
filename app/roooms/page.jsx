import ProductPage from "../../components/ProductPage";
import { roooms } from "../../content";

export const metadata = { title: `${roooms.name} — ${roooms.title}` };

export default function Roooms() {
  return <ProductPage product={roooms} />;
}
