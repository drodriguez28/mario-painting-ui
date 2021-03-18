import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Radio,
  Checkbox,
  Button,
  Modal,
  Alert,
} from "antd";

const { TextArea } = Input;

function ContactUs() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const contactMethodOptions = [
    { label: "Email", value: "Email" },
    { label: "Phone", value: "Phone" },
  ];

  const typeofServiceOptions = [
    { label: "Interior", value: "Interior" },
    { label: "Exterior", value: "Exterior" },
  ];

  const displaySuccessAlert = () => {
      return (
        <Alert
          message="Your information was successfully recorded."
          type="success"
          showIcon
          closable
        />
      );
    };

  return (
    <div className="contact-us-items">
      <h1>Contact Us</h1>

      {displaySuccessAlert()}
      <Row className="painting-contact-card">
        <Col span={10}>
          <Card
            title="Insert Info for an Estimate !"
            style={{ width: 600 }}
            headStyle={{ fontWeight: "bold" }}
          >
            <Row>
              <Col span={25}>
                <Form.Item label="First Name" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>
                <Form.Item label="Last Name" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>
                <Form.Item label="Email Address" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>
                <Form.Item
                  label=" Street Address"
                  style={{ fontWeight: "bold" }}
                >
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>
                <Form.Item label="City" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>
                <Form.Item label="Zip Code" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 160 }}></Input>
                </Form.Item>
                <Form.Item label="Phone Number" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>

                <Form.Item
                  label="Preferred Contact Method"
                  style={{ fontWeight: "bold" }}
                >
                  <Radio.Group options={contactMethodOptions}></Radio.Group>
                </Form.Item>

                <Form.Item
                  label="Type of Painting Service (if both check both)"
                  style={{ fontWeight: "bold" }}
                >
                  <Checkbox.Group options={typeofServiceOptions} />
                </Form.Item>

                <Form.Item
                  label=" Additional Messages"
                  style={{ fontWeight: "bold" }}
                >
                  <TextArea rows={4}></TextArea>
                </Form.Item>

                <Button type="primary" onClick={showModal}>
                  Submit
                </Button>
                <Modal
                  title="Please confirm"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Are you sure the information you provided is correct ?</p>
                </Modal>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
