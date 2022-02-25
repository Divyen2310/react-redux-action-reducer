import { Formik, Form, Field } from 'formik'
import React from 'react'
import { X } from 'react-feather'
import { Button, Col, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components'
import * as yup from 'yup'
import CustomField, { Pre } from '../Components/CustomField'
import "../style/form.mudule.scss"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const FormikForm = () => {

    const ValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .max("10", "Company name can have maximum 10 characters")
            .required("Please enter first name"),
        lastName: yup
            .string()
            .max("10", "Company name can have maximum 10 characters")
            .required("Please enter last name"),
        email: yup
            .string()
            .required("Please enter email")
            .email("Invalid Email"),
        phone_number: yup.string()
            .required("required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "to short")
            .max(10, "to long"),
    })

    const handleClickSubmit = (values) => {
        console.log("Button click", values);
    }
    return (
        <div>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone_number: "",
                }}
                validationSchema={ValidationSchema}
                onSubmit={handleClickSubmit}
            >
                <Form>

                    <Field name="firstName">
                        {({
                            field,
                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                        }) => (
                            <>
                                <Pre>{JSON.stringify(touched)}</Pre>
                                <Pre>{JSON.stringify(errors)}</Pre>
                                <Pre>
                                    {JSON.stringify(field)}{console.log("field", field)} {JSON.stringify(meta)}
                                </Pre>
                                <FormGroup row>
                                    <Label sm="2" for={field.name}>
                                        Company Name <span className="mandatory">*</span>
                                    </Label>
                                    <Col sm="10">
                                        <Input
                                            value={field.value || ""}
                                            type="text"
                                            {...field}
                                            // disabled={this.props.newelyAddedCustomer}
                                            placeholder="Name of company"
                                            className={`${errors[field.name] && touched[field.name]
                                                ? " is-invalid"
                                                : ""
                                                }`}
                                        />
                                        {/* <Button type='button' >
                                            <X style={{color:"red"}}/>
                                        </Button> */}
                                        <FormFeedback>
                                            {errors ? errors[field.name] : ""}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>


                            </>
                        )}
                    </Field>
                    <Field name="lastName">
                        {({
                            field,
                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                        }) => (
                            <>
                                <Pre>
                                    {JSON.stringify(field)}{console.log("field", field)}{JSON.stringify(meta)}
                                </Pre>
                                <FormGroup row>
                                    <Label sm="2" for={field.name}>Name <span className="mandatory">*</span> </Label>
                                    <Col sm="10">
                                        <Input
                                            value={field.value || ""}
                                            type="text"
                                            {...field}
                                            // disabled={this.props.newelyAddedCustomer}
                                            placeholder="Name"
                                            className={`${errors[field.name] && touched[field.name]
                                                ? " is-invalid"
                                                : ""
                                                }`}
                                        />
                                        {/* <Button type='button' >
                                            <X style={{color:"red"}}/>
                                        </Button> */}
                                        <FormFeedback>
                                            {errors ? errors[field.name] : ""}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                            </>
                        )}
                    </Field>
                    <Field name="email">
                        {({
                            field,
                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                            meta,
                        }) => (
                            <>
                                <Pre>
                                    {JSON.stringify(field)}{console.log("field", field)}{JSON.stringify(meta)}
                                </Pre>
                                <FormGroup row>
                                    <Label sm="2" for={field.name}>Email <span className="mandatory">*</span> </Label>
                                    <Col sm="10">
                                        <Input
                                            value={field.value || ""}
                                            type="text"
                                            {...field}
                                            // disabled={this.props.newelyAddedCustomer}
                                            placeholder="Email"
                                            className={`${errors[field.name] && touched[field.name]
                                                ? " is-invalid"
                                                : ""
                                                }`}
                                        />
                                        {/* <Button type='button' >
                                            <X style={{color:"red"}}/>
                                        </Button> */}
                                        <FormFeedback>
                                            {errors ? errors[field.name] : ""}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                            </>
                        )}
                    </Field>
                    <CustomField name="phone_number" lable='Phone Number' />

                    <Button color="primary" outline type="submit" >Submit</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormikForm

