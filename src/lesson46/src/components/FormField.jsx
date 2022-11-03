import React from "react";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";

export const FormField = ({ name, label}) => {
    const {register, formState} = useFormContext();
    const {errors} = formState;
    return (
        <div>
            <TextField
                name={name}
                label={label}
                {...register("name")}
                helperText={errors[name] && errors[name].message}
                error={!!errors[name]}
                fullWidth
                variant="standard"
            />
        </div>
    );
};
