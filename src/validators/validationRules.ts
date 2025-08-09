import { ValidationRules } from "@/types/validation";

const  VALIDATION_RULES = {
  Page: {
    name: { required: true, min: 3, max: 20 },
    slug: { required: true, min: 3, max: 100 },
  },
};

export default VALIDATION_RULES;