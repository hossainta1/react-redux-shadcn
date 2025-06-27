import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
            <div className="text-xl font-bold">
                <h3>Task manager</h3>
            </div>
            <ul>
                <li>
                    <Link to="/users" className="hover:text-gray-300 items-center">User</Link>
                </li>
                <li>
                    <Link to="/" className="hover:text-gray-300 items-center">Task</Link>
                </li>
            </ul>

            <div>
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    );
}