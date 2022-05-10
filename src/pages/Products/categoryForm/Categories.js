import { Button } from "../../../components";

import { DeleteCategory } from "../../../redux/Categories/action";
import { useDispatch } from "react-redux";

function Categories({ categories, dataEditState }) {
  const dispatch = useDispatch();
  const { setShowEditCategory, setDataCategory } = dataEditState;
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
                      <Button
                        onPress={() => dispatch(DeleteCategory(category.id))}
                        bg="bg-red-400"
                        title="Delete"
                      />
                      <Button
                        onPress={() => {
                          setShowEditCategory(true);
                          setDataCategory(category);
                        }}
                        title="Edit"
                      />
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
