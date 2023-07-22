import { Toaster } from "sonner";
import "../globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Toaster position="bottom-center"/>
      <Component {...pageProps} />
    </main>
  );
}
