import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Buscador = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const IconBuscador = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));


export const Navbar = () => {

  return (
    <AppBar position="sticky" sx={{bgcolor: 'black'}}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MPRO Visaciones
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Buscador>
          <InputBase placeholder="Buscar" />
        </Buscador>
        <IconBuscador>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
         
        </IconBuscador>
        
      </StyledToolbar>
      
    </AppBar>
  );
};
