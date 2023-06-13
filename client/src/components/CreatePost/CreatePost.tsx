import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';
import {Formik, Form, Field, FieldArray} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {setPost} from "../../Redux/posts/posts-slice";
import {FileUpload} from "../FileUpload/FileUpload";

interface CreatePostProps {
    userId: number
}

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        marginBottom: '50px'
    },
    input: {
        margin: '5px 0'
    },
}));

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
});

export const CreatePost: React.FC<CreatePostProps> = ({userId}) => {
    const [picture, setPicture] = useState<any>(null)
    const classes = useStyles();

    const dispatch = useDispatch()

    const handleSubmit = (values: { title: string; content: string; images: any }) => {
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('content', values.content)
        formData.append('userId', String(userId))
        formData.append('images', picture)
        // @ts-ignore
        dispatch(setPost(formData)).then(() => {
            values.title = ''
            values.content = ''
            setPicture(null)
        })
    };

    return (
        <Formik
            initialValues={{title: '', content: '', images: []}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({values, errors, touched}) => (
                <Form className={classes.form}>
                    <Field
                        as={TextField}
                        name="title"
                        label="Title"
                        variant="outlined"
                        className={classes.input}
                        error={touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
                    />
                    <Field
                        as={TextField}
                        name="content"
                        label="Content"
                        variant="outlined"
                        className={classes.input}
                        multiline
                        rows={4}
                        error={touched.content && !!errors.content}
                        helperText={touched.content && errors.content}
                    />

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '130px', padding: '10px 0'}}>
                            <FileUpload setFile={setPicture} accept={'image/*'}>
                                <Button>Upload Image</Button>
                            </FileUpload>
                            {picture && <div>1 image uploaded</div>}
                        </div>

                        <Button style={{
                            height: '40px',
                            margin: 'auto 0',
                            width: '200px'
                        }} type="submit" variant="contained" color="primary">
                            Post
                        </Button>
                    </div>

                    {/*<FieldArray name="images">
                        {(arrayHelpers) => (
                            <div>
                                {values.images.map((image, index) => (
                                    <div key={index}>
                                        <input
                                            type="file"
                                            name={`images.${index}`}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                arrayHelpers.replace(index, event.target.files && event.target.files[0])
                                            }
                                        />
                                        <Button
                                            type="button"
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => arrayHelpers.remove(index)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => arrayHelpers.push(null)}
                                >
                                    Add Image
                                </Button>
                            </div>
                        )}
                    </FieldArray>*/}
                </Form>
            )}
        </Formik>
    );
};
