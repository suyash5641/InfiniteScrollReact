import React from "react";
import { Typography, Grid2, styled, Stack } from "@mui/material";
import { IUserItemProps } from "../../interface/interface";

const Item = styled(Stack)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const UserItem: React.FC<IUserItemProps> = ({ index, user }) => {
  return (
    <Grid2 container spacing={1} component="div" justifyContent="center">
      <Grid2
        size={{ xs: 12, sm: 6, md: 4 }}
        sx={{
          width: {
            xs: "100%",
            sm: "90%",
            md: "80%",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Item>
          <img
            src={user.image}
            alt={user.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <Typography variant="h6" component="div" gutterBottom>
            {index + 1}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body2" component="div">
            Age: {user.age}
          </Typography>
          <Typography variant="body2" component="div">
            Occupation: {user.occupation}
          </Typography>
        </Item>
      </Grid2>
    </Grid2>
  );
};

export default UserItem;
