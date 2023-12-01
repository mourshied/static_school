// src/pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import "../assets/style/index.scss"; // caustom css
import RootLayout from "../components/layouts/landing"
import theme from "@/assets/style/theme";



function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RootLayout>
  );
}

export default App;
