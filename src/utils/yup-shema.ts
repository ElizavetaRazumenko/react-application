import * as Yup from "yup";

const getYupSchema = (password: string, countries: string[]) => {
  return Yup.object().shape({
    name: Yup.string()
      .test(
        "is the first letter is capitalized",
        "The first letter should be capitalized",
        (value) => (value ? value[0].toUpperCase() === value[0] : true),
      )
      .required("Name is required field"),
    age: Yup.number()
      .min(0, "Age can't be negative")
      .required("Age is required field"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required field"),
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
          value
            ? value.match(/[[!@#$&*"'./|/\\+^`~_=]/)
              ? true
              : false
            : true,
      )
      .required("Password is required field"),
    pass2: Yup.string()
      .test(
        "passwords matching",
        "Passwords must match",
        (value) => value === password,
      )
      .required("Password is required field"),
    country: Yup.string()
      .test(
        "country must be selected from the list",
        "Country must be selected from the list",
        (value) =>
          Boolean(
            countries.find(
              (country) =>
                country.toLowerCase() === value?.toLocaleLowerCase().trim(),
            ),
          ),
      )
      .required("Country is required field"),
    isAgree: Yup.boolean().isTrue("You must confirm acceptance"),
    image: Yup.mixed().test(
      "File should be select",
      "Image file should be select",
      (obj) => {
        return Object.keys(obj as FileList).length !== 0;
      },
    ),
  });
};

export default getYupSchema;
