import { Field } from 'formik'
import React from 'react'
import { Col, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'


export const Pre = styled.div`
    margin:5px;
    padding: 5px;
    background-color: #d6d2d2b5;
    display: none;   
    /* visibility: hidden;  // comoonent wraper show  */
`

const CustomField = ({ name, lable }) => <Field name={name}>
    {({
        field,
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
    }) => (
        <>
            {/* <Pre>
                {JSON.stringify(field)}{console.log("field", field)}{JSON.stringify(meta)}
            </Pre> */}
            <FormGroup row>
                <Label sm="2" for={field.name}>{lable}<span className="mandatory">*</span> </Label>
                <Col sm="10">
                    <Input
                        value={field.value || ""}
                        type="text"
                        {...field}
                        autoComplete="off"
                        // disabled={this.props.newelyAddedCustomer}
                        placeholder={lable}
                        className={`${errors[field.name] && touched[field.name]
                            ? " is-invalid"
                            : ""
                            }`}
                    />
                    <FormFeedback>
                        {errors ? errors[field.name] : ""}
                    </FormFeedback>
                </Col>
            </FormGroup>
        </>
    )}
</Field>


CustomField.propTypes = {
    name: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
}
export default CustomField;  
