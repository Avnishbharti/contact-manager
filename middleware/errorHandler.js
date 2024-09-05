import { errorsObj } from "../constant.js"

export const errorHandler = (err, req, res, next) => {
  const statusCode = res?.statusCode ? res.statusCode : 500
  switch (statusCode) {
    case errorsObj.VALIDATION_ERROR:
      res?.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      })
    case errorsObj.UNAUTHORISED_ERROR:
      res?.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      })
    case errorsObj.FORBIDDEN_ERROR:
      res?.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      })
    case errorsObj.SERVER_ERROR:
      res?.json({
        title: "Server error",
        message: err.message,
        stackTrace: err.stack,
      })
    case errorsObj.NOT_FOUND:
      res?.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      })
  }
}
