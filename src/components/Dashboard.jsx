import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Hardware from "./Hardware.jsx";
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
                <Route path="/hardware" element={<Hardware />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;