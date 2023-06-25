import TutorialContext from "@/contexts/TutorialContext";
import { useContext } from "react";

export default function Example({ tutorial }: any) {
	//@ts-ignore
	const { setTutorialMessage } = useContext(TutorialContext);

	function recordTutorialMessage() {
		setTutorialMessage(tutorial.text);
	}

	return (
		<div
			onClick={recordTutorialMessage}
			id="example"
			className=" bg-violet-500 mb-3 rounded-md flex w-1/2 cursor-pointer text-center text-white p-2"
		>
			{tutorial.text}
		</div>
	);
}
