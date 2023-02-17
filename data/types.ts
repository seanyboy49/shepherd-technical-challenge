export type ApplicationTemplate = {
  name: string;
  fields: Fields;
};

export type Field = Section | TextNumber | URL | Checkbox | Select;
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

export type TextNumber = {
  component: "text" | "number";
  name: string;
  label: string;
  validate?: Validate[];
};

export type URL = {
  component: "url";
  name: string;
  label: string;
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
