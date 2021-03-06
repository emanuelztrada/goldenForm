import React, { useState, useEffect } from "react";
import { app } from "../credentials/credential.firebase";
import { Grid, Typography, Box, Paper, Divider, Chip } from "@mui/material";
import { InputField, SelectField, DatePickerField } from "../../FormFields";
import { FieldArray } from "formik";

//Material ui
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PersonIcon from '@mui/icons-material/Person';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PhotoCamera from '@mui/icons-material/PhotoCamera';



const validate = [{ value: 'Si', label: 'Si' }, { value: 'No', label: 'No' }];

export default function SocialForm(props) {

    if(!props.values[props.formField.social_tatto_fot.name])
        props.values[props.formField.social_tatto_fot.name] = ""; 

    let [valuess, setValue] = useState({});
    const [archivoUrl, setUrl] = useState("");

    const gettingValue = async (name, e) => {
        const nvalues = {
            ...valuess,
            [name]: e.target.files[0],
        };
        console.info(`\n\n==> { nvalues }\n`, nvalues, `\n`, ``);
        setValue(nvalues);

        const enlaceUrl = ""; 
        for (const v of Object.values(nvalues)) {
            try {
                const archivo = v
                const storageRef = app.storage().ref();
                const archivoPath = storageRef.child(archivo.name);
                await archivoPath.put(archivo)
                enlaceUrl = await archivoPath.getDownloadURL();
                console.log( v)
            } catch (error) { }
        }
        const poUrl = `${nvalues}.${enlaceUrl}`; 
        setUrl(poUrl)
    };

    // const archivoHandler = async (name, e) => {
    //     const archivo = e.target.files[0]
    //     console.log(`archivo ${archivo}`)
    //     const storageRef = app.storage().ref();
    //     const archivoPath = storageRef.child(archivo.name);
    //     await archivoPath.put(archivo)
    //     const enlaceUrl = await archivoPath.getDownloadURL();
    //     setUrl(enlaceUrl);
    //     console.log(enlaceUrl)
    // }

    const [value, setValues] = useState({});
    const gettingWorking = (e) => {
        let { value } = e.target;
        setValues(value);
    }

    const [valueF, setValuesF] = useState({});
    const gettingFamily = (e) => {
        let { value } = e.target;
        setValuesF(value);
    }


    const [valueI, setValuesI] = useState({});
    const gettingIlegales = (e) => {
        let { value } = e.target;
        setValuesI(value);
    }

    const [valueAl, setValuesAl] = useState({});
    const gettingAl = (e) => {
        let { value } = e.target;
        setValuesAl(value);
    }

    const [valueFum, setValuesFum] = useState({});
    const gettingFum = (e) => {
        let { value } = e.target;
        setValuesFum(value);
    }

    const [valueTato, setValuesTato] = useState({});
    const gettingTatto = (e) => {
        let { value } = e.target;
        setValuesTato(value);
    }


    const [dense, setDense] = React.useState(false);

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {
        values,
        formField: {
            social_group,
            social_gtime,
            social_politic,
            social_politic_name,
            social_politic_relacion,
            social_politic_puesto,
            social_fuma,
            social_fuma_time,
            social_alco,
            social_alco_time,
            social_alco_bebida,
            social_drog,
            social_drog_option,
            social_drog_time,
            social_drog_person,

            social_tatto,
            social_tatto_descri,
            social_tatto_sign,
            social_tatto_ubi,
            social_tatto_fot,
        },
    } = props;

    return (
        !isSSR && (
            <>
                <Grid>
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

                        Informaci??n Social
                    </Typography>
                    <Divider
                        style={{
                            paddingTop: "20px",
                            paddingBottom: "20px",
                        }}
                    >
                        <Chip
                            style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                paddingTop: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "15px",
                                paddingRight: "15px",
                            }}
                            icon={<PersonIcon />}
                            label="Social"
                            color="primary"
                        />
                    </Divider>
                    <Grid container spacing={0} style={{ paddingTop: "18px" }}>
                        <Grid item
                            xs={12}
                            sm={6}
                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ??Pertenece a grupos sociales, culturales, deportivos, pol??ticos o sindicales?:
                            </label>
                            <SelectField
                                name={social_group.name}
                                label={social_group.label}
                                data={validate}
                                onChange={(e) =>
                                    gettingWorking(e)
                                }
                                fullWidth
                            />
                            {value === "Si" && (
                                <>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ??Cuanto tiempo le dedica en su tiempo libre?:
                                        </label>
                                        <InputField
                                            name={social_gtime.name}
                                            label={social_gtime.label}
                                            fullWidth
                                        />
                                    </Grid>

                                </>
                            )}
                        </Grid>
                        <Grid item
                            xs={12}
                            sm={6}
                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ??Tiene un familiar que pertenezca a un partido politico o puesto, persona expuesta al p??blico?
                            </label>
                            <SelectField
                                name={social_politic.name}
                                label={social_politic.label}
                                data={validate}
                                onChange={(e) =>
                                    gettingFamily(e)
                                }
                                fullWidth
                            />
                            {valueF === "Si" && (
                                <Grid container>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold", paddingTop: "10px" }}>
                                            Nombre del familiar:
                                        </label>
                                        <InputField
                                            name={social_politic_name.name}
                                            label={social_politic_name.label}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold", paddingTop: "10px" }}>
                                            Relaci??n:
                                        </label>
                                        <InputField
                                            name={social_politic_relacion.name}
                                            label={social_politic_relacion.label}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            Puesto o partido pilitico en el que se encuentra:
                                        </label>
                                        <InputField
                                            name={social_politic_puesto.name}
                                            label={social_politic_puesto.label}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                        >
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ??Tiene el habito de fumar?:
                            </label>
                            <SelectField
                                name={social_fuma.name}
                                label={social_fuma.label}
                                data={validate}
                                onChange={(e) =>
                                    gettingFum(e)}
                                fullWidth
                            />

                            {valueFum === "Si" && (
                                <Grid container>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ??Cuando fue la ??ltima vez que consumio?:
                                        </label>
                                        <DatePickerField
                                            name={social_fuma_time.name}
                                            label={social_fuma_time.label}
                                            fullWidth
                                        />
                                    </Grid>

                                </Grid>
                            )}
                        </Grid>


                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                        >
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ??Consume bebidas alcoh??licas?:
                            </label>
                            <SelectField
                                name={social_alco.name}
                                label={social_alco.label}
                                data={validate}
                                onChange={(e) =>
                                    gettingAl(e)}
                                fullWidth
                            />

                            {valueAl === "Si" && (
                                <Grid container>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ??Cuando fue la ??ltima vez que consumio?:
                                        </label>
                                        <DatePickerField
                                            name={social_alco_time.name}
                                            label={social_alco_time.label}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ??Qu?? fue lo ??ltimo que consumio?:
                                        </label>
                                        <InputField
                                            name={social_alco_bebida.name}
                                            label={social_alco_bebida.label}
                                            fullWidth
                                        />
                                    </Grid>



                                </Grid>
                            )}
                        </Grid>


                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                        >
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ??Ha consumido o consume drogas ilegales?:
                            </label>
                            <SelectField
                                name={social_drog.name}
                                label={social_drog.label}
                                data={validate}
                                onChange={(e) =>
                                    gettingIlegales(e)
                                }
                                fullWidth
                            />

                            {valueI === "Si" && (
                                <Grid container>

                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ??Indique cu??les?:
                                        </label>
                                        <InputField
                                            name={social_drog_option.name}
                                            label={social_drog_option.label}
                                            fullWidth
                                        />

                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                                    >
                                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            ??Cuando fue la ??ltima vez que consumio?:
                                        </label>
                                        <InputField
                                            name={social_drog_time.name}
                                            label={social_drog_time.label}
                                            fullWidth
                                        />
                                    </Grid>

                                </Grid>
                            )}
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                        >
                            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                ??Tiene relaci??n con personas que las vendan, consuman o distribuyan?:
                            </label>
                            <SelectField
                                name={social_drog_person.name}
                                label={social_drog_person.label}
                                data={validate}
                                fullWidth
                            />
                        </Grid>




                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
                    >
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                            ??Posse tatuajes?:
                        </label>
                        <SelectField
                            name={social_tatto.name}
                            label={social_tatto.label}
                            data={validate}
                            onChange={(e) =>
                                gettingTatto(e)
                            }
                            fullWidth
                        />

                        {valueTato === "Si" && (

                            <Grid>
                                <div>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            fontSize: "20px",
                                            // fontWeight: "bold",
                                            paddingTop: "40px",
                                            paddingLeft: "10px"
                                        }}
                                    >

                                        Ingrese la informaci??n de todos sus tatuajes
                                    </Typography>
                                    <Grid
                                        container
                                        style={{
                                            // paddingTop: "18px",
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >

                                        <FieldArray
                                            name="social"
                                            render={(arrayHelpers) => (
                                                <>
                                                    <IconButton
                                                        onClick={() =>
                                                            arrayHelpers.push({
                                                                [social_tatto_descri.name]: "",
                                                                [social_tatto_sign.name]: "",
                                                                [social_tatto_ubi.name]: "",
                                                                [social_tatto_fot.name]: "",
                                                            })
                                                        }
                                                    >
                                                        <AddBoxIcon color="primary" sx={{ fontSize: 30 }} />
                                                    </IconButton>
                                                    {(values.social || []).map((_, index) => (
                                                        <Grid
                                                            key={`inputsocial_${index}`}
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
                                                                    <Divider
                                                                        style={{
                                                                            paddingTop: "20px",
                                                                            paddingBottom: "20px",
                                                                        }}
                                                                    >
                                                                        <Chip
                                                                            style={{
                                                                                fontSize: "14px",
                                                                                fontWeight: "bold",
                                                                                paddingTop: "20px",
                                                                                paddingBottom: "20px",
                                                                                paddingLeft: "15px",
                                                                                paddingRight: "15px",
                                                                            }}
                                                                            icon={<AutoAwesomeIcon />}
                                                                            color="primary"
                                                                            label={`Tatuaje ${index + 1}`}
                                                                        />
                                                                    </Divider>

                                                                    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                                                                        <Paper elevation={3}>
                                                                            <Grid>
                                                                                <Grid>
                                                                                    <Typography
                                                                                        sx={{ mt: 4, mb: 2 }}
                                                                                        variant="h6"
                                                                                        component="div"
                                                                                        style={{
                                                                                            display: "flex",
                                                                                            justifyContent: "center",
                                                                                            paddingTop: "20px",
                                                                                            fontWeight: "bold",
                                                                                        }}
                                                                                    >
                                                                                        Detalle del tatuaje:
                                                                                    </Typography>
                                                                                    <Divider />
                                                                                    <List dense={dense}>
                                                                                        <ListItem style={{ paddingBottom: "" }}
                                                                                        >
                                                                                            <ListItemText
                                                                                                primary="Descripci??n "
                                                                                                primaryTypographyProps={{
                                                                                                    fontSize: 18,
                                                                                                    fontWeight: 'medium',
                                                                                                    letterSpacing: 0,
                                                                                                }}
                                                                                                style={{ textAlign: "start", paddingRight: "62px" }}
                                                                                            />
                                                                                            <InputField name={`social.${index}.${social_tatto_descri.name}`} label={social_tatto_descri.label}
                                                                                                fullWidth />
                                                                                        </ListItem>
                                                                                        <Divider />
                                                                                        <ListItem
                                                                                        >

                                                                                            <ListItemText
                                                                                                primary="Significado"
                                                                                                primaryTypographyProps={{
                                                                                                    fontSize: 18,
                                                                                                    fontWeight: 'medium',
                                                                                                    letterSpacing: 0,
                                                                                                }}
                                                                                                style={{ textAlign: "start", paddingRight: "65px" }}
                                                                                            />
                                                                                            <InputField name={`social.${index}.${social_tatto_sign.name}`} label={social_tatto_sign.label}

                                                                                                fullWidth />
                                                                                        </ListItem>
                                                                                        <Divider />
                                                                                        <ListItem
                                                                                        >

                                                                                            <ListItemText
                                                                                                primary="Ubicaci??n"
                                                                                                primaryTypographyProps={{
                                                                                                    fontSize: 18,
                                                                                                    fontWeight: 'medium',
                                                                                                    letterSpacing: 0,
                                                                                                }}
                                                                                                style={{ textAlign: "start", paddingRight: "75px" }}
                                                                                            />
                                                                                            <InputField name={`social.${index}.${social_tatto_ubi.name}`} label={social_tatto_ubi.label}
                                                                                                fullWidth />
                                                                                        </ListItem>
                                                                                        <Divider />
                                                                                        <ListItem
                                                                                        >

                                                                                            <ListItemText
                                                                                                primary="Fotograf??a"
                                                                                                primaryTypographyProps={{
                                                                                                    fontSize: 18,
                                                                                                    fontWeight: 'medium',
                                                                                                    letterSpacing: 0,
                                                                                                }}
                                                                                                style={{ textAlign: "start", paddingRight: "75px" }}

                                                                                            />
                                                                                            <InputField name={`social.${index}.${social_tatto_fot.name}`} label={social_tatto_fot.label} 
                                                                                            value={archivoUrl}
                                                                                            fullWidth />
                                                                                            <IconButton color="primary" aria-label="upload picture" component="label" >
                                                                                                <input hidden accept="image/*" type="file" onChange={(e)=> {gettingValue(`social.${index}.${social_tatto_fot.name}`, e)}} />
                                                                                                <PhotoCamera />
                                                                                                {/* , archivoHandler(`social.${index}.${social_tatto_fot.name}`, e) */}
                                                                                            </IconButton>
                                                                                        </ListItem>
                                                                                    </List>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Paper>
                                                                    </Box>
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
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </>
        )
    );
}
