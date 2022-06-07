import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import FormProfile from "./FormProfile";
import Address from "./Address";
import Header from "./Header";
import { setAuthorizationHeader } from "../../api/axiosConfig";
import users from "../../api/users";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
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
            phone_number: data?.phone_number,
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
        <div className="w-full pt-12 px-3 lg:px-16 mb-16">
          <Header />
          <div className="flex flex-col lg:flex-row mt-5">
            <FormProfile dataProfile={{ profile, setProfile }} />
            <div className="w-full lg:w-3/4 lg:mx-3 mt-3 lg:mt-0">
              <Address />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
