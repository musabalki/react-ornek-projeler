import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class FormDemo2 extends Component {
    state = {
        email: '', password: '', city: '', description: ''
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email + ' kaydedildi');
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                           <option>City 1 </option>
                           <option>City 2</option>
                           <option>City 3</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        );
    }
}

export default FormDemo2;