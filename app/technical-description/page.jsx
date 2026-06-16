import DocPage from "../../components/DocPage";
import { technical } from "../../docs/technical";

export const metadata = { title: "Техническое описание ПО Gradely" };

export default function TechnicalDescription() {
  return <DocPage doc={technical} />;
}
