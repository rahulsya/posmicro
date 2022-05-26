import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ILcompleted } from "../../assets/illustration/ILcompleted.svg";

function CompletedCard({ headerTitle }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full container mx-auto pt-12 px-3 lg:px-16 mb-5">
        <Header title={headerTitle}></Header>
        <div className="flex flex-col mt-5 justify-center items-center">
          <div className="py-5 px-12 border flex flex-col items-center">
            <ILcompleted />
            <div className="font-semibold text-xl">Order Is Completed!!</div>
            <Button
              onPress={() => navigate("/order-history")}
              bg="bg-green-500 mt-5"
              title="Check Order"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedCard;
