import { EXPIRY } from "../arsVariables";
const CryptoJS = require("crypto-js");
const { localStorage } = window;
const secret = "talentbuilders.app.mostgsolutions";

const storer = (key, value) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(value), secret);
    return localStorage.setItem(key, ciphertext);
};

export const encryptAndStore = (key, value, expiry = false) => {
    if (expiry === true) {
        localStorage.setItem(
            EXPIRY,
            new Date()
                .setTime(new Date().getTime() + value.expires_in)
                .toString()
        );

        storer(key, value);
    }
    storer(key, value);
};

export const decryptAndRead = key => {
    const expiry = localStorage.getItem(EXPIRY);
    const fromStorage = localStorage.getItem(key);
    if (
        fromStorage !== null &&
        fromStorage !== undefined &&
        fromStorage !== "" &&
        new Date().getTime() > expiry
    ) {
        const bytes = CryptoJS.AES.decrypt(fromStorage.toString(), secret);
        const response = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return { ...response, expired: true };
    } else if (
        fromStorage !== null &&
        fromStorage !== undefined &&
        fromStorage !== "" &&
        new Date().getTime() < expiry
    ) {
        const bytes = CryptoJS.AES.decrypt(fromStorage.toString(), secret);
        const response = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return { ...response, expired: false };
    } else {
        return null;
    }
};

export const clear = () => {
    localStorage.clear();
    return null;
};
