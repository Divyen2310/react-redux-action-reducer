import { Formik, Form, Field } from 'formik'
import React from 'react'
import { Button } from 'reactstrap'
import * as yup from 'yup'
import CustomField, { Pre } from '../Components/CustomField'
import "../style/form.mudule.scss"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const FormikForm = () => {

    const ValidationSchema = yup.object().shape({
        username: yup
            .string()
            .max("10", "Company name can have maximum 10 characters")
            .required("Please enter first name"),
        name: yup
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
                    username: '',
                    name: '',
                    email: '',
                    phone_number: "",
                }}
                validationSchema={ValidationSchema}
                onSubmit={handleClickSubmit}
            >
                {/* {(rest) => (
                    <>
                       
                        <Pre> // show all avilable values
                            {JSON.stringify({ ...rest })}
                        </Pre> */}

                {/* {({ touched, errors }) => (
                    <>
                        <Pre>{JSON.stringify(touched)}</Pre>
                        <Pre>{JSON.stringify(errors)}</Pre> */}
                <Form>
                    <CustomField name="username" lable='User Name' />
                    <CustomField name="name" lable='Name' />
                    <CustomField name="email" lable='Email' />
                    <CustomField name="phone_number" lable='Phone Number' />
                    <Button color="primary" outline type="submit" >Submit</Button>
                </Form>
                {/* </>
                )} */}
            </Formik>
        </div >
    )
}

export default FormikForm

