import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function Wrapper({ children, alignItems = "center" }) {
  return (
    <Container>
      <Box
        padding="5rem 0"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={alignItems}
      >
        {children}
      </Box>
    </Container>
  );
}

export default Wrapper;
