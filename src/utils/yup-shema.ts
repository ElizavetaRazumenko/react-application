import * as Yup from "yup";
import { countryList } from "./country-list";

const yupSchema = Yup.object().shape({
  isAgree: Yup.boolean().isTrue("You must confirm acceptance"),
  image: Yup.mixed().test(
    "File should be select",
    "Image file should be select",
    (obj) => {
      return Object.keys(obj as FileList).length !== 0;
    },
  ),
  isMale: Yup.boolean(),
  country: Yup.string()
    .test(
      "country must be selected from the list",
      "Country must be selected from the list",
      (value) =>
        Boolean(
          countryList.find(
            (country) =>
              country.toLowerCase() === value?.toLocaleLowerCase().trim(),
          ),
        ),
    )
    .required("Country is required field"),
  pass2: Yup.string()
    .when("pass1", (pass1, schema) => {
      return schema.test({
        test: (pass2) => String(pass1) === pass2,
        message: "Password does not match",
      });
    })
    .required("Password is required field"),
  pass1: Yup.string()
    .test(
      "Password must contain at least one capital letter",
      "Password must contain at least one capital letter",
      (value) => (value ? (value.match(/[A-Z]/) ? true : false) : true),
    )
    .test(
      "Password must contain at least one lowercase letter",
      "Password must contain at least one lowercase letter",
      (value) => (value ? (value.match(/[a-z]/) ? true : false) : true),
    )
    .test(
      "Password must contain at least one digit",
      "Password must contain at least one digit",
      (value) => (value ? (value.match(/\d/) ? true : false) : true),
    )
    .test(
      "Password must contain at least one special character",
      "Password must contain at least one special character",
      (value) =>
        value ? (value.match(/[[!@#$&*"'./|/\\+^`~_=]/) ? true : false) : true,
    )
    .required("Password is required field"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required field"),
  age: Yup.string()
    .test(
      "Enter age as a number",
      "Enter age as a number",
      (value) => !isNaN(Number(value)),
    )
    .test("Age can't be negative", "Age can't be negative", (value) =>
      Number(value) > -1 ? true : false,
    )
    .required("Age is required field"),
  name: Yup.string()
    .test(
      "is the first letter is capitalized",
      "The first letter should be capitalized",
      (value) => (value ? value[0].toUpperCase() === value[0] : true),
    )
    .required("Name is required field"),
});

export default yupSchema;

export const yupSchemaForHookForm = Yup.object().shape({
  isAgree: Yup.string().test(
    "You must confirm acceptance",
    "You must confirm acceptance",
    (value) => value === "yes",
  ),
  image: Yup.mixed().test(
    "File should be select",
    "Image file should be select",
    (obj) => {
      return Object.keys(obj as FileList).length !== 0;
    },
  ),
  isMale: Yup.string(),
  country: Yup.string().required("Country is required field"),
  pass2: Yup.string()
    .when("pass1", (pass1, schema) => {
      return schema.test({
        test: (pass2) => String(pass1) === pass2,
        message: "Password does not match",
      });
    })
    .required("Password is required field"),
  pass1: Yup.string()
    .test(
      "Password must contain at least one capital letter",
      "Password must contain at least one capital letter",
      (value) => (value ? (value.match(/[A-Z]/) ? true : false) : true),
    )
    .test(
      "Password must contain at least one lowercase letter",
      "Password must contain at least one lowercase letter",
      (value) => (value ? (value.match(/[a-z]/) ? true : false) : true),
    )
    .test(
      "Password must contain at least one digit",
      "Password must contain at least one digit",
      (value) => (value ? (value.match(/\d/) ? true : false) : true),
    )
    .test(
      "Password must contain at least one special character",
      "Password must contain at least one special character",
      (value) =>
        value ? (value.match(/[[!@#$&*"'./|/\\+^`~_=]/) ? true : false) : true,
    )
    .required("Password is required field"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required field"),
  age: Yup.string()
    .test(
      "Enter age as a number",
      "Enter age as a number",
      (value) => !isNaN(Number(value)),
    )
    .test("Age can't be negative", "Age can't be negative", (value) =>
      Number(value) > -1 ? true : false,
    )
    .required("Age is required field"),
  name: Yup.string()
    .test(
      "is the first letter is capitalized",
      "The first letter should be capitalized",
      (value) => (value ? value[0].toUpperCase() === value[0] : true),
    )
    .required("Name is required field"),
});
