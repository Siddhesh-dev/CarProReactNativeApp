
const buildWcfParams = (programDetails: string[], values: string[]
) => {
    const [programName, arglist] = programDetails;
    let paramObj:any = {};
    Object.assign(paramObj, { ['APPNAME']: 'RentproWeb' });
    Object.assign(paramObj, { ['PRGNAME']: programName });
    Object.assign(paramObj, { ['Arguments']: arglist });
    let argumentArray = arglist.split(',')
    if (argumentArray.length == values.length) {
        for (let i = 0; i < argumentArray.length; i++) {
            if (values[i] != null) {
                Object.assign(paramObj, { [argumentArray[i]]: values[i].toString() });
            }
        }
    }
    const formBody = Object.keys(paramObj).map(key =>
         encodeURIComponent(key) + '=' + encodeURIComponent(paramObj[key])).join('&');
    return formBody;
}

export default buildWcfParams;