import { useState } from 'react';
import NavList from '../nav-list/NavList';

const BurgerButton = (toggleBurgerMenu: () => void) => {
    return (
        <button onClick={toggleBurgerMenu} className="absolute top-8 right-8 z-20">
            <svg width="35px" height="35px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" id="Слой_1" version="1.1">
                <g>
                    <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5" />
                    <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5" />
                    <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5" />
                </g>
            </svg>
        </button>
    );
}

const BurgerMenu = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
        <div className="w-full">
            {BurgerButton(toggleBurgerMenu)}
            {isBurgerMenuOpen && (
                <div className="w-full">
                    <NavList mobile />
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;