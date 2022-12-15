import { defineRule } from "vee-validate";
defineRule("required", (value) => {
  if (!value || !value.length) {
    return "ველის არჩევა/შევსება სავალდებულოა";
  }

  return true;
});
defineRule("length", (value, [fieldName, min, max]) => {
  if (value.length < min) {
    return `${fieldName} ველი უნდა შედგებოდეს მინიმუმ ${min} სიმბოლოსგან `;
  }
  if (value.length > max) {
    return `${fieldName} ველი უნდა შედგებოდეს მინიმუმ ${max} სიმბოლოსგან `;
  }
  return true;
});
defineRule("alpha", (value) => {
  const regex = /^[A-Za-zა-ჰ]+$/;
  if (!regex.test(value)) {
    return "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
  }
  return true;
});
defineRule("numeric", (value) => {
  const regex = /^\d+$/;
  if (!regex.test(value)) {
    return "სახელის ველი უნდა შეიცავდეს მხოლოდ რიცხვებს";
  }
  return true;
});
defineRule("email", (value) => {
  const regex = /^[A-Z0-9._%+-]+@[redberry.ge]+\.[A-Z]{2,4}$/i;

  if (!regex.test(value)) {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
  return true;
});
defineRule("date", (value) => {
  const regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  if (!regex.test(value)) {
    return "გთხოვთ შეიყვანოთ სწორი ფორმატით. დდ/თთ/წწწწ";
  }
  return true;
});
