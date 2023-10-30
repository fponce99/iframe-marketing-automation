import React from "react";
import { styled, Container, Box } from "@mui/material";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  padding: "20px  "
}));


interface Props {
  children: React.ReactNode;
}

const FullLayout: React.FC<Props> = ({ children }) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <MainWrapper className="mainwrapper">
      {/* ------------------------------------------- */}
      {/* PageContent */}
      {/* ------------------------------------------- */}
      <Container
        sx={{
          paddingTop: "20px",
          maxWidth: "1200px",
        }}
      >
        {/* ------------------------------------------- */}
        {/* Page Route */}
        {/* ------------------------------------------- */}
        <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        {/* ------------------------------------------- */}
        {/* End Page */}
        {/* ------------------------------------------- */}
      </Container>
    </MainWrapper>
  );
};

export default FullLayout;
