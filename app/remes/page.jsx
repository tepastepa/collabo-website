import ProductPage from "../../components/ProductPage";
import { remes } from "../../content";

export const metadata = { title: `${remes.name} — ${remes.title}` };

export default function Remes() {
  return <ProductPage product={remes} />;
}
