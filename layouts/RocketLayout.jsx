import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import NextLink from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useARocket } from "../adapters";
import Layout from "./Layout";
import { Box } from "@mui/system";

const RocketLayout = ({ children }) => {
  const router = useRouter();
  const rocketId = router.query.rocket;
  const [starbar, setStarbar] = useState(true);
  const { rocket, isLoading, isError } = useARocket(rocketId);

  const StarList = ({ data, parentLink }) => (
    <Box width="300px" role="presentation" onClick={() => setStarbar(!starbar)}>
      <List>
        {data.map((star) => (
          <NextLink href={`${parentLink}/${star.videoURL}`}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={star.title} />
              </ListItemButton>
            </ListItem>
          </NextLink>
        ))}
      </List>
    </Box>
  );
  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <Layout title="Loading...">
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          paddingTop="40vh"
          alignItems="center"
        >
          <CircularProgress />
          <Typography variant="h4" textAlign="center">
            Launching <span className="font-bold uppercase">{rocketId} </span>
            for you 🚀...
          </Typography>
        </Box>
      </Layout>
    );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setStarbar(!starbar)}
            size="large"
            edge="Listt"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {rocket.title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={starbar} onClose={() => setStarbar(!starbar)}>
        <StarList parentLink={`/rockets/${rocketId}`} data={rocket.stars} />
      </Drawer>
      {children}
    </>
  );
};

RocketLayout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

RocketLayout.defaultProps = {
  children: {},
};

export default RocketLayout;
