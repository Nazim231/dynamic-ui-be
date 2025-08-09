export type Rules = {
  required?: boolean;
  min?: number;
  max?: number;
  eq?: string | number;
  nteq?: string | number;
};

export type ValidationRules<T> = { [K in keyof T]: Rules };

export type ValidationResult =
  | { success: true }
  | { success: false; errors: Record<string, string> };
