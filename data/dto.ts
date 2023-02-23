export type CompanyApplication = {
  id?: string;
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
  id?: string;
  company_name: string;
  ceo: string;
  website?: string;
  address1: string;
  address2?: string;
  city?: string;
  is_california_relevant?: boolean;
  total_compensation: number;

  constructor(props: CompanyApplication) {
    this.id = props.id || undefined;
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
