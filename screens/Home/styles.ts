import { StyleSheet } from "react-native"

import { DEFAULT_SHADOW } from "../../common/styling/variables";
import { theme } from "../../common/styling/theme";

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "space-between"
    },
    upperContainer: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomBar: {
        justifyContent: "space-evenly",
        ...DEFAULT_SHADOW,
        backgroundColor: "white",
        borderTopWidth: 0.5,
        borderColor: "#e5e7eb"
    },
    microphoneButton: {
        backgroundColor: theme.mainGreen,
    }
})
