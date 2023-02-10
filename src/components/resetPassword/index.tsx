import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Container,
  Typography,
  CssBaseline,
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "./resetPassword.module.css";
import VerifyCodeForm from "./codeValidator";
import { resetPasswordRequest } from "../../modules/auth/reducer";
import { useAppDispatch, useAppSelector } from "@/modules/reduxHooks";
import { useRouter } from "next/router";

const SignIn = () => {
  const theme = createTheme();
  const router = useRouter();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const dispatch = useAppDispatch();
  const { id } = router.query;
  const [showPassword, setShowPassword] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState("842575");
  const submitForm = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (
      data.get("confirmPassword") === data.get("password") &&
      data.get("password") &&
      verificationCode
    ) {
      dispatch(
        resetPasswordRequest({
          id: id,
          password: data.get("password"),
          verificationCode: verificationCode,
        })
      );
    } else {
      alert("Password are empty/ Not Equal");
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
            marginTop: { lg: "179.06px" },
          }}
        >
          <Typography className={styles.heading}>
            Request sent successfully!
          </Typography>

          <Typography
            className={styles.subHeading}
            sx={{
              width: { lg: "401px", md: "95%", sm: "95%" },
              height: "48px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            We&apos;ve sent a 6-digit confirmation email to your email. Please
            enter the code in below box to verify your email.
          </Typography>
          <VerifyCodeForm setVerificationCode={setVerificationCode} />
          <Box
            component="form"
            noValidate
            onSubmit={submitForm}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: { lg: "452px", md: "95%", sm: "95%" },
            }}
          >
            <FormControl
              sx={{
                marginTop: "30px",
                boxSizing: "border-box",
                width: { lg: "452px", md: "100%", sm: "100%" },
                height: "47.23px",
                borderRadius: "6.08304px",
              }}
              fullWidth
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl
              sx={{
                marginTop: "30px",
                boxSizing: "border-box",
                width: { lg: "452px", md: "100%", sm: "100%" },
                height: "47.23px",
                borderRadius: "6.08304px",
              }}
              fullWidth
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Box
              className={styles.signInBox}
              sx={{ width: { lg: "452px", md: "100%", sm: "100%" } }}
            >
              <Button
                type="submit"
                // variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                }}
                className={styles.resetBtn}
              >
                CHANGE PASSWORD
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
            <Typography className={styles.code}>
              Don&apos;t have a code?{" "}
            </Typography>
            <Button className={styles.resendBtn}>Resend code</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
