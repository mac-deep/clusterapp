import * as React from "react";
import Box from "@mui/material/Box";
import NextLink from "next/link";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, CircularProgress, Link, ListItemButton } from "@mui/material";
import { useRouter } from "next/router";
import { useACluster } from "../adapters";
import Layout from "./Layout";
import Sidebar from "../components/core/Sidebar";

export default function ClusterLayout({ children }) {
  const router = useRouter();
  const [starbar, setStarbar] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const clusterId = router.query.cluster;
  const starId = router.query.star;
  const { cluster, isLoading, isError } = useACluster(clusterId);

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
            Spinning <span className="font-bold uppercase">{clusterId}</span>
            🌌 for you!
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
            {cluster.title}
          </Typography>
          <IconButton onClick={() => setShow(!show)}>
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={show} onClose={() => setShow(!show)}>
        <Sidebar />
      </Drawer>
      <Drawer anchor="left" open={starbar} onClose={() => setStarbar(!starbar)}>
        <StarList parentLink={`/clusters/${clusterId}`} data={cluster.stars} />
      </Drawer>
      {children}
    </>
  );
}
