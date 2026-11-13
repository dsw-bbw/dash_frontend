import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hardware from "./Hardware.jsx";
import HomePage from "./HomePage.jsx";
import Navbar from "./Navbar.jsx";

function App() {
    const sites = [
        { name: "Home", path: "/", element: <HomePage/> },
        { name: "Hardware", path: "/hardware", element: <Hardware /> }
    ]

    return (
        <BrowserRouter>
            <Navbar sites={sites}/>

            <Routes>
                {sites.map((site) => (
                    <Route path={site.path} element={site.element}/>
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;