// import AppProvider from "@src/context/global/AppProvider";
import Footer from "./Footer";
import Header from "./Header";
// import Header from "./Header";
// import "./layout.css";

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<div className="min-h-[calc(100vh-254px)]">{children}</div>
			<Footer />
		</>
	);
}
