const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Error Not Found",
                message: err.message,
                stackTrace: err.stack
            });

            break;
        
        case constants.NOT_FOUND:
            res.json({
                title: "Failed To Validate, Try Again",
                message: err.message,
                stackTrace: err.stack
            });

            break;
            
        case constants.UNAUTHORIZED:
            res.json({
                    title: "Failed To Validate, Try Again",
                    message: err.message,
                    stackTrace: err.stack
            });
                
            break;
                
        case constants.FORBIDDEN:
            res.json({
                      title: "Failed To Validate, Try Again",
                        message: err.message,
                        stackTrace: err.stack
                    });
            
            break;
        
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
        
            
        default:
            console.log("Free Of Errors!");
            break;
    }
    

};

module.exports = errorHandler;