import React, { PureComponent } from 'react';
import { Form } from "react-bootstrap";

class formData extends Component {
    constructor(){
        super(props)
    
        this.state = { 
        
         }
    }
    handleSubmit(event) {
    event.preventDefault();
    // routing
    console.log(this.state.post);
    axios.post(`https://crudcrud.com/api/228a0ca63ef94aa3a30de79237b11a81/formData`)
   }
   handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.tagret.value,
    });
   };
    
    render() { 
        return (  
            <Form method="post" onSubmit={this.handleSubmit}>
            <label>Enter Your Id:{this.state.formData.userId}</label>

            <input
              type="text"
              name="userId"
              value={this.state.formData.userId}
              onChange={this.handleInputChange}
            />

            <label>Enter Your Title: {this.state.formData.title}</label>

            <input
              type="text"
              name="title"
              value={this.state.formData.title}
              onChange={this.handleInputChange}
            />

            <label>
              Enter Your Description: {this.state.formData.discription}
            </label>

            <input
              type="text"
              name="discription"
              value={this.state.formData.discription}
              onChange={this.handleInputChange}
            />

            <button type="submit" name="submit">Submit</button>
          </Form>
        );
    }
}
 
export default formData;