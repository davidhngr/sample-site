import cryptoJs from "crypto-js";

export const setCookie = (email, password) => {
  const date = new Date(9999, 0, 1).toUTCString();

  document.cookie = `email=${email}; expires=${date}`;
  document.cookie = `password=${password}; expires=${date}`;
  document.cookie = `remember=true; expires=${date}`;
};

export const getCookie = (key) => {
  const cookie = document.cookie;
  const part = cookie.replace(/\s/g, "").split(";");
  const value = part.find((element) => element.startsWith(key));
  let result;

  if (value) {
    result = value.replace(`${key}=`, "");
  }

  // console.log(result);
  return result;
};

export const getRemember = () => {
  const date = new Date(9999, 0, 1).toUTCString();

  if (getCookie("email") && getCookie("password")) {
    document.cookie = `remember=true; expires=${date}`;
  } else {
    document.cookie = `remember=false; expires=${date}`;
  }

  const cookie = document.cookie;
  const part = cookie.replace(/\s/g, "").split(";");
  const value = part.find((element) => element.startsWith("remember"));
  const result = value.replace("remember=", "");

  // console.log(result);
  if (result === "true") {
    return true;
  } else {
    return false;
  }
};

export const encryptText = (text) => {
  const ciphertext = cryptoJs.AES.encrypt(
    text,
    process.env.REACT_APP_ENCRYPTION_KEY
  ).toString();

  // console.log(ciphertext);
  return ciphertext;
};

export const decryptText = (text) => {
  const bytes = cryptoJs.AES.decrypt(
    text,
    process.env.REACT_APP_ENCRYPTION_KEY
  );
  const decryptedText = bytes.toString(cryptoJs.enc.Utf8);

  // console.log(decryptedText);
  return decryptedText;
};
