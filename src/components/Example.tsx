import MessageContext from "@/contexts/MessageContext";
import { ExampleProps } from "@/models/propsInterfaces";
import { useContext } from "react";

export default function Example({
	setUpdateChatMessage,
	setLoading,
	setMessageToSend,
	updateChat,
	setUpdateChat,
	tutorial,
}: ExampleProps) {
	const { messageData, setMessageData }: any = useContext(MessageContext);

	function displayUserMessage(event: React.MouseEvent) {
		event.preventDefault();
		const tempMessageData = [...messageData];
		const userEntry = {
			from: "You",
			to: "TalkToAnything",
			text: tutorial.text,
		};
		tempMessageData.push(userEntry);
		setMessageData(tempMessageData);
		setUpdateChat(!updateChat);
		setUpdateChatMessage(true);
		setMessageToSend(tutorial.text);
		setLoading(true);
	}

	return (
		<div
			onClick={displayUserMessage}
			id="example"
			className=" bg-violet-500 mb-3 rounded-md flex w-1/2 cursor-pointer text-center text-white p-2"
		>
			{tutorial.text}
		</div>
	);
}
