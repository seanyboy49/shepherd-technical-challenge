import { Validate } from "../data/types";

export function getValidationObject(validationRules?: Validate[]) {
  if (!validationRules) return {};

  return validationRules.reduce((a, b) => {
    if (b.type === "required") {
      return {
        ...a,
        required: true,
      };
    }
    if (b.type === "min") {
      return {
        ...a,
        min: b.value,
      };
    }
  }, {});
}
