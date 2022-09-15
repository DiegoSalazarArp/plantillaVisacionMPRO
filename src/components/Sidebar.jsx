import {
  AccountBox,
  Home,
  ModeNight,
  BookmarkAdd,
  FollowTheSigns,
  ForkRight,
  FileCopy
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";

import React from "react";

export const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      // bgcolor="lightCoral"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List >
          <ListItem disablePadding>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItemButton >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{width: 180}} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link
              to="/ingresoVisacion"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <BookmarkAdd />
                </ListItemIcon>
                <ListItemText primary="Ingreso Visación"  sx={{width: 180}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/seguimientoVisacion"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <FollowTheSigns />
                </ListItemIcon>
                <ListItemText primary="Seguimiento Visación"  sx={{width: 180}}/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/visacionesObjetadas"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <ForkRight />
                </ListItemIcon>
                <ListItemText primary="Visación Objetada"  sx={{width: 180}}/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/reporteVisacion"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <FileCopy />
                </ListItemIcon>
                <ListItemText primary="Reportes"  sx={{width: 180}}/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
