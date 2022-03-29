import { Formik, Form } from 'formik'
import { Button } from 'reactstrap'
import Swal from 'sweetalert2'
import * as yup from 'yup'
import CustomField, { Pre } from '../../Components/CustomField'

const ValidationSchema = yup.object().shape({
  name: yup
    .string()
    .max("10", "Company name can have maximum 10 characters")
    .required("Please enter name"),
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid Email"),
})
const ContactForm = () => {
  const handleClickSubmit = async (value, { resetForm }) => {
    console.log("value", value);
    const res = await fetch("https://react-form-920d5-default-rtdb.firebaseio.com/reactform.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    })
    if (res) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      resetForm();
    }
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={handleClickSubmit}
    >
      {({ resetForm }) => {
        return (
          <Form>
            <CustomField name="name" lable='Name' />
            <CustomField name="email" lable='Email' />
            <Button color="primary" outline type="submit" >Submit</Button>
          </Form>
        )
      }}
    </Formik>
  )
}
export default ContactForm