class SuccessHandler {
    static sendSuccessResponse(res, message, data) {
      let responseData = {
        success: true,
        message: message,
      };
  
      if (data !== undefined) {
        responseData.data = data;
      }
  
      return res.status(200).json(responseData);
    }
  }
export default SuccessHandler;
  