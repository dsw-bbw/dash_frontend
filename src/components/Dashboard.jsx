import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Hardware from "./Hardware.jsx";

function App() {


    return (
        <BrowserRouter>
            <nav>
                <Link to="/hardware">Hardware</Link>
            </nav>

            <Routes>
                <Route path="/hardware" element={<Hardware />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;