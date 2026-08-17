import './Navbar.css';
import BurgerMenu from '../burger-menu/BurgerMenu';
import NavList from '../nav-list/NavList';

const Navbar = () => {
    return (
        <div className="w-full flex-1">
            <nav className="hidden md:flex w-full">
                <NavList />
            </nav>
            <div className="md:hidden w-full">
                <BurgerMenu />
            </div>
        </div>
    );
}

export default Navbar;