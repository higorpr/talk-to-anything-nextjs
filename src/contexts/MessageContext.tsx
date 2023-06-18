import { createContext } from "react";
import useLocalStorage from "@/hooks/UseLocalStorage";

// @ts-ignore
const MessageContext = createContext();

export default MessageContext;

export function MessageProvider({ children }: any) {
	const [messageData, setMessageData] = useLocalStorage("messageData", []);

	return (
		<MessageContext.Provider value={{ messageData, setMessageData }}>
			{children}
		</MessageContext.Provider>
	);
}
