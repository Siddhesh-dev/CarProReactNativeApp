import { createAsyncThunk } from "@reduxjs/toolkit";
import { encryptRegularParams } from "../../encryption/AESEncryption";
import buildWcfParams from "../BuildWCFParam";
import ProgramDetails from "../ProgramDetails";
import sendNetworkCall from "../HandleNetworkCall";
export type LogoutParam = {
    user: string;
    sessionID: string;
    uniqueID: string;

};


export const getLogoutApi = createAsyncThunk('logout',
    async (data: LogoutParam) => {
        const getEncyptedData = await encryptRegularParams(data.sessionID,
            [data.user, data.uniqueID, data.sessionID, '']);
        const params = buildWcfParams(ProgramDetails.logout, getEncyptedData);
        const response = await sendNetworkCall(params);
        console.log(response);
        return response.data;

    });

   