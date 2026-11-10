import {Paper, Textarea} from "@mantine/core";
import {useEffect, useState} from "react";

function HomePage() {
    const [os, setOs] = useState({});

    useEffect(() => {
        setInterval(() => {
            get("/api/os")
                .then(setOs)
                .catch(err => console.error(err))
        }, 1000)
    }, []);

    return (
        <>
            <Paper withBorder radius="xl" px="lg" py="sm" m="md">
                <Textarea
                    label="Time Running"
                    variant="outlined"
                    radius="xl"
                    value={os.timeRunning}
                    readonly
                />
            </Paper>
        </>
    )
}

export default HomePage;