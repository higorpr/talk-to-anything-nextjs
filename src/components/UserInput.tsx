import MessageContext from "@/contexts/MessageContext";
import TutorialContext from "@/contexts/TutorialContext";
import useSendUserMessage from "@/hooks/api/useSendUserMessage";
import { UserInputProps } from "@/models/propsInterfaces";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { TbSend } from "react-icons/tb";
import { TailSpin } from "react-loader-spinner";

export default function UserInput({
	updateChatMessage,
	setUpdateChatMessage,
	loading,
	setLoading,
	setMessageToSend,
	updateChat,
	setUpdateChat,
}: UserInputProps) {
	const [userMessage, setUserMessage] = useState("");
	const { messageData, setMessageData }: any = useContext(MessageContext);

	useEffect(() => {}, []);

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.preventDefault();
		setUserMessage(event.target.value);
	}

	async function displayUserMessage(event: React.MouseEvent | null = null) {
		console.log(updateChatMessage);
		if (event) {
			event.preventDefault();
		}

		if (userMessage.trim() !== "") {
			// App shows user message after pressing send icon
			const tempMessageData = [...messageData];
			const user = "You";
			const chat = "TalkToAnything";
			const userEntry = { from: user, to: chat, text: userMessage };
			tempMessageData.push(userEntry);
			setMessageData(tempMessageData);

			// App stores the user message and flags to chat that it should be sent
			setUpdateChat(!updateChat);
			setUpdateChatMessage(true);
			setMessageToSend(userMessage);

			// App disables user input
			setLoading(true);

			// App erases user input
			setUserMessage("");
		} else {
			setUserMessage("");
		}
	}

	function checkKey(event: React.KeyboardEvent<HTMLElement>) {
		if (event.key === "Enter" && userMessage.trim() !== "") {
			displayUserMessage();
		}
	}

	return (
		<div
			id="InputContainer"
			className="flex justify-center items-center min-h-min w-full fixed bottom-0 left-0 z-20 bg-slate-900"
		>
			<div
				id="ChatArea"
				className="flex min-h-min items-center relative w-full p-3 box-border"
			>
				<textarea
					id="UserInputArea"
					className="flex w-full bg-blue-50 resize-none min-h-full text-base text-black box-border rounded-lg outline-none pt-1 pr-9 pb-1 pl-2 disabled:bg-gray-400"
					autoComplete="on"
					value={userMessage}
					onChange={handleChange}
					wrap="hard"
					onKeyUp={checkKey}
					disabled={loading}
				/>
				<div
					id="IconHolder"
					className="flex justify-center items-center absolute right-4"
				>
					{loading ? (
						<TailSpin height="25" width="25" color="#000000" />
					) : (
						<IconContext.Provider
							value={{ size: "25px", color: "#000000" }}
						>
							<TbSend
								onClick={displayUserMessage}
								className="cursor-pointer"
							/>
						</IconContext.Provider>
					)}
				</div>
			</div>
		</div>
	);
}
