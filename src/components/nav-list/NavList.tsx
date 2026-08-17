import { Link } from 'react-router-dom';

const desktopStyle = "flex h-full items-center justify-center p-2 text-[0.75rem] md:text-[1rem] lg:text-[1.25rem]";
const mobileStyle = "flex items-center justify-center p-2 text-l";

const NavList = ({ mobile = false }: { mobile?: boolean }) => {
    const linkClass = mobile ? mobileStyle : desktopStyle;

    return (
        <ul className={mobile ? "flex flex-col w-full" : "flex w-full md:flex-row"}>
            {/* <li className="flex-1"><Link to="/latest" className={linkClass}>Latest</Link></li> */}
            <li className={mobile ? "w-full" : "flex-1"}><Link to="/music" className={linkClass}>Music</Link></li>
            <li className={mobile ? "w-full" : "flex-1"}><Link to="/video" className={linkClass}>Video</Link></li>
            <li className={mobile ? "w-full" : "flex-1"}><Link to="/blog" className={linkClass}>Blog</Link></li>
            <li className={mobile ? "w-full" : "flex-1"}><Link to="/photos" className={linkClass}>Photos</Link></li>
            <li className={mobile ? "w-full" : "flex-1"}><Link to="/shows" className={linkClass}>Shows</Link></li>
            {/* <li className="flex-1"><Link to="/about" className={linkClass}>About</Link></li> */}
            <li className={mobile ? "w-full" : "flex-1"}><Link to="/contact" className={linkClass}>Contact Us</Link></li>
        </ul>
    );
}

export default NavList;