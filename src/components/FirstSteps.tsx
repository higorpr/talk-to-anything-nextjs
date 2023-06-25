import ExamplesContainer from "./ExamplesContainer";

export default function FirstSteps() {
	return (
		<div
			id="firstSteps"
			className="flex flex-col w-full h-full justify-center items-center"
		>
			<h1
				id="title"
				className="flex text-xl text-white w-2/3 text-center mb-10 font-semibold justify-center"
			>
				Hello! Feel free to ask me something =)
			</h1>
			<h2
				id="subtitle"
				className=" text-white text-center w-full text-lg font-semibold"
			>
				Examples
			</h2>
			<ExamplesContainer />
		</div>
	);
}
