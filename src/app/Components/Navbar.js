import React from "react";
import {
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  CardMedia,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        width: "95%",
        margin: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "10px",
            }}
            image="icon.png"
            alt="Logo"
          />
          <div style={{ display: "flex" }}>
            <Typography
              variant="body1"
              sx={{ color: "black", marginX: "22px", cursor: "pointer",fontFamily:"monospace" }}
            >
              Emotions
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", marginX: "22px", cursor: "pointer",fontFamily:"monospace" }}
            >
              Manifesto
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", marginX: "22px", cursor: "pointer",fontFamily:"monospace" }}
            >
              Self-awareness test
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", marginX: "22px", cursor: "pointer",fontFamily:"monospace" }}
            >
              Work with us
            </Typography>
          </div>

          <Typography variant="h6" component="div" sx={{ color: "white" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                borderRadius: "30px",
                padding: "12px 20px",
                fontFamily:"monospace",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              Download App
            </Button>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
