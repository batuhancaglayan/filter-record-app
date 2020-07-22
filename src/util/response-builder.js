/**
 * Helper for API response body.
 */

var Enum = require('enum');

const ErrorCode = new Enum({'SUCCESS': 0, 'ERROR': -1})

const buildResponse = (code, message, records) => {
    let response = {};
    response.code = code;
    response.msg = message;

    if(records)
    {
        response.records = records;
    }
    
    return response;
}

const buildSuccessResponse = (payload) => {
    return buildResponse(ErrorCode.SUCCESS.value, ErrorCode.SUCCESS, payload);
}

const buildErrorResponse = (msg) => {
    return buildResponse(ErrorCode.ERROR.value, msg);
}

module.exports = {
    ErrorCode,
    buildResponse,
    buildSuccessResponse,
    buildErrorResponse
}