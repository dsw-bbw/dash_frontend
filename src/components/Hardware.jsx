import {useEffect, useState} from "react";
import {get} from "../api.js";

function Hardware() {
    const [hardware, setHardware] = useState({});

    useEffect(() => {
        get("/api/hardware")
            .then(r => setHardware(JSON.stringify(r)))
            .catch(err => console.error(err))
    }, []);

    return (
        {hardware}
    )
}

export default Hardware;