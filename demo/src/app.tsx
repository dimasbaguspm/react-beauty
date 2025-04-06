import { useClipboard } from "@beauty-react/use-clipboard";

export default function App() {
  const { copy, copied } = useClipboard();

  // NOTE: just as an example, to prove the linking across packages works
  console.log(copy);
  console.log(copied);
  return <h1>Hello, world!</h1>;
}
