import React from "react";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

function Services() {
  return (
    <div className="services-items">
      <h1>Services</h1>
      <Row>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Interior Painting " description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Exterior Painting " description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Services;
