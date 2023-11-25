import React from "react";
import { SafeAreaView, View, Text, StatusBar, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
    // setTimeout(() => {
    //     navigation.navigate('Signin');
    // }, 2000);

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar backgroundColor={Colors.secondaryColor} />

            <View style={{ flex: 1 }}>
                <LinearGradient
                    start={{ x: 1, y: 0.2 }}
                    end={{ x: 1, y: 1 }}
                    colors={['#0C0C10', '#0C0C10']}
                    style={{ flex: 1 }}
                >
                    <Image
                        source={require('../assets/images/jaunt-splash.png')}
                        style={{ marginTop: 45.0, height: 400.0, width: '100%' }}
                    />
                    <View style={{ marginTop: 48.0, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ ...Fonts.skyblueColor28SemiBoldSSP }}>
                            Vacation <Text style={{ ...Fonts.whiteColor28SemiBoldSSP }}>made</Text> easy
                        </Text>
                    </View>
                    <View style={{ marginTop: 45.0, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ ...Fonts.whiteColor18LightSSP }}>
                            Book all your travels, stays and visits just
                        </Text>
                        <Text style={{ ...Fonts.whiteColor18LightSSP }}>
                            with your phone
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.continueButtonStyle}
                        activeOpacity={0.9}
                        onPress={() => navigation.push('Signin')}
                    >
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            colors={[
                                '#50C1F1',
                                '#50C1F1',
                            ]}
                            style={styles.roundButtonGradientStyle}
                        >
                            <Text style={{ ...Fonts.blackblueColor20BoldSSP }}>
                                Continue
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    roundButtonGradientStyle: {
        paddingVertical: Sizes.fixPadding + 3.0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.fixPadding - 5.0
    },
    continueButtonStyle: {
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 5.5,
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding - 5.0
    },
})

export default SplashScreen;