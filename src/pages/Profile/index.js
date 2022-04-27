import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import FormAddress from "./FormAddress";
import Header from "./Header";
import { setAuthorizationHeader } from "../../api/axiosConfig";
import users from "../../api/users";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });
  useEffect(() => {
    let session = null;
    if (localStorage.getItem("tokens")) {
      session = JSON.parse(localStorage.getItem("tokens"));
      setAuthorizationHeader(session.token);

      users
        .details()
        .then((response) => {
          const { data } = response;
          setProfile({
            ...profile,
            name: data?.name,
            email: data?.email,
            address: data?.address,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-3 lg:px-16">
          <Header />
          <div className="mt-5 w-full lg:w-full xl:w-1/2 bg-white shadow-lg rounded-lg py-4 px-3">
            <FormAddress dataProfile={{ profile, setProfile }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
