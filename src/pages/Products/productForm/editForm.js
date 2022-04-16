import { Input, Button } from "../../../components";

function EditForm({ data, setShowFromEdit, setData }) {
  // console.log(data);
  const handeOnchange = (e) => {
    return setData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="flex flex-row justify-between mb-5">
        <div className="font-semibold text-xl">Edit Product Prodcut</div>
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
          name="stock"
          type="number"
          title="Stock"
          placeholder="Product Stock"
          value={data?.stock}
          onChange={handeOnchange}
        />
        <Input
          name="image"
          type="file"
          title="Image"
          placeholder="Product Image"
        />
        <div className="mt-5" />
        <Button bg="bg-green-500" title="Update Product" />
      </div>
    </>
  );
}

export default EditForm;
