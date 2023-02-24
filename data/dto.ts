export type CompanyApplication = {
  company_name: string;
  ceo: string;
  website?: string;
  address1: string;
  address2?: string;
  city?: string;
  is_california_relevant?: boolean;
  total_compensation: string;
};
export class CompanyApplicationDto {
  company_name: string;
  ceo: string;
  website?: string;
  address1: string;
  address2?: string;
  city?: string;
  is_california_relevant?: boolean;
  total_compensation: number;

  constructor(props: CompanyApplication) {
    this.company_name = props.company_name;
    this.ceo = props.ceo;
    this.website = props.website || undefined;
    this.address1 = props.address1;
    this.address2 = props.address2 || undefined;
    this.city = props.city || undefined;
    this.is_california_relevant = props.is_california_relevant || undefined;
    this.total_compensation = parseInt(props.total_compensation, 10);
  }
}

export type EmployeeApplication = {
  applicant_name: string;
  applicant_title: string;
};

export class EmployeeApplicationDto {
  applicant_name: string;
  applicant_title: string;

  constructor(props: EmployeeApplication) {
    this.applicant_name = props.applicant_name;
    this.applicant_title = props.applicant_title;
  }
}

export type AutoApplication = {
  vin: string;
  make: string;
};

export class AutoApplicationDto {
  vin: string;
  make: string;

  constructor(props: AutoApplication) {
    this.vin = props.vin;
    this.make = props.make;
  }
}

export type ApplicationType =
  | CompanyApplication
  | EmployeeApplication
  | AutoApplication;
