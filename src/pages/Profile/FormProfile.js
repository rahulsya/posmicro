import React from "react";
import { Input, Button } from "../../components";

function FormProfile({ dataProfile }) {
  const { profile, setProfile } = dataProfile;
  // console.log(profile);

  const handeOnchange = (e) => {
    return setProfile((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white px-4 py-4 rounded shadow w-full lg:w-1/2">
      <div className="text-xl pb-4 font-bold">Update Profile</div>
      <hr className="pb-3" />
      <div className="flex flex-row justify-between">
        <Input
          onChange={handeOnchange}
          value={profile?.name}
          title="Name"
          name="name"
        />
        <div className="px-2"> </div>
        <Input
          onChange={handeOnchange}
          value={profile?.email}
          title="Email"
          name="email"
        />
      </div>
      <Input
        type="number"
        onChange={handeOnchange}
        value={profile?.phone_number}
        title="Phone Number"
        name="phone_number"
      />
      <Input
        onChange={handeOnchange}
        value={profile?.password}
        type="password"
        title="Password"
        name="password"
        placeholder="your new password"
      />
      <Button bg="bg-green-500" title="Update Profile" />
    </div>
  );
}

export default FormProfile;
