import {Paper, Text, Progress, Group, Badge, Stack, Grid} from "@mantine/core";
import { useLiveData } from "../useLiveData.jsx";

const RESTART_AFTER = 7 * 86400; // 7 Tage in Sekunden

function formatTime(totalSeconds) {
    let rest = Math.floor(totalSeconds);
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

// 0 = grün, 0.5 = gelb, 1 = rot
function uptimeColor(ratio) {
    const hue = 120 - 120 * ratio; // 120° = grün, 0° = rot
    return `hsl(${hue}, 75%, 45%)`;
}

function HomePage() {
    const uptime = useLiveData("/api/os", "uptime", 0);

    const ratio = Math.min(uptime / RESTART_AFTER, 1);
    const color = uptimeColor(ratio);
    const restartDue = uptime >= RESTART_AFTER;

    return (
        <Grid gutter="md">
            <Grid.Col span={2}>
                <Paper withBorder radius="xl" px="lg" py="sm" m="md">
                    <Stack gap="xs">
                        <Group justify="space-between">
                            <Text size="sm" c="dimmed">Time Running</Text>
                            {restartDue && (
                                <Badge color="red" variant="filled">Neustart fällig</Badge>
                            )}
                        </Group>

                        <Text fw={700} fz="xl" style={{ color }}>
                            {formatTime(uptime)}
                        </Text>

                        <Progress value={ratio * 100} color={color} radius="xl" size="lg" />
                    </Stack>
                </Paper>
            </Grid.Col>
        </Grid>
    );
}

export default HomePage;