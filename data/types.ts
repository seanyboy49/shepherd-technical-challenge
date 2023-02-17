export type ApplicationTemplate = {
  name: string;
  fields: Fields;
};

export type Fields = Array<Section | TextNumber | URL | Checkbox | Select>;

/**
 * A recursive component of n-depth
 */
type Section = {
  component: "section";
  name: string;
  title: string;
  description?: string;
  fields: Fields;
};

type TextNumber = {
  component: "text" | "number";
  name: string;
  label: string;
  validate?: Validate[];
};

type URL = {
  component: "url";
  name: string;
  label: string;
};

type Checkbox = {
  component: "checkbox";
  name: string;
  label: string;
};

type Select = {
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
