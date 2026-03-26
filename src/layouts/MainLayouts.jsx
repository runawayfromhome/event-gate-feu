import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainLayout = ({ children }) => {
	return (
		<div>
			<NavBar />
			<main className="mx-auto min-h-[85vh] max-w-4xl">{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
