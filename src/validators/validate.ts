import { ValidationRules, ValidationResult, Rules } from "@custom-types/validation";

export function validate<ValidationData extends Record<string, any>>(
  data: ValidationData,
  dataRules: ValidationRules<Partial<ValidationData>>
): ValidationResult {
  // storing validation message
  const validationErrors: Record<string, string> = {};
  let containsInvalidValues = false;
  // validation values
  for (const [field, rules] of Object.entries<Rules>(dataRules)) {
    const value = data[field as keyof ValidationData];
    const validationError = validateSingleValue(value, rules);

    if (validationError) {
      validationErrors[field] = validationError;
      containsInvalidValues = true;
    }
  }

  if (!containsInvalidValues) return { success: true };

  return { success: false, errors: validationErrors };
}

function validateSingleValue(value: any, rules: Rules): string | undefined {
  if (rules.required) {
    const validationError = valueExists(value);
    if (validationError) return validationError;
  }

  if (rules.min !== undefined) {
    const validationError = checkMin(value, rules.min);
    if (validationError) return validationError;
  }

  if (rules.max !== undefined) {
    const validationError = checkMax(value, rules.max);
    if (validationError) return validationError;
  }

  if (rules.eq !== undefined) {
    const validationError = checkEquals(value, rules.eq);
    if (validationError) return validationError;
  }

  if (rules.nteq !== undefined) {
    const validationError = checkNotEquals(value, rules.nteq);
    if (validationError) return validationError;
  }
}

function valueExists(value: any): string | undefined {
  if (typeof value == "string" && value.trim().length > 0) return;
  return "Value is required";
}

function checkMin(value: any, min: number): string | undefined {
  if (typeof value == "string" && value.length < min) {
    return `Value must contain at least ${min} characters.`;
  }

  if (typeof value == "number" && value < min) {
    return `Value must be greater than or equal to ${min}.`;
  }

  if (Array.isArray(value) && value.length < min) {
    return `Value must contain atleast ${min} elements.`;
  }
}

function checkMax(value: any, max: number): string | undefined {
  if (typeof value == "string" && value.length > max) {
    return `Value must contain at most ${max} characters.`;
  }

  if (typeof value == "number" && value > max) {
    return `Value must be less than or equal to ${max}.`;
  }

  if (Array.isArray(value) && value.length > max) {
    return `Value must contain at most ${max} elements.`;
  }
}

function checkEquals(value: any, equals: string | number) {
  if (value != equals) return `Value must be equals to ${equals}`;
}

function checkNotEquals(value: any, notEquals: string | number) {
  if (value == notEquals) return `Value must not be equals to ${notEquals}`;
}
