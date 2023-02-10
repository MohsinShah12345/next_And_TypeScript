import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { OutlinedInput, Stack } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { useRouter } from "next/router"; // hook for routing

// ----------------------------------------------------------------------
export default function VerifyCodeForm({ setVerificationCode, ...rest }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required("Code is required"),
    code2: Yup.string().required("Code is required"),
    code3: Yup.string().required("Code is required"),
    code4: Yup.string().required("Code is required"),
    code5: Yup.string().required("Code is required"),
    code6: Yup.string().required("Code is required"),
  });
  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };
  const {
    watch,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });
  const values = watch();
  useEffect(() => {
    document.addEventListener("paste", handlePasteClipboard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePasteClipboard = (event) => {
    let data = event?.clipboardData?.getData("Text") || "";
    data = data.split("");
    [].forEach.call(document.querySelectorAll("#field-code"), (node, index) => {
      node.value = data[index];
      const fieldIndex = `code${index + 1}`;
      setValue(fieldIndex, data[index]);
    });
  };
  const handleChangeWithNextField = (event, handleChange, callback) => {
    console.log("Event....", event.target.value);
    const { maxLength, value, name } = event.target;

    const fieldIndex = name.replace("code", "");
    const fieldIntIndex = Number(fieldIndex);
    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextfield = document.querySelector(
          `input[name=code${fieldIntIndex + 1}]`
        );
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
    handleChange(event);
    callback();
  };
  const onSubmit = (e) => {
    setVerificationCode(Object.values(e).join(""));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={3} justifyContent="center">
        {Object.keys(values).map((name, index) => (
          <Controller
            key={name}
            name={`code${index + 1}`}
            control={control}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="field-code"
                autoFocus={index === 0}
                placeholder="-"
                onChange={(event) =>
                  handleChangeWithNextField(
                    event,
                    field.onChange,
                    handleSubmit(onSubmit)
                  )
                }
                inputProps={{
                  maxLength: 1,
                  sx: {
                    p: 0,
                    textAlign: "center",
                    width: { xs: 36, sm: 56 },
                    height: { xs: 36, sm: 56 },
                  },
                }}
              />
            )}
          />
        ))}
      </Stack>
    </form>
  );
}
