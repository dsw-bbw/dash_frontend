import {Paper, Textarea} from "@mantine/core";
import {useLiveData} from "../useLiveData.jsx";

function HomePage() {
    const uptime = useLiveData("/api/os", "uptime", 0);

    function getTime() {
        let rest = Math.floor(uptime);
        const units = [
            ["d", 86400],
            ["h", 3600],
            ["m", 60],
            ["s", 1],
        ];

        const parts = [];
        for (const [label, seconds] of units) {
            const value = Math.floor(rest / seconds);
            rest %= seconds;
            if (value > 0) parts.push(value + label);
        }

        return parts.join(" ") || "0s";
    }

    return (
        <>
            <Paper withBorder radius="xl" px="lg" py="sm" m="md">
                <Textarea
                    label="Time Running"
                    variant="outlined"
                    radius="xl"
                    value={getTime()}
                    readOnly
                />
            </Paper>
        </>
    )
}

export default HomePage;