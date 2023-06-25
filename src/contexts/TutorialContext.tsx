import { createContext, useState } from "react";

// @ts-ignore
const TutorialContext = createContext();

export default TutorialContext;

export function TutorialProvider({ children }: any) {
	const [tutorialMessage, setTutorialMessage] = useState("");

	return (
		<TutorialContext.Provider
			value={{ tutorialMessage, setTutorialMessage }}
		>
			{children}
		</TutorialContext.Provider>
	);
}
