import axios, { setAuthorizationHeader } from "./axiosConfig";
import users from "./users";
import AlertToast from "../utils/toast";

export default function ErrorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      //   console.log(error.response);
      const origialRequest = error.config;
      if (error.response.status === 500) {
        message = "Something went terribly wrong";
      } else if (
        error.response.status === 403 &&
        origialRequest.url === "/refresh_token"
      ) {
        AlertToast("error", "Session Token Is Expired");
        window.location.href = "/login";
        localStorage.removeItem("tokens");
        return Promise.reject(error);
      } else if (error.response.status === 403 && !origialRequest._retry) {
        // console.log(origialRequest);
        origialRequest._retry = true;
        const session = localStorage["tokens"]
          ? JSON.parse(localStorage["tokens"])
          : null;
        return users
          .refresh({
            refresh_token: session.refresh_token,
            email: session.email,
          })
          .then((response) => {
            if (response) {
              setAuthorizationHeader(response.token);
              localStorage.setItem(
                "tokens",
                JSON.stringify({
                  ...session,
                  token: response.token,
                })
              );
              origialRequest.headers.authorization = response.token;

              return axios(origialRequest);
            } else {
              window.location.href = "/login";
              localStorage.removeItem("tokens");
            }
          })
          .catch((err) => {
            console.log(err.response);
          });
      } else {
        message = error.response.data.message;
        // console.log(error.response.data.message);
      }

      if (typeof message === "string") AlertToast("error", "something errors");

      return Promise.reject(error);
    }
  }
}
