import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const ProjectForm = (props) => {
  const validationSchema = Yup.object().shape({
    projectname: Yup.string().required("Rquired"),
    professorname: Yup.string().required("Rquired"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Rquired"),
    overview: Yup.string().required("Rquired"),
    prereq: Yup.string().required("Rquired"),
    students: Yup.number()
      .positive("Invalid number")
      .integer("Invalid number")
      .required("Rquired"),
    duration: Yup.number()
    .positive("Invalid month")
    .integer("Invalid month")
    .required("Rquired"),
    vacancy: Yup.number()
      .positive("Invalid")
      .integer("Invalid ")
      .required("Rquired"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>Project Title
            <Field name="projectname" type="text" 
                className="form-control" />
            <ErrorMessage
              name="projectname"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Professor Name
            <Field name="professorname" type="text" 
                className="form-control" />
            <ErrorMessage
              name="professorname"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Email
            <Field name="email" type="text" 
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Overview of the project
            <Field name="overview" type="text" 
                className="form-control" />
            <ErrorMessage
              name="overview"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Pre-requisite
            <Field name="prereq" type="text" 
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Students Required
            <Field name="students" type="number" 
                className="form-control" />
            <ErrorMessage
              name="students"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Duration In Months
            <Field name="duration" type="number" 
                className="form-control" />
            <ErrorMessage
              name="duration"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Branch
            <Field name="branch" type="text" 
                className="form-control" />
            <ErrorMessage
              name="branch"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>Vaccancy
            <Field name="vacancy" type="number" 
                className="form-control" />
            <ErrorMessage
              name="vacancy"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br/>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
          <br/>
        </Form>
      </Formik>
    </div>
  );
};
  
export default ProjectForm; 