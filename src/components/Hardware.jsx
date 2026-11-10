import {useEffect, useState} from "react";
import {get} from "../api.js";
import {Group, Paper, Text} from "@mantine/core";

function Hardware() {
    const [hardware, setHardware] = useState({});

    useEffect(() => {
        setInterval(() => {
            get("/api/hardware")
                .then(setHardware)
                .catch(err => console.error(err))
        }, 1000)
    }, []);

    return (
        <Paper withBorder radius="xl" px="lg" py="sm" m="md">
            <Group gap="xl" justify="center">
                <Text>CPU: {hardware.cpuPercent} %</Text>
                <Text>RAM gesamt: {hardware.totalMem} MB</Text>
                <Text>RAM frei: {hardware.availableMem} MB</Text>
                <Text>Speicher: {hardware.diskStorage} GB</Text>
            </Group>
        </Paper>
    );
}

export default Hardware;