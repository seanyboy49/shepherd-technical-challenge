import { Validate } from "../data/types";

/**
 * Maps validation rules from an application template to a validation function
 * and then composes them into a single validated value
 */
export function getValidators(validationRules?: Validate[]) {
  if (!validationRules) return undefined;

  const validators = validationRules.reduce((a, b) => {
    if (b.type === "required") {
      return [...a, required];
    }

    if (b.type === "min") {
      return [...a, minValue(b.value)];
    }
  }, []);

  return composeValidators(...validators);
}

/**
 * A curried function that
 * 1. Takes validators as variable arity as first argument and returns a function that
 * 2. takes the input value as second argument and returns a function that
 * 3. calls each validator function on the value and reduces the output to a single value
 */
const composeValidators = (...validators: Function[]) => {
  return (value: string | number) => {
    return validators.reduce((error, validator) => {
      return error || validator(value);
    }, undefined);
  };
};

/**
 * Field level validation functions in React-Final-Form return undefined or a string
 * @see - https://final-form.org/docs/react-final-form/types/FieldProps#validate
 */
const required = (value: string | number) => {
  return value ? undefined : "Value is required";
};

/**
 * Field level validation functions in React-Final-Form return undefined or a string
 * @see - https://final-form.org/docs/react-final-form/types/FieldProps#validate
 */
const minValue = (min: number) => (value: string | number) => {
  return isNaN(value as any) || value >= min
    ? undefined
    : `Should be equal or greater than ${min}`;
};
