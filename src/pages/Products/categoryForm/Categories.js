import React from "react";

const categories = [
  {
    id: 1,
    name: "Cutting Sticker",
  },
  {
    id: 2,
    name: "Material Sticker",
  },
  {
    id: 3,
    name: "Material Sticker",
  },
];

function Categories() {
  return (
    <>
      <div className="mt-8">
        <table className="w-full table-auto">
          <thead>
            <tr className="font-semibold">
              <td className="border-b pb-3">Data Categories</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              return (
                <tr className="text-gray-700">
                  <td className="py-4 border-b">{category.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Categories;
