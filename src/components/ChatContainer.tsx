import { Fragment, useContext, useEffect } from "react";
import FirstSteps from "./FirstSteps";
import Message from "./Message";
import { ChatContainerProps, MessageInputs } from "@/models/propsInterfaces";
import MessageContext from "@/contexts/MessageContext";
import useSendUserMessage from "@/hooks/api/useSendUserMessage";

export default function ChatContainer({
	updateChatMessage,
	setUpdateChatMessage,
	setLoading,
	messageToSend,
	setMessageToSend,
	updateChat,
	setUpdateChat,
}: ChatContainerProps) {
	//@ts-ignore
	const { messageData, setMessageData } = useContext(MessageContext);
	const { sendUserMessage } = useSendUserMessage();

	useEffect(() => {
		if (updateChatMessage === true) {
			console.log(updateChatMessage);
			sendMessageToChat();
		}
		//eslint-disable-next-line
	}, [updateChat]);

	async function sendMessageToChat() {
		try {
			const tempMessageData = [...messageData];
			console.log(tempMessageData);
			const chatResponse = await sendUserMessage(messageToSend);
			const chatEntry = {
				from: "TalkToAnything",
				to: "You",
				text: chatResponse,
			};
			tempMessageData.push(chatEntry);
			setMessageData(tempMessageData);
			setMessageToSend("");
			setLoading(false);
			setUpdateChatMessage(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	}
	return (
		<div id="chatContainer" className="w-full h-full">
			{messageData.length === 0 ? (
				<FirstSteps
					setUpdateChatMessage={setUpdateChatMessage}
					setLoading={setLoading}
					setMessageToSend={setMessageToSend}
					updateChat={updateChat}
					setUpdateChat={setUpdateChat}
				/>
			) : (
				<div
					id="chatContainer"
					className="flex flex-col h-full w-full box-border pt-12 pb-16 pl-2 pr-2 overflow-scroll"
				>
					{messageData.map((m: MessageInputs, id: number) => (
						//@ts-ignore
						<Message key={id} from={m.from} text={m.text} />
					))}
				</div>
			)}
		</div>
	);
}
