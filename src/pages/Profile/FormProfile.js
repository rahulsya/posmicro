import React, { useState } from "react";
import { Input, Button } from "../../components";
import apiuser from "../../api/users";
import AlertToast from "../../utils/toast";
// import { useDispatch } from "react-redux";
// import { setAuth } from "../../redux/Auth/actions";

function FormProfile({ dataProfile }) {
  // const dispatch = useDispatch();
  const { profile, setProfile } = dataProfile;
  const [tempData, setTempData] = useState({});

  const handeOnchange = (e) => {
    setProfile((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    setTempData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const updateProfile = () => {
    apiuser
      .update(tempData)
      .then((response) => {
        AlertToast("success", "Data profile updated");
        if (response?.data?.email) {
          // dispatch(setAuth({ email: response?.data?.email }));
          // localStorage.setItem('tokens')
          // console.log(response?.data?.email);
        }
      })
      .catch((err) => {
        // console.log(err.response);
        AlertToast("error", err?.response?.data?.message);
      });
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
      <Button
        onPress={() => updateProfile()}
        bg="bg-green-500"
        title="Update Profile"
      />
    </div>
  );
}

export default FormProfile;
