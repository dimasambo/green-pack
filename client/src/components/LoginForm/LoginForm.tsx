import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {login, setError} from "../../Redux/auth/auth-slice";
import {useNavigate} from "react-router-dom";

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

export const LoginForm: React.FC = () => {
    const navigate = useNavigate()
    const classes = useStyles();

    const dispatch = useDispatch()

    const handleSubmit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        // @ts-ignore
        await dispatch(login({email: values.email, password: values.password}))
        setSubmitting(false);
        navigate('/profile')
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, touched, errors }) => (
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
                            helperText={<ErrorMessage name="email" />}
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
                            helperText={<ErrorMessage name="password" />}
                        />
                    </div>
                    <Button
                        style={{margin: '10px 0'}}
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Login'}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
