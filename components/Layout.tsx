import React, { ReactNode } from "react";
import { Container, Typography } from "@mui/material";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <Container>
    <Header />
    {props.children}
  </Container>
);

export default Layout;
