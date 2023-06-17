import { chatApi } from "../../services/chatApi";
import UseAsync from "../UseAsync";

export default function useSendUserMessage() {
	const {
		data: sendUserMessagedata,
		loading: sendUserMessageloading,
		error: sendUserMessageError,
		act: sendUserMessage,
	} = UseAsync(
		(user: string, message: string) =>
			chatApi.sendUserMessage(user, message),
		false
	);

	return {
		sendUserMessagedata,
		sendUserMessageloading,
		sendUserMessageError,
		sendUserMessage,
	};
}
