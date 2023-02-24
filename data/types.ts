export type ApplicationTemplate = {
  name: string;
  fields: Fields;
};

export type Field = Section | TextNumberURL | Checkbox | Select;
export type Fields = Field[];

/**
 * A recursive component of n-depth
 */
export type Section = {
  component: "section";
  name: string;
  title: string;
  description?: string;
  fields: Fields;
};

export type TextNumberURL = {
  component: "text" | "number" | "url";
  name: string;
  label: string;
  validate?: Validate[];
};

export type Checkbox = {
  component: "checkbox";
  name: string;
  label: string;
};

export type Select = {
  component: "select";
  name: string;
  label: string;
  options: string[];
  validate: Validate[];
};

export type Validate =
  | {
      type: "required";
    }
  | {
      type: "min";
      value: number;
    };

export enum URLs {
  "Company application" = "company-applications",
  "Employee application" = "employee-applications",
  "Auto application" = "auto-applications",
}
