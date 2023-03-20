import React from "react";
import { Button, Form as FormTag } from "react-bootstrap";
import "./ProjectForm.scss";

const ProjectForm = () => {
  return (
    <FormTag id="ProjectForm" className="app__flexColumn">
      <FormTag.Group className="mb-3 w-100" controlId="formTitle">
        <FormTag.Label>Title</FormTag.Label>
        <FormTag.Control type="text" placeholder="Enter title" required/>
      </FormTag.Group>
      <Button variant="primary" type="submit" className="w-25">
        Submit
      </Button>
    </FormTag>
  );
};

export default ProjectForm;
