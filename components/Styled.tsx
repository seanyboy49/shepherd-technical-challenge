import styled from "@emotion/styled";
import theme from "../config/theme";

export const StyledAnchor = styled("a")`
  font-weight: bold;
  text-decoration: underline;
  color: ${theme.palette.primary.main};
  cursor: pointer;
`;
