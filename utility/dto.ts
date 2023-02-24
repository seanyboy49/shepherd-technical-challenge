import { CompanyApplicationDto } from "../data/dto";
import { ApplicationTypeUrl } from "../data/types";

export function getDTOFromApplicationType(applicationType: ApplicationTypeUrl) {
  if (applicationType === ApplicationTypeUrl["Company application"])
    return CompanyApplicationDto;
}
