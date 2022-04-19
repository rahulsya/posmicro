import React from "react";
import { Navbar } from "../../components";
import Header from "./Header";

function Profile() {
  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-5 container mx-auto">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default Profile;
