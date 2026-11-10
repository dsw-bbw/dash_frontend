import {useEffect, useState} from "react";
import {get} from "../api.js";

function Hardware() {
    const [hardware, setHardware] = useState({});

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         get("/api/hardware")
    //             .then(setHardware)
    //             .catch(err => console.error(err))
    //     }, 1000)
    // }, []);

    return (
        <p>123</p>
    );
}

export default Hardware;