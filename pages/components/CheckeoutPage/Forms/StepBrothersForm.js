import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";

const civil = [
    {
        value: "Soltero",
        label: "Soltero",
    },
    {
        value: "Casado",
        label: "Casado",
    },
    {
        value: "Divorciado",
        label: "Divorciado",
    },
    {
        value: "Viudo",
        label: "Viudo",
    },
    {
        value: "Unido",
        label: "Unido",
    },
    {
        value: "Otra",
        label: "Otra",
    },
];

const life = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    },
];

const validate = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    },
];

export default function StepBrothersForm(props) {
    let [valuess, setValue] = useState({});
    const gettingValue = (name, e) => {
        const nvalues = {
            ...valuess,
            [name]: e.target.value,
        };
        console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setValue(nvalues);
    };

    const [valuesPhone, setPhone] = useState({});
    const gettingPhone = (name, e) => {
        const nvalues = {
            ...valuesPhone,
            [name]: e.target.value,
        };
        console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setPhone(nvalues);
    };

    const [valuesWorking, setWorking] = useState({});
    const gettingWorking = (name, e) => {
        // let { value } = e.target;
        const nvalues = {
            ...valuesWorking,
            [name]: e.target.value,
        };
        console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setWorking(nvalues);
    };

    const [valueValidate, setValueValidate] = useState("");
    const gettingValidate = (e) => {
        let { value } = e.target;
        setValueValidate(value)
    }

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            family_validate_stepbrother,
            family_stepbrother_name,
            family_stepbrother_age,
            family_stepbrother_status,
            family_stepbrother_place,
            family_stepbrother_company,
            family_stepbrother_financial_income,
            family_stepbrother_phone,
            family_stepbrother_depend,
            family_stepbrother_no_phone,
            family_stepbrother_time_died,
            family_stepbrother_reason_died,
            family_stepbrother_life,
            family_stepbrother_phone_val,
            family_stepbrother_working_val,
        },
    } = props;

    return (
        !isSSR && (
            <>
                <Grid>
                    {/* <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            "& > :not(style)": {
                                m: 1,
                                width: 1400,
                                height: 1000,
                            },
                        }}
                        display="flex"
                        justifyContent="center"
                        paddingTop={5}
                    >
                        <Paper elevation={24} style={{ maxHeight: 1020, overflow: "auto" }}> */}
                            <Typography
                                variant="h6"
                                gutterBottom
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    paddingTop: "40px",
                                    paddingLeft: "10px"
                                }}
                            >
                                Datos de los hermanastros
                            </Typography>
                            
                            <Divider style={{ paddingTop: "35px", paddingBottom: "10px" }}>
                                <Chip
                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                    label="Informaci??n hermanastros"
                                />
                            </Divider>

                            <Grid>
                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ??Usted tiene hermanastros?:
                                    </label>
                                    <SelectField
                                        id="family_validate_stepbrother"
                                        name={family_validate_stepbrother.name}
                                        label={family_validate_stepbrother.label}
                                        data={validate}
                                        onChange={gettingValidate}
                                        fullWidth
                                    />
                                    {valueValidate === "Si" && (
                                        <div>
                                            <Divider style={{ paddingTop: "20px" }}>
                                                <Chip
                                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                                    label="Informaci??n hermanastros"
                                                />
                                            </Divider>
                                            <p
                                                style={{
                                                    paddingLeft: "15px",
                                                    paddingTop: "10px",
                                                    fontSize: "20px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                Ingrese la informaci??n de sus hermanastros
                                            </p>

                                            <Grid
                                                container
                                                style={{
                                                    paddingTop: "18px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <FieldArray
                                                    name="stepbrother"
                                                    render={(arrayHelpers) => (
                                                        <>
                                                            <IconButton
                                                                onClick={() =>
                                                                    arrayHelpers.push({
                                                                        [family_stepbrother_name.name]: "",
                                                                        [family_stepbrother_age.name]: "",
                                                                        [family_stepbrother_status.name]: "",
                                                                        [family_stepbrother_place.name]: "",
                                                                        [family_stepbrother_company.name]: "",
                                                                        [family_stepbrother_financial_income.name]: "",
                                                                        [family_stepbrother_phone.name]: "",
                                                                        [family_stepbrother_depend.name]: "",
                                                                        [family_stepbrother_no_phone.name]: "",
                                                                        [family_stepbrother_time_died.name]: "",
                                                                        [family_stepbrother_reason_died.name]: "",
                                                                        [family_stepbrother_life.name]: "",
                                                                        [family_stepbrother_phone_val.name]: "",
                                                                        [family_stepbrother_working_val.name]: "",
                                                                    })
                                                                }
                                                            >
                                                                <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                                                            </IconButton>
                                                            {(values.stepbrother || []).map((_, index) => (
                                                                <Grid
                                                                    key={`inputstepbrother_${index}`}
                                                                    item
                                                                    xs={12}
                                                                    sm={6}
                                                                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                                                                >
                                                                    <>
                                                                        <div
                                                                            item
                                                                            xs={12}
                                                                            sm={6}
                                                                            style={{
                                                                                paddingLeft: "10px",
                                                                                paddingRight: "10px",
                                                                                paddingTop: "10px",
                                                                            }}
                                                                        >
                                                                            <label
                                                                                style={{ fontSize: "18px", fontWeight: "bold" }}
                                                                            >
                                                                                ??A??n Vive?:
                                                                            </label>
                                                                            <SelectField
                                                                                key={`inputstepbrother_${index}`}
                                                                                name={`stepbrother.${index}.${family_stepbrother_life.name}`}
                                                                                label={family_stepbrother_life.label}
                                                                                data={life}
                                                                                onChange={(e) => {
                                                                                    gettingValue(
                                                                                        `stepbrother.${index}.${family_stepbrother_life.name}`,
                                                                                        e
                                                                                    );
                                                                                }}
                                                                                fullWidth
                                                                            />

                                                                            {valuess[
                                                                                `stepbrother.${index}.${family_stepbrother_life.name}`
                                                                            ] === "Si" && (
                                                                                    <div>
                                                                                        <div>
                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    Nombre:
                                                                                                </label>
                                                                                                <InputField name={`stepbrother.${index}.${family_stepbrother_name.name}`} label={family_stepbrother_name.label} fullWidth />
                                                                                            </div>
                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    Edad:
                                                                                                </label>
                                                                                                <InputField name={`stepbrother.${index}.${family_stepbrother_age.name}`} label={family_stepbrother_age.label} fullWidth />
                                                                                            </div>
                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    Estado civil:
                                                                                                </label>
                                                                                                <SelectField
                                                                                                    name={`stepbrother.${index}.${family_stepbrother_status.name}`}
                                                                                                    label={family_stepbrother_status.label}
                                                                                                    data={civil}
                                                                                                    fullWidth
                                                                                                />
                                                                                            </div>
                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    ??Tiene tel??fono?:
                                                                                                </label>
                                                                                                <SelectField
                                                                                                    name={`stepbrother.${index}.${family_stepbrother_phone_val.name}`}
                                                                                                    label={family_stepbrother_phone_val.label}
                                                                                                    data={validate}
                                                                                                    onChange={(e) => {
                                                                                                        gettingPhone(
                                                                                                            `stepbrother.${index}.${family_stepbrother_phone_val.name}`,
                                                                                                            e
                                                                                                        );
                                                                                                    }}
                                                                                                    fullWidth
                                                                                                />
                                                                                                <div>
                                                                                                    {valuesPhone[
                                                                                                        `stepbrother.${index}.${family_stepbrother_phone_val.name}`
                                                                                                    ] === "Si" && (
                                                                                                            <div style={{ paddingTop: "10px" }}>
                                                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                        Tel??fono:
                                                                                                                    </label>
                                                                                                                    <InputField name={`stepbrother.${index}.${family_stepbrother_phone.name}`} label={family_stepbrother_phone.label} fullWidth />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        )}

                                                                                                    {valuesPhone[
                                                                                                        `stepbrother.${index}.${family_stepbrother_phone_val.name}`
                                                                                                    ] === "No" && (
                                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                    ??Motivo del por qu?? no tiene tel??fono?:
                                                                                                                </label>
                                                                                                                <InputField name={`stepbrother.${index}.${family_stepbrother_no_phone.name}`} label={family_stepbrother_no_phone.label} fullWidth />
                                                                                                            </div>

                                                                                                        )}
                                                                                                </div>
                                                                                            </div>

                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                    ??Labora?:
                                                                                                </label>
                                                                                                <SelectField
                                                                                                    name={`stepbrother.${index}.${family_stepbrother_working_val.name}`}
                                                                                                    label={family_stepbrother_working_val.label}
                                                                                                    data={validate}
                                                                                                    onChange={(e) => {
                                                                                                        gettingWorking(
                                                                                                            `stepbrother.${index}.${family_stepbrother_working_val.name}`,
                                                                                                            e
                                                                                                        )
                                                                                                    }
                                                                                                    }
                                                                                                    fullWidth
                                                                                                />
                                                                                                <div>
                                                                                                    {valuesWorking[
                                                                                                        `stepbrother.${index}.${family_stepbrother_working_val.name}`
                                                                                                    ] === "Si" && (
                                                                                                            <div style={{ paddingTop: "10px" }}>
                                                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                        Puesto donde labora:
                                                                                                                    </label>
                                                                                                                    <InputField name={`stepbrother.${index}.${family_stepbrother_place.name}`} label={family_stepbrother_place.label} fullWidth />
                                                                                                                </div>
                                                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                        Empresa donde labora:
                                                                                                                    </label>
                                                                                                                    <InputField name={`stepbrother.${index}.${family_stepbrother_company.name}`} label={family_stepbrother_company.label} fullWidth />
                                                                                                                </div>
                                                                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                        Ingresos promedio:
                                                                                                                    </label>
                                                                                                                    <InputField name={`stepbrother.${index}.${family_stepbrother_financial_income.name}`} label={family_stepbrother_financial_income.label} fullWidth />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        )}

                                                                                                    {valuesWorking[
                                                                                                        `stepbrother.${index}.${family_stepbrother_working_val.name}`
                                                                                                    ] === "No" && (
                                                                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                                    ??De qui??n depende econ??micamente?:
                                                                                                                </label>
                                                                                                                <InputField name={`stepbrother.${index}.${family_stepbrother_depend.name}`} label={family_stepbrother_depend.label} fullWidth />
                                                                                                            </div>
                                                                                                        )}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )}

                                                                            {valuess[
                                                                                `stepbrother.${index}.${family_stepbrother_life.name}`
                                                                            ] === "No" && (
                                                                                    <div>
                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                ??Tiempo fallecido?:
                                                                                            </label>
                                                                                            <InputField name={`stepbrother.${index}.${family_stepbrother_time_died.name}`} label={family_stepbrother_time_died.label} fullWidth />
                                                                                        </div>
                                                                                        <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                                                ??Raz??n de fallecimiento?:
                                                                                            </label>
                                                                                            <InputField name={`stepbrother.${index}.${family_stepbrother_reason_died.name}`} label={family_stepbrother_reason_died.label} fullWidth />
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                        </div>
                                                                    </>
                                                                    <IconButton
                                                                        onClick={() => arrayHelpers.remove(index)}
                                                                    >
                                                                        <RemoveCircleIcon sx={{ color: "red" }} />
                                                                    </IconButton>
                                                                </Grid>
                                                            ))}
                                                        </>
                                                    )}
                                                />
                                            </Grid>
                                        </div>
                                    )}
                                </Grid>
                            </Grid>

                        {/* </Paper>
                    </Box> */}
                </Grid>
            </>
        )
    );
}
