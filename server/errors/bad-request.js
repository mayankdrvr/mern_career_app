import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

// creating custom error status-code:
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST; // 400
  }
}

export default BadRequestError;
