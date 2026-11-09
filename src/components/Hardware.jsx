import {useEffect, useState} from "react";
import {get} from "../api.js";

function Hardware() {
    const [hardware, setHardware] = useState({});

    useEffect(() => {
        get("/api/hardware")
            .then(setHardware)
            .catch(err => console.error(err))
    });

    return (
        {hardware}
    )
}

export default Hardware;