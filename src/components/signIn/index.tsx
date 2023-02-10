import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Container,
  Typography,
  CssBaseline,
  Box,
  TextField,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./signIn.module.css";
import { useAppDispatch, useAppSelector } from "@/modules/reduxHooks";
import { signInRequest } from "@/modules/auth/reducer";
import { user } from "../../utils/common/index";

const SignIn = () => {
  const theme = createTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const dispatch = useAppDispatch();
  const {
    data: { email: userEmail = "" },
  } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const { token = "" } = user(); // if token did not found then token will be ""

  useEffect(() => {
    // if token found then Admin already Logged In
    // if userEmail found Admin recentely logged In
    if (token || userEmail) {
      // redirect Url when Admin Logged In
      router.push("/admin/forgotPassword");
    }
  }, [token, userEmail, router]);
  const submitForm = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("email") && data.get("password")) {
      dispatch(
        signInRequest({
          email: data.get("email"),
          password: data.get("password"),
        })
      );
    } else {
      /// pending
      // alert("Please fill All fields");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component={"main"} maxWidth="xs" className={styles.body}>
        <CssBaseline />
        <Box
          className={styles.content}
          sx={{
            width: { lg: "502.39px", sm: "100%" },
            height: { lg: "443.35px", sm: "100%" },
            left: { lg: "349px" },
            marginTop: { lg: "179.06px" },
          }}
        >
          <Typography className={styles.heading}>Sign In</Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submitForm}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "100%",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
              autoFocus
              sx={{
                boxSizing: "border-box",
                width: { lg: "452.29px", md: "100%" },
                height: "47.23px",
                /* border: 1.07348px solid #d2d6da; */
                borderradius: "6.08304px",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                boxSizing: "border-box",
                width: { lg: "452.29px", md: "100%" },
                height: "47.23px",
                /* border: 1.07348px solid #d2d6da; */
                borderradius: "6.08304px",
              }}
            />
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs>
                <Link href="#">
                  <FormControlLabel
                    control={<Switch {...label} defaultChecked />}
                    label="Remember me"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Link href="#">Forgot Password?</Link>
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
              }}
              className={styles.signInBtn}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
