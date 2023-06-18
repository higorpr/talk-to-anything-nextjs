import type { AppProps } from "next/app";
import "../app/globals.css";
import RootLayout from "@/app/layout";
import  { MessageProvider } from "@/contexts/MessageContext";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MessageProvider>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</MessageProvider>
	);
}
