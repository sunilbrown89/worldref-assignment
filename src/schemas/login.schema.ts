import { FormikHelpers } from "formik";
import * as Yup from "yup";

const loginSchema = [
  {
    key: "1",
    label: "Name",
    placeholder: "Name is required",
    name: "name",
    type: "text",
    validationSchema: Yup.string().required("Name is required"),
    required: true,
    initialValue: "",
    className: "col-span-12",
  },
  {
    key: "2",
    label: "Email ID",
    placeholder: "Enter Email ID",
    name: "email",
    type: "text",
    validationSchema: Yup.string().email().required("EmailID is required"),
    required: true,
    initialValue: "",
    className: "col-span-12",
  },
  {
    key: "3",
    name: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true,
    type: "password",
    validationSchema: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long")
      .trim(),
    initialValue: "",
    className: "col-span-12",
  },
];

const loginInitialValues: { [key: string]: string } = loginSchema.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.initialValue;
    return accumulator;
  },
  {} as { [key: string]: string }
);

const loginValidationSchema: { [key: string]: Yup.StringSchema<string> } =
  loginSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {} as { [key: string]: Yup.StringSchema<string> });

type loginValueType =
  | {
      name: string;
      email: string;
      password: string;
    }
  | {
      [key: string]: string;
    };
type formikProps = FormikHelpers<{ [key: string]: string }>;
export { loginSchema, loginInitialValues, loginValidationSchema };
export type { loginValueType, formikProps };
