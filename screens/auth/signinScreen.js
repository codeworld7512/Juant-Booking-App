import React, { useState, useCallback } from "react";
import { BackHandler, SafeAreaView, View, StatusBar, TouchableOpacity, TextInput, Text, ScrollView, Image, StyleSheet, Button } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, MaterialCommunityIcons, } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useFocusEffect } from "@react-navigation/native";

const SigninScreen = ({ navigation }) => {

    const [state, setState] = useState({
        showPassword: true,
        userName: null,
        password: null,
        backClickCount: 0,
        userFocus: false,
        passFocus: false,
    });

    const updateState = (data) => setState((state) => ({ ...state, ...data }));

    const {
        showPassword,
        userName,
        password,
        backClickCount,
        userFocus,
        passFocus,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <ScrollView
                        scrollEnabled={false}
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'center'
                        }}
                    >
                        <LinearGradient
                            start={{ x: 1, y: 0.2 }}
                            end={{ x: 1, y: 1 }}
                            colors={['#0C0C10', '#0C0C10']}
                            style={{ flex: 1 }}
                        >
                            {signinInfo()}
                        </LinearGradient>
                    </ScrollView>
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function signinInfo() {
        return (
            <View>
                <View style={{ flexDirection: 'row', marginTop:40.0, marginBottom:150.0}}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        color={Colors.skyblueColor}
                        size={25}
                        style={{marginLeft:20.0, marginTop:2.0}}
                        onPress={() => navigation.push('Splash')}
                    />
                    <Text style={{marginLeft:15.0, alignItems: 'center', ...Fonts.whiteColor26RegularSSP, }}>
                        Sign in
                    </Text>
                </View>

                {userNameTextField()}
                {passwordTextField()}
                {signinButton()}
                {orIndicator()}
                {socialMediaOptions()}
                {dontHaveAccountInfo()}
            </View>
        )
    }

    function dontHaveAccountInfo() {
        return (
            <View style={{
                marginVertical: Sizes.fixPadding,
                alignItems: 'center',
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: 2.0, marginRight: Sizes.fixPadding + 5.0, ...Fonts.whiteColor16RegularSSP }}>
                        Don't have an account ?
                    </Text>
                    <Text 
                        style={{ ...Fonts.skyblueColor18BoldSSP, ...Colors.skyblueColor }}
                        onPress={() => navigation.push('Signup')}
                    >
                        Sign up
                    </Text>
                </View>
            </View>

        )
    }

    function socialMediaOptions() {
        return (
            <View style={styles.socialMediaIconsWrapStyle}>
                <View style={{
                    backgroundColor: '#4267B2',
                    ...styles.socialMediaIconsStyle,
                }}>
                    <Image
                        source={require('../../assets/images/icon/facebook-icon.png')}
                        style={{ width: 15.0, height: 15.0 }}
                        resizeMode="contain"
                    />
                </View>

                <View style={{
                    backgroundColor: '#EA4335',
                    ...styles.socialMediaIconsStyle,
                    marginHorizontal: Sizes.fixPadding - 5.0,
                }}>
                    <Image
                        source={require('../../assets/images/icon/google-icon.png')}
                        style={{ width: 15.0, height: 15.0 }}
                        resizeMode="contain"
                    />
                </View>
                <View style={{
                    backgroundColor: '#00A1F2',
                    ...styles.socialMediaIconsStyle,
                }}>
                    <Image
                        source={require('../../assets/images/icon/twitter-icon.png')}
                        style={{ width: 15.0, height: 15.0 }}
                        resizeMode="contain"
                    />
                </View>
            </View>
        )
    }

    function orIndicator() {
        return (
            <View style={styles.orWrapStyle}>
                <View
                    style={{ flex: 1, backgroundColor: '#D5D5D5', height: 1.5, }}
                />
                <Text style={{
                    marginHorizontal: Sizes.fixPadding,
                    ...Fonts.grayColor12SemiBold
                }}>
                    Or sign in with
                </Text>
                <View
                    style={{ flex: 1, backgroundColor: '#D5D5D5', height: 1.5, }}
                />
            </View>
        )
    }

    function signinButton() {
        return (
            <TouchableOpacity
                style={styles.signinButtonStyle}
                activeOpacity={0.9}
                onPress={() => navigation.push('Signin')}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={[
                        Colors.skyblueColor,
                        Colors.skyblueColor,
                    ]}
                    style={styles.signinButtonGradientStyle}
                >
                    <Text style={{ ...Fonts.blackblueColor18BoldSSP }}>
                        SIGN IN
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    function passwordTextField() {
        return (
            <View style={{borderColor: passFocus ? Colors.skyblueColor : Colors.grayColor, ...styles.userNameTextFieldWrapStyle }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialIcons
                        name="lock-open"
                        size={20}
                        color={ passFocus ? Colors.whiteColor : Colors.grayColor }
                    />
                    <TextInput
                        value={password}
                        onFocus={() => updateState({passFocus: true})}
                        onBlur={() => updateState({passFocus: false})}
                        onChangeText={(text) => updateState({ password: text })}
                        secureTextEntry={showPassword}
                        selectionColor={Colors.whiteColor}
                        placeholder='Password'
                        placeholderTextColor={Colors.grayColor}
                        style={{
                            marginLeft: Sizes.fixPadding,
                            flex: 1,
                            ...Fonts.whiteColor18RegularSSP
                        }}
                    />

                </View>
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-outline' : "eye-off-outline"}
                    color={ passFocus ? Colors.whiteColor : Colors.grayColor }
                    size={20}
                    onPress={() => updateState({ showPassword: !showPassword })}
                />
            </View>
        )
    }

    function userNameTextField() {

        return (
            <View style={{ borderColor: userFocus ? Colors.skyblueColor : Colors.grayColor, ...styles.userNameTextFieldWrapStyle}}>
                <MaterialIcons
                    name="person"
                    color={ userFocus ? Colors.whiteColor : Colors.grayColor }
                    size={20}
                />
                <TextInput
                    value={userName}
                    onFocus={() => updateState({userFocus: true})}
                    onBlur={() => updateState({userFocus: false})}
                    onChangeText={(text) => updateState({ userName: text })}
                    selectionColor={Colors.whiteColor}
                    placeholder="Email/Phone number"
                    placeholderTextColor={Colors.grayColor}
                    style={{
                        marginLeft: Sizes.fixPadding,
                        flex: 1,
                        ...Fonts.whiteColor18RegularSSP
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    animatedView: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
    userNameTextFieldWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.boxbackgroundColor,
        elevation: 2.0,
        borderWidth:2,
        borderRadius: Sizes.fixPadding ,
        paddingVertical: Sizes.fixPadding + 1.0,
        marginTop: Sizes.fixPadding * 2.5,
        marginBottom: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    passwordTextFieldWrapstyle: {
        marginVertical: Sizes.fixPadding,
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.boxbackgroundColor,
        elevation: 2.0,
        borderWidth:2,
        paddingVertical: Sizes.fixPadding + 1.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding,
    },
    orWrapStyle: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    socialMediaIconsStyle: {
        width: 32.0,
        height: 32.0,
        borderRadius: 16.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialMediaIconsWrapStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    signinButtonGradientStyle: {
        paddingVertical: Sizes.fixPadding + 3.0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.fixPadding - 5.0
    },
    signinButtonStyle: {
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 2.5,
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding - 5.0
    }
})

export default SigninScreen;