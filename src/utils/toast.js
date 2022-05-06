import { toast } from "react-toastify";

export default function toastAlert(type = "success", message, attribute) {
  const defaultAttribute = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  return toast[type](message, { ...defaultAttribute, ...attribute });
}
