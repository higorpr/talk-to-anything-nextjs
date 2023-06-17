import useSendUserMessage from "@/hooks/api/useSendUserMessage";
import { UserInputProps } from "@/models/propsInterfaces";
import React, { ChangeEvent, useState } from "react";
import { IconContext } from "react-icons";
import { TbSend } from "react-icons/tb";
import { TailSpin } from "react-loader-spinner";

export default function UserInput({
	updatePage,
	setUpdatePage,
}: UserInputProps) {
	const [userMessage, setUserMessage] = useState("");
	const { sendUserMessage } = useSendUserMessage();
	const [loading, setLoading] = useState(false);

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.preventDefault();
		setUserMessage(event.target.value);
	}

	async function sendMessage(event: React.MouseEvent | null = null) {
		if (event) {
			event.preventDefault();
		}

		if (userMessage.trim() !== "") {
			setLoading(true);
			try {
				const user = "You";
				await sendUserMessage(user, userMessage);
				setUserMessage("");
				setLoading(false);
				setUpdatePage(!updatePage);
			} catch (err) {
				console.log(err);
			}
		} else {
			setUserMessage("");
		}
	}

	function checkKey(event: React.KeyboardEvent<HTMLElement>) {
		if (event.key === "Enter") {
			console.log(event.key);
			// console.log("test");
			sendMessage();
		}
	}

	return (
		<div
			id="InputContainer"
			className="flex justify-center items-center min-h-min w-full fixed bottom-0 left-0 z-20 bg-slate-900"
		>
			<div id="ChatArea" className="flex min-h-min items-center relative">
				<textarea
					id="UserInputArea"
					className="flex w-full bg-blue-50 resize-none min-h-full text-base box-border rounded-lg outline-none pt-1 pr-9 pb-1 pl-2 disabled:bg-gray-400"
					autoComplete="on"
					value={userMessage}
					onChange={handleChange}
					wrap="hard"
					onKeyUp={checkKey}
					disabled={loading}
				/>
				<div
					id="IconHolder"
					className="flex justify-center items-center absolute right-1"
				>
					{loading ? (
						<TailSpin height="25" width="25" color="#000000" />
					) : (
						<IconContext.Provider value={{ size: "25px" }}>
							<TbSend
								onClick={sendMessage}
								className="cursor-pointer"
							/>
						</IconContext.Provider>
					)}
				</div>
			</div>
		</div>
	);
}
