import {Flex, Paper, Text} from "@mantine/core";
import {useLiveData} from "../useLiveData.jsx";

function Hardware() {
    const path = "/api/hardware";
    const cpuPercent = useLiveData(path, "cpuPercent", 0);
    const totalMem = useLiveData(path, "totalMem", 0);
    const availableMem = useLiveData(path, "availableMem", 0);
    const diskStorage = useLiveData(path, "diskStorage", 119);

    return (
        <Paper withBorder radius="xl" px="lg" py="sm" m="md">
            <Flex direction="column" gap="xl" justify="center">
                <Text>CPU: {cpuPercent} %</Text>
                <Text>RAM gesamt: {totalMem} MB</Text>
                <Text>RAM frei: {availableMem} MB</Text>
                <Text>Speicher: {diskStorage} GB</Text>
            </Flex>
        </Paper>
    );
}

export default Hardware;