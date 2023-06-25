export interface MessageInputs {
	text: string;
	from: string;
}

export interface UserInputProps {
	setUpdateChatMessage: React.Dispatch<React.SetStateAction<boolean>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setMessageToSend: React.Dispatch<React.SetStateAction<string>>;
	updateChat: boolean;
	setUpdateChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChatContainerProps {
	updateChatMessage: boolean;
	setUpdateChatMessage: React.Dispatch<React.SetStateAction<boolean>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	messageToSend: string;
	setMessageToSend: React.Dispatch<React.SetStateAction<string>>;
	updateChat: boolean;
	setUpdateChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FirstStepsProps {
	setUpdateChatMessage: React.Dispatch<React.SetStateAction<boolean>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setMessageToSend: React.Dispatch<React.SetStateAction<string>>;
	updateChat: boolean;
	setUpdateChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ExampleProps extends FirstStepsProps {
	tutorial: { text: string };
}
