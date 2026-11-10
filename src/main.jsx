import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./components/Dashboard.jsx";
import {createTheme, MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({ primaryColor: "teal"})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <App/>
        </MantineProvider>
    </StrictMode>,
)
