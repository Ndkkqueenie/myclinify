import axios from 'axios';

const appKey = process.env.REACT_APP_APP_KEY;
const apIKey = process.env.REACT_APP_API_KEY;

export const sendOtp = async (userPhoneNumber: string | number) => {
  try {
    const otpResponse = await axios.post(
      `https://api.ringcaptcha.com/${appKey}/code/sms?phone=${userPhoneNumber}&api_key=${apIKey}`,
    );
    return otpResponse.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const verifyOtp = async (code: string, phone: string, token: string) => {
  try {
    const verifiedOtpResponse = await axios.post(
      `https://api.ringcaptcha.com/${appKey}/verify?phone=${phone}&code=${code}&token=${token}&api_key=${apIKey}`,
    );
    return verifiedOtpResponse.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
