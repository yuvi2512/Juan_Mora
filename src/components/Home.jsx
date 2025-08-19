import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  AppBar,
  Toolbar,
} from "@mui/material";
import "./home.css";

const Home = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const spotlight = document.querySelector(".spotlight");

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      spotlight.style.setProperty("--x", `${e.pageX}px`);
      spotlight.style.setProperty("--y", `${e.pageY}px`);
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>

      <div className="spotlight">
        <AppBar position="fixed" elevation={3} className="navbar" >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" className="cut-text" sx={{color:'white'}}>
              Juan Mora | Design Interface
            </Typography>
            <Typography variant="h6" className="cut-text" sx={{color:'white'}}>
               Site under Construction
            </Typography>
          </Toolbar>
        </AppBar>
     <Divider className="white-divider" />

        <div className="home-container">
          <Card className="glass-card">
            <CardContent>
              <Typography className="cut-text" variant="h5">
                Yo yo my dear stranger, I'm
              </Typography>
              <Typography className="big-name" variant="h1">
                Juan
              </Typography>
              <Typography className="big-name" variant="h1">
                Mora
              </Typography>

              <div className="bottom-lists">
                <ul className="list-left">
                  <li>
                    <Typography className="highlight">Currently</Typography>
                  </li>
                  <li>Independent Design Director</li>
                  <li>Awwwards Judge 2021–2024.</li>
                  <li>Prev</li>
                  <li>Design Director @Yugalabs, @ByHook, @Google</li>
                </ul>

                <ul className="list-right">
                  <li>Colombian Interactive Designer @Miami.</li>
                  <li>Love the craft.</li>
                  <li>Love no-code tools.</li>
                  <li>Addicted to sugar and sarcasm.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
