import React from "react";
import { Input, Button } from "../../components";

function FormAddress({ dataProfile }) {
  const { profile, setProfile } = dataProfile;
  // console.log(profile);

  const handeOnchange = (e) => {
    return setProfile((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
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
        onChange={handeOnchange}
        value={profile?.password}
        type="password"
        title="Password"
        name="password"
        placeholder="your new password"
      />
      <Input
        onChange={handeOnchange}
        value={profile?.address}
        type="text-area"
        title="Address"
        name="address"
      />
      <Button bg="bg-green-500" title="Update Profile" />
    </div>
  );
}

export default FormAddress;
