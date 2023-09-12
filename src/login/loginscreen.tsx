import { Button, View, ActivityIndicator, ImageBackground, Dimensions, KeyboardAvoidingView, TextInput } from "react-native";
import React from 'react';
import { CPTextInput, CPTextInputPassword } from "../components/TextInput";
import loginController from "./loginController";
import { useNavigation } from "@react-navigation/native";
import CP_Routes from "../navigation/Routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { CPButton } from "../components/Button";
import FormContainer from "../components/FormContainter";


const LoginScreen = () => {

    const navigation = useNavigation();
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const { username, password, onUsernameTextChange,
        onPasswordTextChange, onClickLogin, validateInput, isLoading } = loginController(navigation);
    return (
        <FormContainer>
            <View >
                <CPTextInput
                    title="Username"
                    value={username}
                    hint="Please Enter Username"
                    onChangeText={(value: string) => {
                        onUsernameTextChange(value)
                    }}
                ></CPTextInput>

                <CPTextInputPassword
                    title="Password"
                    value={password}
                    hint="Please Enter Password"
                    onChangeText={(value: string) => {
                        onPasswordTextChange(value)
                    }}
                ></CPTextInputPassword>
               
                <CPButton
                    title="Login"
                    onClick={() => {
                        if (validateInput()) {
                            onClickLogin();
                        }

                    }}
                ></CPButton>



            </View>
        </FormContainer>
    );
};

export default LoginScreen;