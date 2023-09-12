import { createAsyncThunk } from "@reduxjs/toolkit";
import { encryptLoginParams } from "../../encryption/AESEncryption";
import buildWcfParams from "../BuildWCFParam";
import ProgramDetails from "../ProgramDetails";
import { DOMParser } from "@xmldom/xmldom";
import sendNetworkCall from "../HandleNetworkCall";
import { storeLoginResponse } from "../../local_storage/local_storage";


export type LoginParam = {
    username: string;
    password: string;
};

export class LoginResponse {
    recordCount: string = '0';
    sessionId: string = '';
    errorMessage: string = '';
    system_currency: string = '';
    branchName: string = '';
    systemNoOfDecimal: string = '';
    compantFormat: string = '';
    isAgreement: boolean = false;
    isNRT: boolean = false;
    isDeliveryPickup: boolean = false;
    isChauffeur: boolean = false;
    isLeaseQuote: boolean = false;
    isRentalQuote: boolean = false;
    isCustomerAcc: boolean = false;
    isPayment: boolean = false;
    isReceivableAging: boolean = false;
    isFleet: boolean = false;
    isDamageReport: boolean = false;
    isLeaseAgreement: boolean = false;
}

const parseLoginData = (response: any): LoginResponse => {

    let loginResponse = new LoginResponse();

    const doc = new DOMParser().parseFromString(response, 'text/xml');

    const NODE_RECORDSET = doc.getElementsByTagName("RecordSet")[0];
    const NODE_RECORDS = NODE_RECORDSET.getElementsByTagName('Records')[0];

    let recordCount = NODE_RECORDS.getAttribute('Count');
    loginResponse.recordCount = recordCount == null ? '0' : recordCount;
    if (recordCount === "0") {
        let sesionID = NODE_RECORDSET.getElementsByTagName('Session')[0].getAttribute('ID');
        loginResponse.sessionId = sesionID == null ? '' : sesionID;
        let errorMessage = NODE_RECORDSET.getElementsByTagName("Error")[0].getAttribute('Message');
        loginResponse.errorMessage = errorMessage == null ? '' : errorMessage;
    } else {
        const NODE_DEFAULT = NODE_RECORDSET.getElementsByTagName('Default')[0];

        let sesionID = NODE_RECORDSET.getElementsByTagName('Session')[0].getAttribute('ID');
        loginResponse.sessionId = sesionID == null ? '' : sesionID;

        let systemCurrency = NODE_DEFAULT.getAttribute('SystemCurrency');
        loginResponse.system_currency = systemCurrency == null ? '' : systemCurrency;

        let empBranchName = NODE_DEFAULT.getAttribute('EmpBranchName');
        loginResponse.branchName = empBranchName == null ? '' : empBranchName;

        let systemNoOfDecimal = NODE_DEFAULT.getAttribute('SystemNoOfDecimal');
        loginResponse.systemNoOfDecimal = systemNoOfDecimal == null ? '' : systemNoOfDecimal;

        let companyFormat = NODE_DEFAULT.getAttribute('CompanyFormat');
        loginResponse.compantFormat = companyFormat == null ? '' : companyFormat;

        const NODE_RECORD = NODE_RECORDS.getElementsByTagName('Record')[0];

        let menuCount = NODE_RECORD.attributes.length;
        //2
        //let menuCount = doc.getElementsByTagName("RecordSet")[0].getElementsByTagName("Records")[0].attributes.length;

        for (let i = 1; i <= menuCount; i++) {
            let menuAttribute = "Menu".concat(i.toString());
            let menuAttributeValue = NODE_RECORD.getAttribute(menuAttribute);
            switch (menuAttribute) {
                case 'Menu1':
                    loginResponse.isAgreement = menuAttributeValue !== '0';
                    break;
                case 'Menu2':
                    loginResponse.isNRT = menuAttributeValue !== '0';
                    break;
                case 'Menu3':
                    loginResponse.isDeliveryPickup = menuAttributeValue !== '0';
                    break;
                case 'Menu4':
                    loginResponse.isChauffeur = menuAttributeValue !== '0';
                    break;
                case 'Menu5':
                    loginResponse.isLeaseQuote = menuAttributeValue !== '0';
                    break;
                case 'Menu6':
                    loginResponse.isRentalQuote = menuAttributeValue !== '0';
                    break;
                case 'Menu7':
                    loginResponse.isCustomerAcc = menuAttributeValue !== '0';
                    break;
                case 'Menu8':
                    loginResponse.isPayment = menuAttributeValue !== '0';
                    break;
                case 'Menu9':
                    loginResponse.isReceivableAging = menuAttributeValue !== '0';
                    break;
                case 'Menu10':
                    loginResponse.isFleet = menuAttributeValue !== '0';
                    break;
                case 'Menu12':
                    loginResponse.isDamageReport = menuAttributeValue !== '0';
                    break;
                case 'Menu13':
                    loginResponse.isLeaseAgreement = menuAttributeValue !== '0';
                    break;
                default:
                    break;
            }

        }

    }

    return loginResponse

}


export const getLoginApi
    = createAsyncThunk('login', 
    async (data: LoginParam): Promise<LoginResponse> => {
        const getEncyptedData = await encryptLoginParams(data.username, data.password);
        const params = buildWcfParams(ProgramDetails.login, getEncyptedData);
        const response = await sendNetworkCall(params);
        console.log(response);
        const loginResponse: LoginResponse = parseLoginData(response.data);
        const as=await storeLoginResponse(loginResponse)
        return loginResponse;
    });