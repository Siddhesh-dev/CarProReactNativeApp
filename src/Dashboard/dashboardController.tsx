import { LoginResponse } from "../API/login/loginApi";
import { getLoginResponse } from "../local_storage/local_storage";
import { useState } from 'react';


const dashboardController = () => {
    const [loginResponse, setLoginResponse] = useState('');

    const testResponse = async () => {
        let res = await getLoginResponse();
        //let login: LoginResponse = res as LoginResponse;
        //console.warn(login.sessionId);
        let sessionID =
            res?.sessionId === undefined ? '' : res?.sessionId;
        setLoginResponse(sessionID);

    };

    return {
        testResponse, loginResponse
    }

}

export default dashboardController;