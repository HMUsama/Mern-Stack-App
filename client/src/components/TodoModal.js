import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    ModalBody,
    ModalHeader,
    Modal,
    Button,
    Input,
    Label
        } from 'reactstrap';
import {connect} from 'react-redux';
import { addTodos } from '../store/action/TodosAction'
// import uuid from 'uuid'


class TodoModal extends Component {
    state= {
        modal :false,
        name: ''
    }

    toggle = () =>{
        this.setState({
            modal : !this.state.modal
        })
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    onSubmit = e=>{
        e.preventDefault();
        const  newTodos={
            // id:uuid(),
            name:this.state.name
        }
        this.props.addTodos(newTodos)
        this.toggle();
    }

  render() {
    return (
        <div>
            <Button 
                color="dark" style={{marginBottom:'2rem'}}
                onClick={this.toggle}
            > Add Name
            </Button> 
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
             <ModalHeader toggle={this.toggle}> Add Name OF Student</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="todo">Todo</Label>
                        <Input
                            type="text"
                            name="name"
                            id="todo"
                            placeholder="Add Name OF Student"
                            onChange={this.onChange}
                            />
                        <Button
                        color="dark"
                        style={{marginTop:'2rem'}} block>Add Name</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
            </Modal>
        </div>
    );
  }
}



const mapStateToProps = (state)=>({
    todo:state.todo
  })
  
  
  export default connect(mapStateToProps,{addTodos})(TodoModal);
// export default TodoModal;
