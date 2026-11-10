import { Button, Group, Paper, Title } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar({ sites }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Group wrap="nowrap">
            <Title order={4} m="md">Dashboard</Title>
            <Paper withBorder radius="xl" px="lg" py="sm" m="md">
                <Group gap="md" justify="center">
                    {sites.map((site) => (
                        <Button
                            key={site.path}
                            radius="xl"
                            variant={location.pathname === site.path ? "filled" : "outline"}
                            onClick={() => navigate(site.path)}
                        >
                            {site.name}
                        </Button>
                    ))}
                </Group>
            </Paper>
        </Group>
    );
}

export default Navbar;