/* eslint-disable no-unsafe-finally */
const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) {
      throw new Error("Please reload the app!");
    }
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;
  }
};
export default apiRequest;
