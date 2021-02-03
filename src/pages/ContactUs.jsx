import React from "react";
import { Row, Col, Card, Form, Input, Radio } from "antd";

const { TextArea } = Input;

function ContactUs() {
  const contactMethodOptions = [
    { label: "Email", value: "Email" },
    { label: "Phone", value: "Phone" },
  ];

  return (
    <div className="contact-us-items">
      <h1>Contact Us</h1>
      <Row className="painting-contact-card">
        <Col span={15}>
          <Card
            title="Free Contactless Quote"
            style={{ width: 300 }}
            headStyle={{ fontWeight: "bold" }}
          >
            <Row>
              <Col span={24}>
                <Form.Item label="Client Name" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>
                <Form.Item label="Email Address" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>
                <Form.Item label="Phone Number" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>
                <Form.Item label="Zip Code" style={{ fontWeight: "bold" }}>
                  <Input style={{ width: 200 }}></Input>
                </Form.Item>

                <Form.Item
                  label="Preferred Contact Method"
                  style={{ fontWeight: "bold" }}
                >
                  <Radio.Group options={contactMethodOptions}></Radio.Group>
                </Form.Item>

                <Form.Item
                  label=" Additional Messages"
                  style={{ fontWeight: "bold" }}
                >
                  <TextArea rows={4}></TextArea>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
