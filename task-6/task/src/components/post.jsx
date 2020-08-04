import React, { Component } from "react";
import axios from "axios";
// import { Table, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Button , Form } from "react-bootstrap";


// import formData from "./components/form";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      put: [],
      submit:true,
      deleteMsg: " ",
      post: [],
      formData:[{
        userId:' ',
        title:' ',
        discription:' '
      }]
      
    };
  }

  updateData(user) {
    const data = {
      id: "1001",
      userId: "1001",
      title: "okay lets update",
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/1`, data)
      .then((res) => {
        this.setState({ put: res.data });
        console.log(user.put);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deleteData(user) {
    const data = {
      id: "1001",
      userId: "1001",
      title: "okay lets update",
    };
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/1`,data)
      .then((res) => {
        this.setState({ deleteMsg: "deleted successfully" });
        console.log(user.deleteMsg);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  postData(user) {
    // console.log(user);
    const data = {
      userId: 220,
      id: 220,
      title: "trying posting is funny",
      body: "how's your weeked going buddy!",
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/posts/1`,data)
      .then((res) => {
        this.setState({ post: res.data });
        console.log(user.post);
      })
      .catch((err) => {
        console.log(err);
      });
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
  
  // loading the list before rendering completly
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      this.setState({ person: res.data });
      console.log(this.state.person);
    });
  }
  render() {
    return (
      <div>
      {/* navigation section */}
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">
            <span className="btn btn-dark">Basic Crud App</span>
          </span>
        </nav>
          {/* creating form */}
        <section>
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
        </section>
        {/* displaying the list */}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>opeartions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.person.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>
                  <Button variant="primary" onClick={this.postData(user)}>
                    Add
                  </Button>
                  <Button variant="danger" onClick={this.deleteData(user)}>
                    Delete
                  </Button>
                  <Button variant="success" onClick={this.updateData(user)}>
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Post;
