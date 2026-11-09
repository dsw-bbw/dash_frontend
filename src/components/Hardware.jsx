import {useEffect, useState} from "react";
import {get} from "../api.js";

function Hardware() {
    const [hardware, setHardware] = useState([]);

    useEffect(() => {
        get("/api/hardware")
            .then(r => setHardware(JSON.stringify(r)))
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            {Object.entries(hardware).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
            ))}
        </>
    )
}

export default Hardware;