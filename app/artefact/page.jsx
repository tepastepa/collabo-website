import ProductPage from "../../components/ProductPage";
import { artefact } from "../../content";

export const metadata = { title: `${artefact.name} — ${artefact.title}` };

export default function Artefact() {
  return <ProductPage product={artefact} />;
}
