import Message from "@/components/Message";
import UserInput from "@/components/UserInput";
import useGetChat from "@/hooks/api/useGetChat";
import { useEffect, useState } from "react";

export default function ChatPage() {
	const [messages, setMessages] = useState([]);
	const [updatePage, setUpdatePage] = useState(false);
	const { getChat } = useGetChat();
	console.log(messages);

	async function retrieveChat(user: string) {
		try {
			const chat = await getChat(user);
			console.log(chat);
			setMessages(chat);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		const user = "You";
		retrieveChat(user);
		//eslint-disable-next-line
	}, [updatePage]);

	return (
		<main
			id="mainPage"
			className="flex flex-col justify-center items-center h-full w-full bg-black"
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
				{messages.map((m) => (
					<Message key={m.id} from={m.from} text={m.text} />
				))}
			</div>
			<UserInput updatePage={updatePage} setUpdatePage={setUpdatePage} />
		</main>
	);
}
