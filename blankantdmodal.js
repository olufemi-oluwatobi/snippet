import React, { Component } from "react";
import { Modal, Button } from "antd";


class Modal extends Component {
  
  render() {
    const { visible, loading } = this.props;
    return (
      <div>
        <Modal
          visible={visible}
          title={null}
          closable={false}
          style={{ top: 116, width: 20 }}
          width={400}
          footer={null}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left"
            }}
          >
            <span
              style={{
                fontFamily: "Univers 55",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#172B4D"
              }}
            >
              Survey Submitted
            </span>
            <p
              style={{
                fontFamily: "Univers 55",
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#172B4D"
              }}
            >
              You’ve successfully submitted your,
              you answered all questions. What would you like to do?
            </p>
            <div>
              <a style={{ float: "left" }} href="/">
                <Button key="back">Go to home</Button>
              </a>
             
                <a
                  style={{ float: "right" }}
                >
                  <Button key="submit" type="primary">
submit
</Button>
                </a>
   
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SubmitModal;
