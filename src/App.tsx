import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import TheRabbits from './components/the-rabbits/TheRabbits';
import WelcomeHeading from './components/welcome-heading/WelcomeHeading';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Music from './pages/Music/Music';
import Photos from './pages/Photos/Photos';
import Shows from './pages/Shows/Shows';
import Video from './pages/Video/Video';
import Contact from './pages/Contact/Contact';
import Latest from './pages/Latest/Latest';


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="relative w-screen min-h-screen flex flex-col">
          <TheRabbits />
          <div className="flex flex-col w-full">
            <WelcomeHeading />
            <Navbar />
          </div>
          <div className="bg-blue-500 flex-1 flex">
            <div className="flex w-[80%] md:w-[70%] justify-center mx-auto border-x-12 border-t-12 border-blue-500 bg-white border-dashed">
              <div className="p-8 min-w-0 w-full h-full">
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/latest" element={<Latest />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/shows" element={<Shows />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
