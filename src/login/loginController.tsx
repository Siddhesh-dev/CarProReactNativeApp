import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../store/store";
import { LoginResponse, getLoginApi } from "../API/login/loginApi";
import { isEmptyString } from '../utils/CPUtils';
import CP_Routes from '../navigation/Routes';
import { storeLoginResponse } from '../local_storage/local_storage';
import { choiceAlert, infoAlert } from '../components/Alert';
import { getLogoutApi } from '../API/logout/logoutApi';

const loginController = (navigation: any) => {

    let isLoading = false;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch<AppDispatch>();
    const loginData = useSelector((state: RootState) => state.login);
    //const logoutData = useSelector((state: RootState) => state.logout);
    let res: LoginResponse = loginData.data;
    //console.warn(loginData.data);
    
    if (res.recordCount === "0") {
        
        const errorMsg = res.errorMessage;
       // infoAlert(errorMsg);
        if (errorMsg.includes(':')) {
         
            const msg = errorMsg.split(':')[0].toLowerCase;
            const uniqueId = errorMsg.split(':')[1];
            const sessionID = res.sessionId;
           
            if (msg == 'User Already Logged In From'.toLowerCase) {
              
                choiceAlert("User Already Logged In",
                    "Do You Want To Logout Previous Session?",
                    () => {
                        dispatch(getLogoutApi({
                            user: username.toUpperCase(),
                            sessionID: sessionID, uniqueID: uniqueId
                        }));

                    },
                    () => { });
            }
        }
    } else { 
        navigation.navigate(CP_Routes.DASHBOARD);
    }

    const onUsernameTextChange = (m_username: string) => {
        setUsername(m_username)

    }
    const onPasswordTextChange = (m_password: string) => {
        setPassword(m_password)

    }


    const validateInput = () => {
        if (isEmptyString(username)) {
            infoAlert("Please Enter Username");
            return false;
        } else if (isEmptyString(password)) {
            infoAlert("Please Enter Password");
            return false;
        } else {

            return true;
        }

    }

    const onClickLogin = () => {

        dispatch(getLoginApi(
            {
                username: username.toUpperCase()
                , password: password
            }));
    }




    return {
        username, password, onUsernameTextChange, onPasswordTextChange, onClickLogin, validateInput, isLoading

    }

}

export default loginController;