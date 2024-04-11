import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const DashLayout = ({ children }) => {
    return (
        <div className="flex w-full bg-gray-100">
            <Sidebar />

            <div className="w-full">
                <div className="ml-64">
                    <Navbar />
                </div>
                <div className="my-6 ml-64">
                    <Container>{children}</Container>
                </div>
            </div>
        </div>
    );
};

export default DashLayout;
