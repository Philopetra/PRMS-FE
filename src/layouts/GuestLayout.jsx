// import ApplicationLogo from "../ApplicationLogo";
import { Link } from "react-router-dom";
import ApplicationLogo from "./../components/ApplicationLogo";

export default function GuestLayout({ children }) {
	return (
		<div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
			<div>
				<Link to="/">
					<ApplicationLogo />
				</Link>
			</div>

			<div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
				{children}
			</div>
		</div>
	);
}
