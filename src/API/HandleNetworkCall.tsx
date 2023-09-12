import axios from 'axios';
import AppConfig from "../utils/AppConfig";

const sendNetworkCall = async (formBody:string) => {
    const response = await axios({
        method: 'POST',
        url: AppConfig.BASE_URL,
        data: formBody,
        headers: {
            'Content_type': 'application/x-www-form-urlencoded',
        },
    });

    return response;

}

export default sendNetworkCall;