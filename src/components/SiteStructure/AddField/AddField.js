import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './AddField.css';

 class AddField extends Component { 

        fieldLabelRef = React.createRef();
        typeOptRef = React.createRef();
        typeRef = React.createRef();
        uniqueRef = React.createRef();
        visibleRef = React.createRef();
        requiredRef = React.createRef();
        cssClassNameRef = React.createRef();
        customCsslRef = React.createRef();

  handelClick = (e) => {
    e.preventDefault();
    const field = {
        fieldLabel: this.fieldLabelRef.current.value,
        machineName: this.fieldLabelRef.current.value.toLowerCase().replace(/\s/g, ''),
        type: this.typeRef.current.value,
        typeOption: this.typeOptRef.current.value,
        unique: this.uniqueRef.current.checked,
        visible: this.visibleRef.current.checked,
        required: this.requiredRef.current.checked,
        cssClasses: this.cssClassNameRef.current.value,
        customCss: this.customCsslRef.current.value
    }
    this.props.addFields(field);
  }

    render() {
        
        

        return(
            <div className="addfield">
            <h4 className="header">Add Your Content Fields</h4>
            <Container className="AddField">
                <Form >
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Field Label</Label>
                                <Input name="fieldLabel" innerRef={this.fieldLabelRef} />    
                            </FormGroup>
                            
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="exampleSelect">Type</Label>
                                <Input name="type" type="select" id="exampleSelect" innerRef={this.typeRef}>
                                    <option>Button</option>
                                    <option>Checkbox</option>
                                    <option>Color</option>
                                    <option>Date</option>
                                    <option>Datetime-local</option>
                                    <option>Email</option>
                                    <option>File</option>
                                    <option>Hidden</option>
                                    <option>Image</option>
                                    <option>Month</option>
                                    <option>Number</option>
                                    <option>Password</option>
                                    <option>Radio</option>
                                    <option>Range</option>
                                    <option>Reset</option>
                                    <option>Search</option>
                                    <option>Telephone</option>
                                    <option>Text</option>
                                    <option>Time</option>
                                    <option>Url</option>
                                    <option>Week</option>
                                </Input>
                            </FormGroup>
                                
                            
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">Type-Option</Label>
                                <Input name="typeOption" type="textarea" id="exampleText" innerRef={this.typeOptRef} />
                            </FormGroup>
                            
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">CSS-ClassName</Label>
                                <Input name="cssClassName" type="textarea" id="exampleText" innerRef={this.cssClassNameRef}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">Custom CSS</Label>
                                <Input name="customCss" type="textarea" id="exampleText" innerRef={this.customCsslRef} />
                            </FormGroup>
                           
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup check inline>
                                    <Label check>
                                        <Input name="required" type="checkbox" innerRef={this.requiredRef} /> Required
                                    </Label>
                             </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup check inline>
                                <Label check>
                                    <Input name="unique" type="checkbox" innerRef={this.uniqueRef} /> Unique
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup check inline>
                                <Label check>
                                    <Input name="visible" type="checkbox" innerRef={this.visibleRef} /> Visible
                                </Label>
                            </FormGroup>
                        </Col>
                         <Button onClick={this.handelClick} className="btn">Add</Button>

                    </Row>
                </Form>
            </Container>
            </div>
        );
    }
}

export default AddField;