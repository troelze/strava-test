
import { Switch, useMantineColorScheme } from "@mantine/core";


const DarkModeButton = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    return (
        <Switch
            size="xl"
            color={dark ? "dark" : "gray"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            align="right"
        ></Switch>
    );
}

export default DarkModeButton;