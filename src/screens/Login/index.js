import React, { useState } from "react";
import { View, Switch } from 'react-native';
import { Button, ThemeProvider, Image, Input, Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ThemeProvider>
            <LinearGradient colors={['#0e1371', '#0e1371', '#3f4376']} style={styles.linearGradient}>
                <View style={styles.viewLogin}>
                    <View style={styles.viewImage}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../images/KOMATSU_HEADER.jpg')}
                        />
                    </View>
                    <View style={styles.viewCampos}>
                    <Input
                        placeholder='CPF'
                        inputStyle={styles.input}
                        placeholderTextColor="white"
                        keyboardType="number-pad"
                        leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'white' }}
                    />
                    <Input
                        placeholder='SENHA'
                        inputStyle={styles.input}
                        placeholderTextColor="white"
                        keyboardType="number-pad"
                        secureTextEntry={true}
                        leftIcon={{ type: 'font-awesome', name: 'unlock-alt', color: 'white' }}
                    />
                    </View>
                    <View style={styles.viewRememberCPF}>
                        <Text style={styles.text}>Lembrar CPF</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#4bf559" }}
                            thumbColor={isEnabled ? "#28a833" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View style={styles.viewButton}>
                        <Button
                            title="Entrar"
                            type="outline"
                            style={styles.tinyLogo}
                            raised
                            onPress={() => navigation.navigate('Home')}
                        ></Button>
                    </View>
                </View>
            </LinearGradient>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({

    tinyLogo: {
        width: 250,
        height: 100,
        alignSelf: "center",
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    viewLogin: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 100,
    },
    viewImage: {
        alignItems: "center",
    },
    viewCampos: {
        marginTop: 25,
        alignItems: "center",
    },
    viewButton: {
        flex: 1,
        paddingTop: 20,
    },
    input: {
        color: "#ffffff",
    },
    viewRememberCPF: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    text: {
        color: "#ffffff",
        fontSize: 18,
    }
});