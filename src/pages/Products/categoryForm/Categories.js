import { Button } from "../../../components";

function Categories({ categories }) {
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
                <tr
                  key={index}
                  className="text-gray-700 hover:bg-gray-200 hover:cursor-pointer"
                >
                  <td className="py-4 border-b w-full flex flex-row justify-between">
                    {category.name}
                    <div>
                      <Button bg="bg-red-400" title="Delete" />
                      <Button title="Edit" />
                    </div>
                  </td>
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
