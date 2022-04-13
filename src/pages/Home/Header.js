import React from "react";

function Header() {
  return (
    <div>
      <div className="flex flex-col font-bold text-3xl">
        <div className="text-gray-700 pb-2">Flyover Stickers</div>
        <div className="text-gray-600 text-sm font-normal">
          Saturday, 16 April 2022
        </div>
      </div>

      {/* categories */}
      <div className="mt-8 mb-8">
        <div className="flex flex-row text-gray-500 ">
          <div className="cursor-pointer font-bold text-blue-500 pr-12 underline underline-offset-4">
            All
          </div>
          <div className="cursor-pointer pr-12">Sticker Material</div>
          <div className="cursor-pointer pr-12">Sticker Cutting</div>
          <div className="cursor-pointer pr-12">Accessories</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
