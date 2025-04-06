import { AvatarImage } from "@react-beauty/ui-avatar";
import { useClipboard } from "@react-beauty/use-clipboard";

export default function App() {
  const { copy, copied } = useClipboard();

  // NOTE: just as an example, to prove the linking across packages works
  console.log(copy);
  console.log(copied);
  return (
    <>
      <AvatarImage src="" />
      <h1>Hello, world!</h1>
    </>
  );
}
