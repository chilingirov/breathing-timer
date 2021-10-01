import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";

function Toolbar({ title }) {
  let history = useHistory();
  return (
    <Box display="flex" marginBottom="1.5rem">
      <IconButton onClick={history.goBack} color="inherit" size="large">
        <KeyboardBackspaceIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3" fontWeight="700" marginLeft="1rem" noWrap>
        {title}
      </Typography>
    </Box>
  );
}

export default Toolbar;
