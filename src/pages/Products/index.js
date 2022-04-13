import React from "react";
import { Navbar } from "../../components";

function Products() {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-16 container mx-auto">
          <div className="text-2xl">Product Page</div>
        </div>
        <div className="w-full pt-12 px-16 container mx-auto">
          <div className="text-2xl">Product Page</div>
        </div>
        <div className="w-full pt-12 px-16 container mx-auto">
          <div className="text-2xl">Product Page</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
