import { ValidationError } from "yup";

export const isValidationError = (error: unknown): error is ValidationError => {
  if (typeof error === "object" && error && "inner" in error) return true;
  return false;
};
