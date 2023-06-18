import api from "./api";

async function sendUserMessage(message: string) {
	const body = { message };
	const response = await api.post("/chat", body);
	return response.data;
}

export const chatApi = { sendUserMessage };
