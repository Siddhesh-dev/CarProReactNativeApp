import { NativeModules } from "react-native";
import {deviceUniqueId} from "../utils/DeviceInfo";
const { AES } = NativeModules;

const getRandomKey = (): string => {
  let randomKeyresult = ''
  let length = 31
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    randomKeyresult += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return randomKeyresult;
}

const getSHA256 = async (randomKey: string): Promise<string> => {
  return await AES.sha256(randomKey);
}

const getEncryptedValue = async (key: string, plaintext: string): Promise<string> => {
  const iv: string = '1234123412341234';
  if (plaintext === '') {
    return '';
  }
  if (plaintext === null) {
    return '';
  }
  const encryptvalue: string = await AES.encrypt(plaintext, key, "1234123412341234", 'aes-256-cbc')
  return encryptvalue;

}

const encryptLoginParams =
  async (username: string, password: string): Promise<string[]> => {
    const randomKey = getRandomKey();
    const shaKey = await getSHA256(randomKey);
    const uniqueId = await deviceUniqueId();
    const enc_username = await getEncryptedValue(shaKey.slice(0, 31), username);
    const enc_password = await getEncryptedValue(shaKey.slice(0, 31), password);
    const loginParamArray: string[] = [enc_username, enc_password, uniqueId, '', randomKey]
    return loginParamArray;

  }

const encryptRegularParams =
  async (sessionId: string, paramArray: string[]):Promise<string[]> => {
    let array:string[] =[];
    for (let i = 0; i < paramArray.length; i++) {
      let value = paramArray[i];
      if (value !== sessionId) {
        array.push(await getEncryptedValue(sessionId,value));
      }else{
        array.push(value);
      }
    }
    return array;

  }




export { encryptLoginParams ,encryptRegularParams};
