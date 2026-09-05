import { Link } from 'react-router-dom';
import './WelcomeHeading.css';

const WelcomeHeading = () => {
    return (
        <div className="flex">
            <h1 className="wavy-text p-6 mt-4 sm:p-8 w-full sm:w-full md:ml-6 text-[1.40rem] sm:text-[1.95rem] md:text-[2.5rem] lg:text-[3.50rem]" style={{ fontFamily: "'Courier New', monospace", color: "#2b2a2a" }}>
                <Link to="/">
                    <span>w</span>
                    <span>w</span>
                    <span>w</span>
                    <span>.</span>
                    <span>t</span>
                    <span>o</span>
                    <span>o</span>
                    <span>t</span>
                    <span>h</span>
                    <span>o</span>
                    <span>f</span>
                    <span>t</span>
                    <span>h</span>
                    <span>e</span>
                    <span>r</span>
                    <span>a</span>
                    <span>b</span>
                    <span>b</span>
                    <span>i</span>
                    <span>t</span>
                    <span>.</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                </Link>
            </h1>
        </div>
    )
}

export default WelcomeHeading;