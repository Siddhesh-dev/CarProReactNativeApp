import { NativeModules } from "react-native";
import { LoginResponse } from '../API/login/loginApi';
import { isEmptyString } from '../utils/CPUtils';

const { RNEncryptedStorage } = NativeModules;
const key_login = "login"

async function storeLoginResponse(response: LoginResponse) {
    try {
        await RNEncryptedStorage.setItem(
            key_login,
            JSON.stringify(response)
        );

    } catch (error) {
        console.warn(error);

    }
}

async function getLoginResponse() {
    try {
        const data = await RNEncryptedStorage.getItem(key_login);
        const parsedData= JSON.parse(data);
        return parsedData as LoginResponse;
    } catch (error) {
        console.warn(error);
    }
}

async function removeUserSession() {
    try {
        await RNEncryptedStorage.removeItem(key_login);
    } catch (error: any) {
        // There was an error on the native side
        // You can find out more about this error by using the `error.code` property
        console.log(error.code); // ex: -25300 (errSecItemNotFound)
    }
}

async function clearStorage() {
    try {
        await RNEncryptedStorage.clear();
        // Congrats! You've just cleared the device storage!
    } catch (error) {
        // There was an error on the native side
    }
}


async function saveString(response: string) {
    try {
        await RNEncryptedStorage.setItem(
            key_login,
            response
        );

    } catch (error) {
        console.warn(error);

    }
}

async function getString() {
    try {
        let session = await RNEncryptedStorage.getItem(key_login);
        session = session === null ? "" : session
        return session
    } catch (error) {
        console.warn(error);
    }
}

export { storeLoginResponse, getLoginResponse, saveString, getString }