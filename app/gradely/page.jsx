import ProductPage from "../../components/ProductPage";
import { gradely } from "../../content";

export const metadata = { title: `${gradely.name} — ${gradely.title}` };

export default function Gradely() {
  return <ProductPage product={gradely} />;
}
