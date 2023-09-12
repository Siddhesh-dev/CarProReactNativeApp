import DeviceInfo from 'react-native-device-info';
import { Dimensions } from 'react-native'
const deviceUniqueId = async (): Promise<string> => {
    return await DeviceInfo.getUniqueId();
}

const isTablet = () => {
    return DeviceInfo.isTablet();
}

const screenHeight = () => {
    return (Dimensions.get('window').height);
}

const screenWidth = () => {
    return (Dimensions.get('window').width);
}
export { deviceUniqueId, isTablet, screenHeight, screenWidth };