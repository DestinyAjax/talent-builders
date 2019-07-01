import { clear, decryptAndRead } from "./localStorageHelper";

import { store } from "../../index";
import { Actions } from "../actions";
import { history } from "../../utils/history";
import { EXPIRY, ENCRYPT_USER } from "../types";

export const axios = require("axios");

axios.interceptors.response.use(
    response => {
        // Do something with response data
        return response;
    },
    error => {
        if (error.response) {
            const { status, data } = error.response;

            // THIS WOULD BE CHANGED DEPENDING ON HOW THE API works tho
            if (status === 401 && data.data.message !== "Unauthenticated") {
                const decryptedToken = decryptAndRead(ENCRYPT_USER);
                const expiry = localStorage.getItem(EXPIRY);

                if (decryptedToken) {
                    const { access_token, expired } = decryptedToken;
                    if (
                        expired &&
                        new Date().getTime() < Number(expiry) + 3600000
                    ) {
                        store.dispatch(Actions.readStorage());
                    } else if (
                        expired &&
                        new Date().getTime() > Number(expiry) + 3600000
                    ) {
                        store.dispatch.signout();
                        clear();
                        setTimeout(() => {
                            window.location.reload(true);
                        }, 1000);
                    }

                    const retryOriginalRequest = new Promise(resolve => {
                        error.config.headers.Authorization =
                            "Bearer " + access_token;
                        resolve(axios(error.config));
                    });

                    return retryOriginalRequest;
                }
            }
            if (status >= 500) {
                store.dispatch.signout();
                clear();
                setTimeout(() => {
                    history.push({ pathname: "/#/500" });
                }, 1500);
            }
        }
        return Promise.reject({ error });
    }
);

export const _axios = axios.create({
    baseURL: "url would go here"
});
_axios.interceptors.request.use(
    config => {
        const decryptedToken = decryptAndRead(ENCRYPT_USER);
        if (decryptedToken) {
            const { access_token, expired } = decryptedToken;
            if (!expired) {
                config.headers["Authorization"] = `Bearer ${access_token}`;
            }
        }
        return config;
    },
    error => {
        return Promise.reject({ error });
    }
);

const getFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        _axios
            .get(path, payload)
            .then(res => {
                return resolve({ ...res });
            })
            .catch(({ response }) => {
                return reject({ response });
            });
    });
};

const delFunc = path => {
    return new Promise((resolve, reject) => {
        _axios
            .delete(path)
            .then(res => {
                return resolve({ ...res });
            })
            .catch(({ response }) => {
                return reject({ response });
            });
    });
};

const postFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        _axios
            .post(path, payload)
            .then(res => {
                return resolve({ ...res });
            })
            .catch(({ response }) => {
                return reject({ response });
            });
    });
};

const putFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        _axios
            .put(path, payload)
            .then(res => {
                return resolve({ ...res });
            })
            .catch(({ response }) => {
                return reject({ response });
            });
    });
};

export { getFunc, delFunc, postFunc, putFunc };
