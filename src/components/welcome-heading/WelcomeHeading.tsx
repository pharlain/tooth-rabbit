import { Link } from 'react-router-dom';
import './WelcomeHeading.css'; // adjust path to wherever the file lives

const WelcomeHeading = () => {
    return (
        <h1 className="wavy-text p-2 ml-4" style={{ fontFamily: "'Courier New', monospace", fontSize: "4rem", color: "#2b2a2a" }}>
            <Link to="/">
                <span>W</span>
                <span>e</span>
                <span>l</span>
                <span>c</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
                <span>&nbsp;</span>

                <span>t</span>
                <span>o</span>
                <span>&nbsp;</span>
                
                <span>R</span>
                <span>a</span>
                <span>b</span>
                <span>b</span>
                <span>i</span>
                <span>t</span>
                <span>&nbsp;</span>

                <span>T</span>
                <span>o</span>
                <span>o</span>
                <span>t</span>
                <span>h</span>
            </Link>
        </h1>
    )
}

export default WelcomeHeading;