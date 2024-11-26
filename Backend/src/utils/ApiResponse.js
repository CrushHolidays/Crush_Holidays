class ApiResponse {
    constructor(statusCode, data, message = "Success") {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
      this.success = statusCode < 400;
    }
  
    // Static helper for success responses
    static success(message = "Success", data = null) {
      return {
        success: true,
        message,
        data,
      };
    }
  
    // Static helper for error responses
    static error(message = "Error", statusCode = 500, data = null) {
      return {
        success: false,
        message,
        statusCode,
        data,
      };
    }
  }
  
  export { ApiResponse };
  