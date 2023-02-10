import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Container,
  Typography,
  CssBaseline,
  Box,
  TextField,
  Grid,
} from "@mui/material";
import { useRouter } from "next/router";
import { forGotPasswordRequest } from "@/modules/auth/reducer";
import { useAppDispatch, useAppSelector } from "@/modules/reduxHooks";
import styles from "./forgotPassword.module.css";
const SignIn = () => {
  const theme = createTheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    data: { verificationCode, email, id },
  } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (verificationCode) {
      router.push(`/admin/passwordReset/${id}`);
    }
  }, [verificationCode, id, router]);
  const submitForm = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("email")) {
      dispatch(forGotPasswordRequest({ email: data.get("email") }));
    } else {
      // alert("Please Enter Your Email");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component={"main"} maxWidth="xs" className={styles.body}>
        <CssBaseline />
        <Box
          component="form"
          noValidate
          onSubmit={submitForm}
          className={styles.content}
          sx={{
            width: { lg: "502.39px", sm: "100%" },
            height: { lg: "443.35px", sm: "100%" },
            marginTop: { lg: "179.06px" },
          }}
        >
          <Typography className={styles.heading}>
            Forgot your password?
          </Typography>

          <Typography
            className={styles.subHeading}
            sx={{
              width: { lg: "452px", md: "95%", sm: "95%" },
              height: "48px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "24px",
              textAlign: "center",
              color: "#637381",
            }}
          >
            Please enter the email address associated with your account, and
            we&apos;ll email you a link to reset your password.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: { lg: "452px", md: "95%", sm: "95%" },
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email address"
              type="email"
              id="email"
              autoComplete="email"
              autoFocus
              sx={{
                marginTop: "50px",
                boxSizing: "border-box",
                width: { lg: "452px", md: "100%", sm: "100%" },
                height: "47.23px",
                borderRadius: "6.08304px",
              }}
            />
            <Box
              className={styles.signInBox}
              sx={{ width: { lg: "452px", md: "100%", sm: "100%" } }}
            >
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                }}
                className={styles.resetBtn}
              >
                RESET PASSWORD
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Button className={styles.backBtn}> Back</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
