import { clearBasket } from "../redux/basket";
export function changeTitle(title) {
  document.title = title;
}

export function paymentUtility(form, basket) {
  const data = {
    form,
    basket,
  };
  return data;
}
