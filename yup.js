import * as Yup from "yup";

const stringValidation = Yup.string().strict().min(3).max(10);
const numberValidation = Yup.number().min(10).max(99).required();
const emailValidation = Yup.string().email();
const userObjectValidation = Yup.object().shape({
  name: Yup.string().strict().required().min(3),
  email: Yup.string().email().required(),
  phone: Yup.string().optional().length(10),
});

let validation = stringValidation.validateSync("hello");
console.log(validation);

validation = numberValidation.validateSync(10);
console.log(validation);

validation = emailValidation.validateSync("manjot@gmail.com");
console.log(validation);

validation = userObjectValidation.validateSync(
  {
    name: "Jo",
    email: "jo@jojo.",
    phone: 1232,
  },
  {
    abortEarly: false,
  }
);
console.log(validation);
