import React from "react";
import Link from "next/link";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import Logo from "./SheperdLogo";
import { StyledAnchor } from "./Styled";

const Header: React.FC = () => {
  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        backgroundColor: "text.white",
      }}
    >
      <Link href="/">
        <Logo />
      </Link>

      <Box sx={{ gap: "1rem", display: "flex" }}>
        <Link href="/">
          <StyledAnchor>Home</StyledAnchor>
        </Link>
        <Link href="/created-applications">
          <StyledAnchor>Created Applications</StyledAnchor>
        </Link>
      </Box>
    </Toolbar>
  );
};

export default Header;
