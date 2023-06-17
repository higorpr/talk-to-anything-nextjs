import { chatApi } from "../../services/chatApi";
import UseAsync from "../UseAsync";

export default function useGetChat() {
	const {
		data: getChatData,
		loading: getChatLoading,
		error: getChatError,
		act: getChat,
	} = UseAsync((user: string) => chatApi.getChat(user), false);

	return {
		getChatData,
		getChatLoading,
		getChatError,
		getChat,
	};
}
