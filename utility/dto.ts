import {
  CompanyApplication,
  ApplicationType,
  EmployeeApplication,
  AutoApplication,
  AutoApplicationDto,
  CompanyApplicationDto,
  EmployeeApplicationDto,
} from "../data/dto";
import { ApplicationTypeUrl } from "../data/types";

export function getApplicationBody(
  applicationType: ApplicationTypeUrl,
  data: ApplicationType
) {
  if (applicationType === ApplicationTypeUrl["Company application"])
    return new CompanyApplicationDto(data as CompanyApplication);

  if (applicationType === ApplicationTypeUrl["Employee application"])
    return new EmployeeApplicationDto(data as EmployeeApplication);

  if (applicationType === ApplicationTypeUrl["Auto application"])
    return new AutoApplicationDto(data as AutoApplication);
}
