import ChatContainer from "@/components/ChatContainer";
import UserInput from "@/components/UserInput";
import { useEffect, useState } from "react";

export default function ChatPage() {
	const [updateChatMessage, setUpdateChatMessage] = useState(false);
	const [messageToSend, setMessageToSend] = useState("");
	const [loading, setLoading] = useState(false);
	const [updateChat, setUpdateChat] = useState(false);

	return (
		<main
			id="mainPage"
			className="flex flex-col justify-center items-center h-screen w-full bg-slate-900"
		>
			<header
				id="header"
				className="flex flex-col justify-center items-center text-white bg-sky-950 w-full h-10 py-3 fixed top-0 left-0 z-10 "
			>
				{" "}
				<h1 id="titleText" className="text-3xl">
					Talk to Anything
				</h1>{" "}
			</header>

			<ChatContainer
				updateChatMessage={updateChatMessage}
				setUpdateChatMessage={setUpdateChatMessage}
				setLoading={setLoading}
				messageToSend={messageToSend}
				setMessageToSend={setMessageToSend}
				updateChat={updateChat}
				setUpdateChat={setUpdateChat}
			/>

			<UserInput
				setUpdateChatMessage={setUpdateChatMessage}
				loading={loading}
				setLoading={setLoading}
				setMessageToSend={setMessageToSend}
				updateChat={updateChat}
				setUpdateChat={setUpdateChat}
			/>
		</main>
	);
}
