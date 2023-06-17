export interface MessageInputs {
	text: string;
	from: string;
}

export interface UserInputProps {
	updatePage: boolean;
	setUpdatePage: React.Dispatch<React.SetStateAction<boolean>>;
}
