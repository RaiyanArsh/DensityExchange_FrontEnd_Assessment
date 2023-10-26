import React from "react";
import { Container, Typography, Button, CardMedia, hexToRgb } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ padding: "30px 0" }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <CardMedia
            component="img"
            style={{
              width: "60px",
              height: "60px",
              margin: "0 auto",
              borderRadius: "10px",
            }}
            image="icon.png"
            alt="Logo"
          />
          <Typography
            style={{ fontWeight: "bold", margin: "10px",fontFamily:"monospace" }}
            variant="h4"
            color="#6240f1"
          >
            ahead
          </Typography>
        </div>
        <div
  style={{
    display: "flex",
    justifyContent: "space-evenly",
    margin: "auto",
    marginBottom: "20px",
    marginTop: "30px",
    width: "50%",
  }}
>
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src="loc.png"
      alt="Location Icon"
      style={{ marginRight: "10px", width: "24px", height: "24px" }}
    />
    <Typography variant="" style={{ margin: "0", fontWeight: "bold" ,fontFamily:"monospace"}}>
      AugustStraße 26, 10117 Berlin
    </Typography>
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src="mail.png"
      alt="Email Icon"
      style={{ marginRight: "10px", width: "24px", height: "24px" }}
    />
    <Typography variant="body2" style={{ margin: "0", fontWeight: "bold" ,fontFamily:"monospace"}}>
      hi@ahead-app.com
    </Typography>
  </div>
</div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              padding: "12px 20px",
              "&:hover": {
                backgroundColor: "rgb(28, 26, 27)",
              },
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="apple.png"
                alt="App Store Logo"
                style={{ marginRight: "10px",height:"25px",width:'25px' }}
              />

              <div>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontSize: "9px" }}
                >
                  Download on the
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  App Store
                </Typography>
              </div>
            </div>
          </Button>
          <Typography
            style={{ marginTop: "40px", fontWeight: "bold" }}
            variant="body2"
            color="text.secondary"
          >
            &#9400; 2022 Ahead app. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
