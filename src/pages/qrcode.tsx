import QRCode from "react-qr-code";

export default function CodePage() {
	return (
		<div
			id="qrContainer"
			className="w-screen h-screen flex justify-center items-center bg-white"
		>
			<QRCode value={"https://localhost:3000"} size={250} />
		</div>
	);
}
