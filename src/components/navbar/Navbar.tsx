import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex w-full">
            <ul className="flex w-full">
                <li className="flex-1"><Link to="/latest" className="flex h-full items-center justify-center p-2">Latest</Link></li>
                <li className="flex-1"><Link to="/music" className="flex h-full items-center justify-center p-2">Music</Link></li>
                <li className="flex-1"><Link to="/video" className="flex h-full items-center justify-center p-2">Video</Link></li>
                <li className="flex-1"><Link to="/blog" className="flex h-full items-center justify-center p-2">Blog</Link></li>
                <li className="flex-1"><Link to="/photos" className="flex h-full items-center justify-center p-2">Photos</Link></li>
                <li className="flex-1"><Link to="/shows" className="flex h-full items-center justify-center p-2">Shows</Link></li>
                <li className="flex-1"><Link to="/about" className="flex h-full items-center justify-center p-2">About</Link></li>
                <li className="flex-1"><Link to="/contact" className="flex h-full items-center justify-center p-2">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;