import { Alert } from 'react-native';

const infoAlert=(message:string)=>{
    Alert.alert('Alert', message);
}

const choiceAlert=(title:string,message:string,onClickYes:any,
    onClickNo:any)=>{
    Alert.alert(title,message ,
        [
            {text: 'Yes', onPress: () => {
                onClickYes();
            }},
            {text: 'No', onPress: () => {
                onClickNo();
            }},
          ],
          { cancelable: true });
}

export {infoAlert,choiceAlert};