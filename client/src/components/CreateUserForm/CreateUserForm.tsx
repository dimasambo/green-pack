import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {createUser, login, register, setError} from "../../Redux/auth/auth-slice";
import {useNavigate} from "react-router-dom";
import {authApi} from "../../api/api";
import {State} from "../../Redux/redux-store";
import {FileUpload} from "../FileUpload/FileUpload";

interface FormValues {
    email: string;
    password: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const initialValues: FormValues = {
    email: '',
    password: '',
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            flexDirection: 'column'
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export const CreateUserForm: React.FC = () => {
    const [picture, setPicture] = useState<any>(null)
    const navigate = useNavigate()
    const classes = useStyles();

    const dispatch = useDispatch()

    const handleSubmit = (values: FormValues, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const formData = new FormData()
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('image', picture)
        // @ts-ignore
        dispatch(createUser(formData))
            .then(() => {
                setSubmitting(false)
                values.email = ''
                values.password = ''
                setPicture(null)
            })
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({isSubmitting, touched, errors}) => (
                <Form className={classes.root}>
                    <div style={{display: 'table-row'}}>
                        <Field
                            style={{margin: '5px auto'}}
                            name="email"
                            as={TextField}
                            label="Email"
                            variant="outlined"
                            fullWidth
                            error={!!(touched.email && errors.email)}
                            helperText={<ErrorMessage name="email"/>}
                        />
                        <Field
                            style={{margin: '5px auto'}}
                            name="password"
                            as={TextField}
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            error={!!(touched.password && errors.password)}
                            helperText={<ErrorMessage name="password"/>}
                        />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '130px', padding: '10px 0'}}>
                            <FileUpload setFile={setPicture} accept={'image/*'}>
                                <Button>Upload Image</Button>
                            </FileUpload>
                            {picture && <div>1 image uploaded</div>}
                        </div>
                    </div>
                    <Button
                        style={{margin: '10px 0'}}
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Create account'}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
