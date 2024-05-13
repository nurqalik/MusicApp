import { Colors, fontSize } from "constants/Colors";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    text: {
        fontSize: fontSize.base,
        color: Colors.dark.text
    }
})

export const utilsStyles = StyleSheet.create({})