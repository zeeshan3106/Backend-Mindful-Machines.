import SendEmail from './emailservices.js';

const SendEmailFun = async (to, subject, text, html) => {
  const result = await SendEmail(to, subject, text, html);
  if (!result.success) {
    console.error('SendEmailFun failed:', result.error);
    return false;
  }
  return true;
};

export default SendEmailFun;
