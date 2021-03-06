import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";

const val = [
    {
        value: "Si",
        label: "Si",
    },
    {
        value: "No",
        label: "No",
    },
];

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


export default function ConyugueForm(props) {
    const [validate, setValidate] = useState("");
    const gettingValidate = (e) => {
        let { value } = e.target;
        setValidate(value);
    }

    const [validateLife, setValidateLife] = useState("");
    const gettingValidateLife = (e) => {
        let { value } = e.target;
        setValidateLife(value);
    }

    const [valuesPhone, setPhone] = useState("");
    const gettingPhone = (e) => {
        let { value } = e.target;
        setPhone(value);
    };


    const [valuesWorking, setWorking] = useState("");
    const gettingWorking = (e) => {
        let { value } = e.target;
        setWorking(value);
    };

    const [valuesMarried, setMarried] = useState("");
    const gettingMarried = (e) => {
        let { value } = e.target;
        setMarried(value);
    };

    const [valuesPartner, setPartner] = useState("");
    const gettingPartner = (e) => {
        let { value } = e.target;
        setPartner(value);
    };



    const [validateLifep, setValidateLifep] = useState("");
    const gettingValidateLifep = (e) => {
        let { value } = e.target;
        setValidateLifep(value);
    }

    const [valuesPhonep, setPhonep] = useState("");
    const gettingPhonep = (e) => {
        let { value } = e.target;
        setPhonep(value);
    };


    const [valuesWorkingp, setWorkingp] = useState("");
    const gettingWorkingp = (e) => {
        let { value } = e.target;
        setWorkingp(value);
    };


    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            //conyugue
            family_validate_conyugue,
            family_conyugue_name,
            family_conyugue_age,
            family_conyugue_status,
            family_conyugue_place,
            family_conyugue_company,
            family_conyugue_financial_income,
            family_conyugue_phone,
            family_conyugue_depend,
            family_conyugue_no_phone,
            family_conyugue_time_died,
            family_conyugue_reason_died,
            family_conyugue_life,
            family_conyugue_phone_val,
            family_conyugue_working_val,

            family_conyugue_married_val,
            family_conyugue_married,
            family_conyugue_partner_val,

            family_conyuguepat_name,
            family_conyuguepat_age,
            family_conyuguepat_status,
            family_conyuguepat_place,
            family_conyuguepat_company,
            family_conyuguepat_financial_income,
            family_conyuguepat_phone,
            family_conyuguepat_depend,
            family_conyuguepat_no_phone,
            family_conyuguepat_phone_val,
            family_conyuguepat_working_val,
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
                                Informaci??n Conyugue
                            </Typography>
                            <Divider style={{ paddingTop: "20px" }}>
                                <Chip
                                    style={{ fontSize: "14px", fontWeight: "bold", backgroundColor: "black", color: "white" }}
                                    label="Informaci??n conyugue"
                                />
                            </Divider>
                            <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                    ??Tiene conyugue?:
                                </label>
                                <SelectField
                                    id="family_validate_conyugue"
                                    name={family_validate_conyugue.name}
                                    label={family_validate_conyugue.label}
                                    data={val}
                                    onChange={gettingValidate}
                                    fullWidth
                                />

                                {validate === "Si" && (

                                    <div>
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ??Vive?:
                                        </label>
                                        <SelectField
                                            id="family_conyugue_life"
                                            name={family_conyugue_life.name}
                                            label={family_conyugue_life.label}
                                            data={val}
                                            onChange={gettingValidateLife}
                                            fullWidth
                                        />
                                        {validateLife === "Si" && (
                                            <Grid container spacing={0} style={{ paddingTop: "18px" }}>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                                                >
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Nombre:
                                                    </label>
                                                    <InputField
                                                        name={family_conyugue_name.name}
                                                        label={family_conyugue_name.label}
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                                                >
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Edad:
                                                    </label>
                                                    <InputField
                                                        name={family_conyugue_age.name}
                                                        label={family_conyugue_age.label}
                                                        fullWidth
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Estado civil:
                                                    </label>
                                                    <SelectField
                                                        id="family_conyugue_status"
                                                        name={family_conyugue_status.name}
                                                        label={family_conyugue_status.label}
                                                        data={civil}
                                                        fullWidth
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ??Tiene tel??fono?:
                                                    </label>
                                                    <SelectField
                                                        name={family_conyugue_phone_val.name}
                                                        label={family_conyugue_phone_val.label}
                                                        data={val}
                                                        onChange={
                                                            gettingPhone
                                                        }
                                                        fullWidth
                                                    />
                                                    <Grid>
                                                        {valuesPhone === "Si" && (
                                                            <div style={{ paddingTop: "10px" }}>
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Tel??fono:
                                                                    </label>
                                                                    <InputField name={family_conyugue_phone.name} label={family_conyugue_phone.label} fullWidth />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {valuesPhone === "No" && (
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ??Motivo del por qu?? no tiene tel??fono?:
                                                                </label>
                                                                <InputField name={family_conyugue_no_phone.name} label={family_conyugue_no_phone.label} fullWidth />
                                                            </div>

                                                        )}
                                                    </Grid>
                                                </Grid>


                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ??Labora?:
                                                    </label>
                                                    <SelectField
                                                        name={family_conyugue_working_val.name}
                                                        label={family_conyugue_working_val.label}
                                                        data={val}
                                                        onChange={
                                                            gettingWorking
                                                        }
                                                        fullWidth
                                                    />
                                                    <div>
                                                        {valuesWorking === "Si" && (
                                                            <div style={{ paddingTop: "10px" }}>
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Puesto donde labora:
                                                                    </label>
                                                                    <InputField name={family_conyugue_place.name} label={family_conyugue_place.label} fullWidth />
                                                                </div>
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Empresa donde labora:
                                                                    </label>
                                                                    <InputField name={family_conyugue_company.name} label={family_conyugue_company.label} fullWidth />
                                                                </div>
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Ingresos promedio:
                                                                    </label>
                                                                    <InputField name={family_conyugue_financial_income.name} label={family_conyugue_financial_income.label} fullWidth />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {valuesWorking === "No" && (
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ??De qui??n depende econ??micamente?:
                                                                </label>
                                                                <InputField name={family_conyugue_depend.name} label={family_conyugue_depend.label} fullWidth />
                                                            </div>
                                                        )}
                                                    </div>
                                                </Grid>

                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ??Actualmente se encuentra casad@ legalmente pero separad@?:
                                                    </label>
                                                    <SelectField
                                                        name={family_conyugue_married_val.name}
                                                        label={family_conyugue_married_val.label}
                                                        data={val}
                                                        onChange={
                                                            gettingMarried
                                                        }
                                                        fullWidth
                                                    />
                                                    <Grid>
                                                        {valuesMarried === "Si" && (
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ??Motivo del por qu?? esta separad@?:
                                                                </label>
                                                                <InputField name={family_conyugue_married.name} label={family_conyugue_married.label} fullWidth />
                                                            </div>

                                                        )}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        )}

                                        {validateLife
                                            === "No" && (
                                                <div>
                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                            ??Tiempo fallecido?:
                                                        </label>
                                                        <InputField name={family_conyugue_time_died.name} label={family_conyugue_time_died.label} fullWidth />
                                                    </div>
                                                    <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                            ??Raz??n de fallecimiento?:
                                                        </label>
                                                        <InputField name={family_conyugue_reason_died.name} label={family_conyugue_reason_died.label} fullWidth />
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                )}
                            </Grid>

                            {validate === "No" && (
                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        ??Posee pareja en la actualidad?:
                                    </label>
                                    <SelectField
                                        name={family_conyugue_partner_val.name}
                                        label={family_conyugue_partner_val.label}
                                        data={val}
                                        onChange={
                                            gettingPartner
                                        }
                                        fullWidth
                                    />
                                    <Grid>
                                        {valuesPartner === "Si" && (
                                            <Grid container spacing={0} style={{ paddingTop: "18px" }}>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                                                >
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Nombre:
                                                    </label>
                                                    <InputField
                                                        name={family_conyuguepat_name.name}
                                                        label={family_conyuguepat_name.label}
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                                                >
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Edad:
                                                    </label>
                                                    <InputField
                                                        name={family_conyuguepat_age.name}
                                                        label={family_conyuguepat_age.label}
                                                        fullWidth
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        Estado civil:
                                                    </label>
                                                    <SelectField
                                                        id="family_conyuguepat_status"
                                                        name={family_conyuguepat_status.name}
                                                        label={family_conyuguepat_status.label}
                                                        data={civil}
                                                        fullWidth
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ??Tiene tel??fono?:
                                                    </label>
                                                    <SelectField
                                                        name={family_conyuguepat_phone_val.name}
                                                        label={family_conyuguepat_phone_val.label}
                                                        data={val}
                                                        onChange={
                                                            gettingPhonep
                                                        }
                                                        fullWidth
                                                    />
                                                    <Grid>
                                                        {valuesPhonep === "Si" && (
                                                            <div style={{ paddingTop: "10px" }}>
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Tel??fono:
                                                                    </label>
                                                                    <InputField name={family_conyuguepat_phone.name} label={family_conyuguepat_phone.label} fullWidth />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {valuesPhonep === "No" && (
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ??Motivo del por qu?? no tiene tel??fono?:
                                                                </label>
                                                                <InputField name={family_conyuguepat_no_phone.name} label={family_conyuguepat_no_phone.label} fullWidth />
                                                            </div>

                                                        )}
                                                    </Grid>
                                                </Grid>


                                                <Grid item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                        ??Labora?:
                                                    </label>
                                                    <SelectField
                                                        name={family_conyuguepat_working_val.name}
                                                        label={family_conyuguepat_working_val.label}
                                                        data={val}
                                                        onChange={
                                                            gettingWorkingp
                                                        }
                                                        fullWidth
                                                    />
                                                    <div>
                                                        {valuesWorkingp === "Si" && (
                                                            <div style={{ paddingTop: "10px" }}>
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Puesto donde labora:
                                                                    </label>
                                                                    <InputField name={family_conyuguepat_place.name} label={family_conyuguepat_place.label} fullWidth />
                                                                </div>
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Empresa donde labora:
                                                                    </label>
                                                                    <InputField name={family_conyuguepat_company.name} label={family_conyuguepat_company.label} fullWidth />
                                                                </div>
                                                                <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                        Ingresos promedio:
                                                                    </label>
                                                                    <InputField name={family_conyuguepat_financial_income.name} label={family_conyuguepat_financial_income.label} fullWidth />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {valuesWorkingp === "No" && (
                                                            <div item xs={12} sm={6} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                                                                <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                                                    ??De qui??n depende econ??micamente?:
                                                                </label>
                                                                <InputField name={family_conyuguepat_depend.name} label={family_conyuguepat_depend.label} fullWidth />
                                                            </div>
                                                        )}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Grid>
                            )}
                        {/* </Paper>
                    </Box> */}
                </Grid>
            </>
        )
    );
}
