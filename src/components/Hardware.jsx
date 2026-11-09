import {useEffect, useState} from "react";
import {get} from "../api.js";

function Hardware() {
    const [hardware, setHardware] = useState({});

    useEffect(() => {
        get("/api/hardware")
            .then(setHardware)
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <p>{hardware.totalMem}</p>
        </>
    )
}

export default Hardware;