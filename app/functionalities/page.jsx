import DocPage from "../../components/DocPage";
import { functionalities } from "../../docs/functionalities";

export const metadata = {
  title: "Описание функциональных характеристик ПО Gradely",
};

export default function Functionalities() {
  return <DocPage doc={functionalities} />;
}
