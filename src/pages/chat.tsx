import Message from "@/components/Message";
import UserInput from "@/components/UserInput";
import MessageContext from "@/contexts/MessageContext";
import { useContext, useEffect, useState } from "react";

export default function ChatPage() {
	const [updatePage, setUpdatePage] = useState(false);
	const { messageData }: any = useContext(MessageContext);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setMessages(messageData);
		//eslint-disable-next-line
	}, [updatePage]);

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

			<div
				id="chatContainer"
				className="flex flex-col h-full w-full box-border pt-12 pb-16 pl-2 pr-2 overflow-scroll"
			>
				{messages.map((m, id) => (
					//@ts-ignore
					<Message key={id} from={m.from} text={m.text} />
				))}
			</div>
			<UserInput updatePage={updatePage} setUpdatePage={setUpdatePage} />
		</main>
	);
}
