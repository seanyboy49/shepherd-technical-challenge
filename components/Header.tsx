import React from "react";
import Link from "next/link";
import Logo from "./SheperdLogo";
import { AppBar, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import { StyledAnchor } from "./Styled";
import { Box } from "@mui/system";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Home
        </a>
      </Link>
      <Link href="/created-applications">
        <a className="bold" data-active={isActive("/")}>
          Created Applications
        </a>
      </Link>
    </div>
  );

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
