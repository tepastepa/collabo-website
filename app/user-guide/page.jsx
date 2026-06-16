import DocPage from "../../components/DocPage";
import { userGuide } from "../../docs/userGuide";

export const metadata = { title: "Руководство пользователя Gradely" };

export default function UserGuide() {
  return <DocPage doc={userGuide} />;
}
