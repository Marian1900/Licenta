import React, { useState } from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { IHomeScreenProps } from "./Homescreen.types";
import { BirdsService } from "../../api/BirdsService/BirdsService";

import { styles } from "./styles";
import { MENU_ICON_SIZE } from "../../common/styling/variables";

const HomeScreen: React.FC<IHomeScreenProps> = () => {

    const { bottom } = useSafeAreaInsets();

    const onRecord = () => {
        BirdsService
            .sendRecortding()
            .then((response) => {
                console.log(response);
            }, (error) => { console.error("error", error) });
    }

    return <View style={styles.screenContainer}>
        <View style={styles.upperContainer}>
            <Text>
                Welcome To Bird.ly!
            </Text>
        </View>
        <Appbar
            style={styles.bottomBar}
            safeAreaInsets={{ bottom }}>
            <Appbar.Action icon="information" />
            <Appbar.Action
                iconColor="white"
                size={MENU_ICON_SIZE}
                style={styles.microphoneButton}
                icon={"microphone"}
                onPress={onRecord} />
            <Appbar.Action icon="account" />
        </Appbar>
    </View>
}

export default HomeScreen;