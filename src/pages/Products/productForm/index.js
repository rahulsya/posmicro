import InputForm from "./InputForm";
import EditForm from "./editForm";

function ProductForm({ inputState, editState }) {
  const { showFormInput, setShowFormInput, setProducts } = inputState;
  const { showFormEdit, setShowFromEdit, dataProduct, setDataProduct } =
    editState;

  return (
    <>
      <div>
        {showFormInput && (
          <InputForm
            setDataProduct={setProducts}
            setFormInput={setShowFormInput}
          />
        )}
        {showFormEdit && (
          <EditForm
            setShowFromEdit={setShowFromEdit}
            setData={setDataProduct}
            data={dataProduct}
          />
        )}
      </div>
    </>
  );
}

export default ProductForm;
