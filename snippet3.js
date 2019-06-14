import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles.css";
import Snackbar from "@material-ui/core/Snackbar";
import { MySnackbarContentWrapper } from "../../../../Components/Notification/snackbarcontent";

class Reciever extends Component {
  state = {
    id: "",
    open: false,
    hasBeenNotified: false
  };
  handleClose = () => {
    this.setState({ open: false });
    this.props.clearError();
  };
  componentDidUpdate() {
    if (this.props.error !== null && this.state.open === false) {
      return this.handleNotification();
    }
  }
  handleNotification() {
    this.setState({
      open: true,
      errorMessage: this.props.error
    });
  }
  handleInputChange = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ id: value });
  };
  handleSubmit() {
    const { fetchReciever } = this.props;
    const uniqueId = this.state.id;
    fetchReciever(uniqueId);
  }

  render() {
    const { open, errorMessage } = this.state;
    const { redirect, reciever } = this.props;
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: redirect,
            state: { reciever }
          }}
        />
      );
    }
    return (
      <div className="select_wrapper">
        <div className="Sign input_wrapper">
          <input
            placeholder="please input the recievers id"
            value={this.state.id}
            onChange={this.handleInputChange}
          />
          {this.props.reciever ? (
            <div>the recievers name is: {this.props.reciever.firstname}</div>
          ) : (
            ""
          )}
          <button onClick={() => this.handleSubmit()}>Enter</button>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="error"
            message={errorMessage}
          />
        </Snackbar>
      </div>
    );
  }
}
export default Reciever;
