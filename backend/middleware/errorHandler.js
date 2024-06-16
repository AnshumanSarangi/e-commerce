const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
  
    switch (statusCode) {
      case 400:
        res.json({
          title: "Validation Failed",
          message: err.message,
          stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
        });
        break;
  
      case 401:
        res.json({
          title: "Unauthorized",
          message: err.message,
          stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
        });
        break;
  
      case 403:
        res.json({
          title: "Forbidden",
          message: err.message,
          stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
        });
        break;
  
      case 404:
        res.json({
          title: "Not Found",
          message: err.message,
          stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
        });
        break;
  
      case 500:
        res.json({
          title: "Server Error",
          message: err.message,
          stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
        });
        break;
  
      default:
        res.json({
          title: "Error",
          message: err.message,
          stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
        });
        break;
    }
  };
  
  module.exports = errorHandler;
  