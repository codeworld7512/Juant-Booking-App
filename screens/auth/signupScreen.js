import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, TouchableOpacity, TextInput, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, MaterialCommunityIcons, } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';


const SignupScreen = ({ navigation }) => {

    const [state, setState] = useState({
        showPassword: true,
        fullName: null,
        phoneNumber: null,
        emailAddress: null,
        password: null,
        nameFocus: false,
        phoneFocus: false,
        emailFocus: false,
        passFocus: false,
        confirmpassFocus: false,
        showEmail: true,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        showPassword,
        fullName,
        phoneNumber,
        emailAddress,
        password,
        nameFocus,
        phoneFocus,
        emailFocus,
        passFocus,
        confirmpassFocus,
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
                        contentContainerStyle={{ flexGrow: 1, }}
                    >
                        <LinearGradient
                            start={{ x: 1, y: 0.2 }}
                            end={{ x: 1, y: 1 }}
                            colors={['#0C0C10', '#0C0C10']}
                            style={{ flex: 1 }}
                        >
                            {signupInfo()}
                        </LinearGradient>
                    </ScrollView>
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function signupInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding + 5.0, }}>
                <View style={{ flexDirection: 'row', marginTop:40.0, marginBottom:20.0}}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        color={Colors.skyblueColor}
                        size={25}
                        style={{marginLeft:20.0, marginTop:2.0}}
                        onPress={() => navigation.push('Signin')}
                    />
                    <Text style={{marginLeft:15.0, alignItems: 'center', ...Fonts.whiteColor26RegularSSP, }}>
                        Sign up
                    </Text>
                </View>
                {ToggleButton()}
                {fullNameTextField()}
                {state.showEmail ? emailAddressTextField() : phoneNumberTextField() }
                {passwordTextField()}
                {signupButton()}
                {orIndicator()}
                {socialMediaOptions()}
                {alreadyHaveAccountInfo()}
            </View>
        )
    }

    function ToggleButton() {
      
        const handleToggle = () => {
          updateState({ showEmail: state.showEmail ? false : true});
        };
      
        return (
            <View style={{...styles.textFieldWrapStyle, backgroundColor: Colors.boxbackgroundColor, borderColor: "transparent", borderRadius: 360, flex: 1, flexDirection: "row",}}>
                <TouchableOpacity onPress={handleToggle}>
                    <View style={{height: 35, width: 125, backgroundColor: state.showEmail ? Colors.skyblueColor : "transparent", alignItems: 'center', justifyContent: 'center', borderRadius: 360,}}>
                        <Text>E-mail</Text>
                    </View>

                    <View style={{height: 35, width: 125, backgroundColor: state.showEmail ? "transparent" : Colors.skyblueColor, alignItems: 'center', justifyContent: 'center', borderRadius: 360,}}>
                        <Text>Phone Number</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
      };
      

    function emailAddressTextField() {
        return (
            <View style={{ borderColor: emailFocus ? Colors.skyblueColor : Colors.grayColor , ...styles.textFieldWrapStyle}}>
                <MaterialIcons
                    name="email"
                    color={emailFocus ? Colors.whiteColor : Colors.grayColor}
                    size={20}
                />
                <TextInput
                    value={emailAddress}
                    onFocus={() => updateState({emailFocus : true})}
                    onBlur={() => updateState({emailFocus: false})}
                    onChangeText={(text) => updateState({ emailAddress: text })}
                    selectionColor={Colors.grayColor}
                    placeholder="Email Address"
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

    function phoneNumberTextField() {
        return (
            <View style={{  borderColor: phoneFocus ? Colors.skyblueColor : Colors.grayColor ,...styles.textFieldWrapStyle}}>
                <MaterialIcons
                    name="phone-android"
                    color={phoneFocus ? Colors.whiteColor : Colors.grayColor}
                    size={20}
                />
                <TextInput
                    keyboardType="numeric"
                    value={phoneNumber}
                    onFocus={() => updateState({phoneFocus: true})}
                    onBlur={() => updateState({phoneFocus: false})}
                    onChangeText={(text) => updateState({ phoneNumber: text.replace(/[^0-9]/g, '') })}
                    selectionColor={Colors.grayColor}
                    placeholder="Phone Number"
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

    function alreadyHaveAccountInfo() {
        return (
            <View style={{
                marginVertical: Sizes.fixPadding,
                alignItems: 'center',
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: 2.0,marginRight: Sizes.fixPadding + 5.0, ...Fonts.whiteColor16RegularSSP }}>
                        Already have an account ?
                    </Text>
                    <Text 
                        style={{ ...Fonts.skyblueColor18BoldSSP, ...Colors.skyblueColor }}
                        onPress={() => navigation.push('Signin')}
                    >
                        Sign in
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
                    Or sign up with
                </Text>
                <View
                    style={{ flex: 1, backgroundColor: '#D5D5D5', height: 1.5, }}
                />
            </View>
        )
    }

    function signupButton() {
        return (
            <TouchableOpacity
                style={styles.signupButtonStyle}
                activeOpacity={0.9}
                onPress={() => navigation.push('BottomTabBar')}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={[
                        Colors.skyblueColor,
                        Colors.skyblueColor,
                    ]}
                    style={styles.signupButtonGradientStyle}
                >
                    <Text style={{ ...Fonts.blackblueColor18BoldSSP }}>
                        SIGN UP
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    function passwordTextField() {
        return (
            <View style={{ borderColor: passFocus ? Colors.skyblueColor : Colors.grayColor, ...styles.passwordTextFieldWrapstyle }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialIcons
                        name="lock-open"
                        size={20}
                        color={passFocus ? Colors.whiteColor : Colors.grayColor}
                    />
                    <TextInput
                        value={password}
                        onFocus={() => updateState({passFocus: true})}
                        onBlur={() => updateState({passFocus: false})}
                        onChangeText={(text) => updateState({ password: text })}
                        secureTextEntry={showPassword}
                        selectionColor={Colors.grayColor}
                        placeholder='Password'
                        placeholderTextColor={Colors.grayColor}
                        style={{
                            flex: 1,
                            ...Fonts.whiteColor18RegularSSP,
                            marginLeft: Sizes.fixPadding,
                        }}
                    />

                </View>
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-outline' : "eye-off-outline"}
                    color={passFocus ? Colors.whiteColor : Colors.grayColor}
                    size={20}
                    onPress={() => updateState({ showPassword: !showPassword })}
                />
            </View>
        )
    }

    function fullNameTextField() {
        return (
            <View style={{
                marginTop: Sizes.fixPadding * 2.5,
                borderColor: nameFocus ? Colors.skyblueColor : Colors.grayColor,
                ...styles.textFieldWrapStyle
            }}>
                <MaterialIcons
                    name="person"
                    color={nameFocus ? Colors.whiteColor : Colors.grayColor}
                    size={20}
                />
                <TextInput
                    value={fullName}
                    onFocus={() => updateState({nameFocus: true})}
                    onBlur={() => updateState({nameFocus: false})}
                    onChangeText={(text) => updateState({ fullName: text })}
                    selectionColor={Colors.grayColor}
                    placeholder="Full Name"
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
    textFieldWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.boxbackgroundColor,
        elevation: 2.0,
        borderWidth: 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding + 1.0,
        marginBottom: Sizes.fixPadding + 10.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    passwordTextFieldWrapstyle: {
        marginBottom: Sizes.fixPadding,
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.boxbackgroundColor,
        elevation: 2.0,
        borderWidth: 2.0,
        paddingVertical: Sizes.fixPadding + 1.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
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
    signupButtonGradientStyle: {
        paddingVertical: Sizes.fixPadding + 3.0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.fixPadding - 5.0
    },
    signupButtonStyle: {
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 2.5,
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding - 5.0
    }
})

export default SignupScreen;