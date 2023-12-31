import { useEffect, useState } from "react";
import Example from "./Example";
import { ChatContainerProps, FirstStepsProps } from "@/models/propsInterfaces";

export default function ExamplesContainer({
	setUpdateChatMessage,
	setLoading,
	setMessageToSend,
	updateChat,
	setUpdateChat,
}: FirstStepsProps) {
	const [tutorialMessages, setTutorialMessages]: any = useState([]);

	useEffect(() => {
		const tutorials = [
			{
				text: "Which items on the menu contain shrimp in its recipe?",
			},
			{ text: "Where can I eat something in this museum?" },
			{
				text: "I need to buy a new phone, where is the closest store in this mall?",
			},
		];
		setTutorialMessages(tutorials);
	}, []);

	return (
		<div
			id="examplesContainer"
			className="flex mt-4 flex-col justify-center items-center"
		>
			{tutorialMessages.map((tutorial: any, idx: number) => (
				<Example
					key={idx}
					tutorial={tutorial}
					setUpdateChatMessage={setUpdateChatMessage}
					setLoading={setLoading}
					setMessageToSend={setMessageToSend}
					updateChat={updateChat}
					setUpdateChat={setUpdateChat}
				/>
			))}
		</div>
	);
}
