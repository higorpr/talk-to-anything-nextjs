import type { AppProps } from "next/app";
import "../app/globals.css";
import RootLayout from "@/app/layout";
import { MessageProvider } from "@/contexts/MessageContext";
import { TutorialProvider } from "@/contexts/TutorialContext";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
	const [showChild, setShowChild] = useState(false);
	useEffect(() => {
		setShowChild(true);
	}, []);
	if (!showChild) {
		return null;
	}
	if (typeof window === "undefined") {
		return <></>;
	} else {
		return (
			<MessageProvider>
				<TutorialProvider>
					<RootLayout>
						<Component {...pageProps} />
					</RootLayout>
				</TutorialProvider>
			</MessageProvider>
		);
	}
}
