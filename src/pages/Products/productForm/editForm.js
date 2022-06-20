import { useState } from "react";
import { Input, Button } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "../../../api/products/product";
import toast from "../../../utils/toast";
import { EditProduct } from "../../../redux/Products/action";

function EditForm({ data, setShowFromEdit, setData }) {
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState(null);

  const category = useSelector((state) => state.categories);
  const handeOnchange = (e) => {
    return setData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    const payload = new FormData();
    payload.append("name", data.name);
    payload.append("price", data.price);
    payload.append("stock", data.amount_stock);
    payload.append("category_id", data.category_id);
    if (newImage) {
      payload.append("image", newImage);
    }
    editProduct(data.id, payload)
      .then((response) => {
        toast("success", "update product success");
        dispatch(EditProduct(data.id, data));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div data-testid="edit-form">
      <div className="flex flex-row justify-between mb-5">
        <div className="font-semibold text-xl">Edit Prodcut</div>
        <Button
          onPress={() => setShowFromEdit(false)}
          bg="bg-red-500"
          title="Close"
        />
      </div>
      <div>
        <Input
          name="name"
          title="Name"
          placeholder="Product Name"
          value={data?.name}
          onChange={handeOnchange}
        />
        <Input
          name="price"
          type="number"
          title="Price"
          placeholder="product price"
          value={data?.price}
          onChange={handeOnchange}
        />
        <Input
          name="amount_stock"
          type="number"
          title="Stock"
          placeholder="Product Stock"
          value={data?.amount_stock}
          onChange={handeOnchange}
        />
        <div className="pb-3">
          <label className="font-semibold text-gray-800" htmlFor="category_id">
            Category Product
          </label>
          <select
            name="category_id"
            onChange={handeOnchange}
            className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
            id="cateogry_id"
          >
            {category?.data.map((item) => {
              return (
                <option
                  selected={data.category_id === item.id ? true : false}
                  key={item.id}
                  value={`${item.id}`}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <Input
          name="image"
          type="file"
          title="Image"
          placeholder="Product Image"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
        <div className="mt-5" />
        <Button onPress={onSubmit} bg="bg-green-500" title="Update Product" />
      </div>
    </div>
  );
}

export default EditForm;
