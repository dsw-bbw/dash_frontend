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
            <p>CPU: {hardware.cpuPercent} %</p>
            <p>RAM gesamt: {hardware.totalMem} MB</p>
            <p>RAM frei: {hardware.availableMem} MB</p>
            <p>Speicher: {hardware.diskStorage} MB</p>
        </>
    );
}

export default Hardware;