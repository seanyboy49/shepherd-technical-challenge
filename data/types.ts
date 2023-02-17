export type Application = {
  name: string;
  fields: Fields;
};

export type Fields = Array<
  SectionComponent | ValidatedComponents | CheckboxComponent | SelectComponent
>;

type SectionComponent = {
  component: "section";
  name: string;
  title: string;
  description: string;
  fields: Fields;
};

type ValidatedComponents = {
  component: "text" | "select" | "url" | "checkbox" | "number";
  name: string;
  label: string;
  validate: Validate[];
};

type CheckboxComponent = {
  component: "checkbox";
  name: string;
  label: string;
};

type SelectComponent = {
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
