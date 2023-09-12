
const isEmptyString = (value: string) => {
    return value === "" && value.length === 0;
}

const isUndefined = (value: any) => {
    return value === undefined;
}

const getCode = (value: string) => {
    return value.split("_")[0];
}

const getDescription = (value: string) => {
    return value.split("_")[1];
}
export { isEmptyString, getCode, getDescription,isUndefined };