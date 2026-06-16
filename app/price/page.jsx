import DocPage from "../../components/DocPage";
import { price } from "../../content";

export const metadata = {
  title: "Порядок определения стоимости использования Gradely",
};

export default function Price() {
  return <DocPage doc={price} />;
}
