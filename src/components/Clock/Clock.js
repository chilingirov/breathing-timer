import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const Clock = ({ time = 0, seconds = 0, variant, animation = "breatheIn" }) => {
  const useStyles = React.useRef(
    makeStyles((theme) => ({
      "@keyframes breatheIn": {
        "0%": {
          boxShadow:
            "0 0 0 0px rgba(255, 161, 122, 0.3), 0 0 0 0px rgba(255, 161, 122, 0.3), 0 0 0 0px rgba(255, 161, 122, 0.3)",
        },
        "100%": {
          boxShadow:
            "0 0 0 30px rgba(255, 161, 122, 0.3), 0 0 0 60px rgba(255, 161, 122, 0.3), 0 0 0 90px rgba(255, 161, 122, 0.3)",
        },
      },
      "@keyframes breatheOut": {
        "0%": {
          boxShadow:
            "0 0 0 30px rgba(255, 161, 122, 0.3), 0 0 0 60px rgba(255, 161, 122, 0.3), 0 0 0 90px rgba(255, 161, 122, 0.3)",
        },
        "100%": {
          boxShadow:
            "0 0 0 0px rgba(255, 161, 122, 0.3), 0 0 0 0px rgba(255, 161, 122, 0.3), 0 0 0 0px rgba(255, 161, 122, 0.3)",
        },
      },
      breatheIn: {
        display: "flex",
        flexDirection: "column",
        color: "transparent",
        margin: "5rem 0",
        width: "80px",
        height: "80px",
        [theme.breakpoints.up("sm")]: {
          width: "200px",
          height: "200px",
        },
        borderRadius: "50%",
        background: "rgba(255, 161, 122, 1)",
        animation: `$breatheIn ${seconds}s linear infinite`,
        alignItems: "center",
        justifyContent: "center",
      },
      breatheOut: {
        display: "flex",
        flexDirection: "column",
        color: "transparent",
        margin: "5rem 0",
        width: "80px",
        height: "80px",
        [theme.breakpoints.up("sm")]: {
          width: "200px",
          height: "200px",
        },
        borderRadius: "50%",
        background: "rgba(255, 161, 122, 1)",
        animation: `$breatheOut ${seconds}s linear infinite`,
        alignItems: "center",
        justifyContent: "center",
      },
      holdIn: {
        display: "flex",
        flexDirection: "column",
        color: "transparent",
        margin: "5rem 0",
        width: "80px",
        height: "80px",
        [theme.breakpoints.up("sm")]: {
          width: "200px",
          height: "200px",
        },
        borderRadius: "50%",
        background: "rgba(255, 161, 122, 1)",
        alignItems: "center",
        justifyContent: "center",
      },
      holdOut: {
        display: "flex",
        flexDirection: "column",
        color: "transparent",
        margin: "5rem 0",
        width: "80px",
        height: "80px",
        [theme.breakpoints.up("sm")]: {
          width: "200px",
          height: "200px",
        },
        borderRadius: "50%",
        background: "rgba(255, 161, 122, 1)",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "0 0 0 30px rgba(255, 161, 122, 0.3), 0 0 0 60px rgba(255, 161, 122, 0.3), 0 0 0 90px rgba(255, 161, 122, 0.3)",
      },
      time: {
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.25rem",
        },
      },
      variant: {
        [theme.breakpoints.down("sm")]: {
          fontSize: "1rem",
        },
      },
    }))
  );
  const classes = useStyles.current();
  return (
    <div className={classes[animation]}>
      <Typography
        variant="h2"
        color="#fff"
        fontWeight="700"
        className={classes.time}
      >
        {time}
      </Typography>
      <Typography
        variant="h5"
        color="#fff"
        fontWeight="700"
        gutterBottom
        className={classes.variant}
      >
        {variant}
      </Typography>
    </div>
  );
};

export default Clock;
