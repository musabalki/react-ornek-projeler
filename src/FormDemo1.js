import React, { Component } from 'react';

class FormDemo1 extends Component {
    state={
        userName:'',city:''
    }
    changeUser=(e)=>{
        //this.setState({userName:e.target.value})
        let name=e.target.name;
        let value=e.target.value;
        this.setState({[name]:value})
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onClick={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input name="userName" onChange={this.changeUser} type="text" />
                    <h3>{this.state.userName}</h3>

                    <h3>City</h3>
                    <input name="city" onChange={this.changeUser} type="text" />
                    <h3>{this.state.city}</h3>  

                    <input  type="submit" value="Gönder" />
                </form>
            </div>
        );
    }
}

export default FormDemo1;