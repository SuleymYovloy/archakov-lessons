import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    city: yup.string().required("Укажите город"),
    street: yup.string().required("Укажите улицу"),
    appartment: yup.number("Должен быть числом").required('sdfsdfsd'),
});

const AddressForm = ({nextStep, setFormValues}) => {
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            city: "",
            street: "",
            appartment: '0',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (values) => {
      setFormValues((prev) => {
        return {...prev, ...values}
      });
      nextStep('result');
    };

    console.log(formState.errors);

    return (
        <div>
            <TextField
                name="city"
                label="Город"
                {...register("city")}
                helperText={
                    formState.errors.city && formState.errors.city.message
                }
                error={!!formState.errors.city}
                fullWidth
                variant="standard"
            />
            <TextField
                name="stree"
                label="Улица"
                {...register("street")}
                helperText={
                    formState.errors.street && formState.errors.street.message
                }
                error={!!formState.errors.street}
                fullWidth
                variant="standard"
            />
            <TextField
                name="appartment"
                label="Номер квартиры"
                {...register("appartment")}
                helperText={
                    formState.errors.appartment &&
                    formState.errors.appartment.message
                }
                error={!!formState.errors.appartment}
                type="number"
                fullWidth
                variant="standard"
            />
            <br />
            <br />
            <div className="row buttons">
                <Button
                    onClick={handleSubmit(onSubmit)}
                    variant="contained"
                    color="primary"
                >
                    Очистить
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit(onSubmit)}
                >
                    Далее
                </Button>
            </div>
        </div>
    );
};

export default AddressForm;
