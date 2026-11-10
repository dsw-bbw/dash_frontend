import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hardware from "./Hardware.jsx";
import HomePage from "./HomePage.jsx";
import Navbar from "./Navbar.jsx";

function App() {
    const sites = [
        { name: "Home", path: "/" },
        { name: "Hardware", path: "/hardware" }
    ]

    return (
        <BrowserRouter>
            <Navbar sites={sites}/>

            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/hardware" element={<Hardware />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;