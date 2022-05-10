import axios, { setAuthorizationHeader } from "./axiosConfig";
import users from "./users";

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      //   console.log(error.response);
      const origialRequest = error.config;
      if (error.response.status === 500)
        message = "Something went terribly wrong";
      else if (error.response.status === 403 && !origialRequest._retry) {
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
          });
      } else {
        message = error.response.data.message;
        console.log(error.response.data.message);
      }

      if (typeof message === "string") console.log("error alert toast here");

      return Promise.reject(error);
    }
  }
}
