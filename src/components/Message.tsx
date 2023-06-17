import { MessageInputs } from "@/models/propsInterfaces";

export default function Message({ text, from }: MessageInputs) {
	let backgroundColor = "violet-500";
	let justifyContent = "start";
	let fontColor = "white";
	let customMargin = "mt-0 ml-1.5 mb-0 mr-0";

	if (from === "TalkToAnything") {
		backgroundColor = "blue-50";
		justifyContent = "end";
		fontColor = "black";
		customMargin = "mt-0 ml-0 mb-0 mr-1.5";
	}
	if (from === "TalkToAnything") {
		return (
			<div className="flex justify-end w-full mb-5">
				<div className="max-w-[80%] break-words border border-transparent rounded bg-blue-100 p-1">
					<p className="text-gray-900 text-sm">{text}</p>
				</div>
				<div className="flex justify-center items-center h-4 w-4 rounded-full text-black bg-violet-50 text-xs mt-0 ml-0 mb-0 mr-1.5">
					T
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex justify-start w-full mb-5">
				<div className="flex justify-center items-center h-4 w-4 rounded-full text-black bg-violet-50 text-xs mt-0 ml-1.5 mb-0 mr-0">
					Y
				</div>
				<div className="max-w-[80%] break-words border border-transparent rounded bg-violet-500 p-1">
					<p className="text-gray-900 text-sm">{text}</p>
				</div>
			</div>
		);
	}
}
