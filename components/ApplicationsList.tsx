import { Auto, Company, Employee } from "@prisma/client";
import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { ApplicationTypeLabel, ApplicationTypeUrl } from "../data/types";
import { StyledAnchor } from "./Styled";

interface IApplicationsList {
  applications: Array<Company | Auto | Employee>;
  applicationType: ApplicationTypeUrl;
}
const ApplicationsList = ({
  applications,
  applicationType,
}: IApplicationsList) => {
  if (!applications.length) return null;

  return (
    <>
      <Typography variant="h5">
        {ApplicationTypeLabel[applicationType]}
      </Typography>
      {applications.map((application) => {
        return (
          <ListItem key={application.id}>
            <ListItemButton>
              <Link href={`${applicationType}/${application.id}`}>
                <StyledAnchor>{application.id}</StyledAnchor>
              </Link>
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default ApplicationsList;
