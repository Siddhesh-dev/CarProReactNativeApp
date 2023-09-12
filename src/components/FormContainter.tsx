import { View, ImageBackground, SafeAreaView, Dimensions, KeyboardAvoidingView } from "react-native";


type FormProps = {
    children: JSX.Element
}
const FormContainer = ({ children }: FormProps) => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    return (
        <ImageBackground style={{
            width: screenWidth,
            height: screenHeight,
            opacity: 0.7,
        }} source={require('../images/golffifty.png')} >
            <KeyboardAvoidingView enabled={true} behavior='height' style={{flex:1}}>
                <SafeAreaView
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignContent: "center"
                    }}>
                    {children}
                </SafeAreaView>
            </KeyboardAvoidingView>
        </ImageBackground>

    );


}

export default FormContainer;