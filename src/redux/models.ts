export interface ReactFormState {
  name: string;
  age: string;
  email: string;
  password: string;
  country: string;
  isMale: boolean;
  isFemale: boolean;
  isAgree: boolean;
  isDesagree: boolean;
}

export interface CustomFormState {
  formData: ReactFormState;
  isFormFilled: boolean;
  dataBase64: string | ArrayBuffer | null;
}
