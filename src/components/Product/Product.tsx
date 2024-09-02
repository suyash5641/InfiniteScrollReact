import { Stack, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import UserItem from "../UserItem/UserItem";
import { useCallback, useEffect } from "react";
import { Loader } from "../shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { loadUsers } from "../../slice/userSlice";

export const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const visibleUsers = useSelector(
    (state: RootState) => state?.user?.visibleUsers
  );
  const isLoading = useSelector((state: RootState) => state?.user?.isLoading);
  const pageRef = useSelector((state: RootState) => state?.user?.pageRef);
  const error = useSelector((state: RootState) => state.user.error);
  const handleScroll = useCallback(() => {
    if (isLoading) return;
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5
    ) {
      dispatch(loadUsers(pageRef));
    }
  }, [dispatch, isLoading, pageRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    dispatch(loadUsers(pageRef));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}
      <Grid container spacing={2} justifyContent={"center"}>
        {visibleUsers?.map((user, index) => (
          <UserItem
            key={user?.id + user?.name + index}
            index={index}
            user={user}
          />
        ))}
      </Grid>
      {isLoading && (
        <Box>
          <Loader />
        </Box>
      )}
    </Stack>
  );
};
