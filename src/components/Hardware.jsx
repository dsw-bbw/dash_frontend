import {Group, Paper, Text} from "@mantine/core";
import {useLiveData} from "../useLiveData.jsx";

function Hardware() {
    const cpuPercent = useLiveData("/api/hardware", "cpuPercent", 0);
    const totalMem = useLiveData("/api/hardware", "totalMem", 0);
    const availableMem = useLiveData("/api/hardware", "availableMem", 0);
    const diskStorage = useLiveData("/api/hardware", "diskStorage", 119);

    return (
        <Paper withBorder radius="xl" px="lg" py="sm" m="md">
            <Group gap="xl" justify="center">
                <Text>CPU: {cpuPercent} %</Text>
                <Text>RAM gesamt: {totalMem} MB</Text>
                <Text>RAM frei: {availableMem} MB</Text>
                <Text>Speicher: {diskStorage} GB</Text>
            </Group>
        </Paper>
    );
}

export default Hardware;