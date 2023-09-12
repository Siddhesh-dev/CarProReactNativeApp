import { View, Text } from "react-native";
import dashboardController from "./dashboardController";
import { CPTextView, CPTextViewWithBorder } from "../components/TextView";


const DashboardScreen = () => {
    const {testResponse,loginResponse} = dashboardController();
    testResponse();
    return (
        <View>
            <CPTextViewWithBorder title={loginResponse}
            ></CPTextViewWithBorder>
        </View>
    );
}

export default DashboardScreen;