import { Input, Button } from "../../../components";
import { useDispatch } from "react-redux";
import { UpdateCategory } from "../../../redux/Categories/action";
import toast from "../../../utils/toast";

function EditForm({ dataEditState }) {
  const { dataCategory, setShowEditCategory, setDataCategory } = dataEditState;

  const dispatch = useDispatch();

  const handeOnchange = (e) => {
    return setDataCategory((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    if (dataCategory.name == "") {
      return toast("error", "Category Name is Required");
    }
    dispatch(UpdateCategory(dataCategory.id, dataCategory.name));
  };

  return (
    <>
      <div className="mt-5 flex justify-between font-semibold">
        <div>Edit Category</div>
        <div
          onClick={() => setShowEditCategory(false)}
          className="cursor-pointer underline"
        >
          Cancel{" "}
        </div>
      </div>

      <div className="mt-4">
        <Input
          name="name"
          title="Category Name"
          placeholder="Category Name"
          value={dataCategory?.name}
          onChange={handeOnchange}
        />
        <Button onPress={onSubmit} bg="bg-green-500" title="Edit Category " />
      </div>
    </>
  );
}

export default EditForm;
