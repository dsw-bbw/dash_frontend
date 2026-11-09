import {useEffect, useState} from "react";
import {get} from "../api.js";

function Hardware() {
    const [hardware, setHardware] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            get("/api/hardware")
                .then(setHardware)
                .catch(err => console.error(err))
        }, 1000)
    }, []);

    return (
        <>
            <p>CPU: {hardware.cpuPercent} %</p>
            <p>RAM gesamt: {hardware.totalMem} MB</p>
            <p>RAM frei: {hardware.availableMem} MB</p>
            <p>Speicher: {Math.floor((hardware.diskStorage) / 1024)} GB</p>
        </>
    );
}

export default Hardware;