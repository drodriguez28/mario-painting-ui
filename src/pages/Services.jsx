import React from "react";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

const Services = () => {
  return (
    <div className="services-items">
      <h1>Services</h1>
      <Row className="painting-service-card">
        <Col xs={24} xl={8}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://i.pinimg.com/originals/4a/4e/06/4a4e06dceb5c0f7b95246e1d9dbe292f.jpg"
              />
            }
          >
            <Meta
              title="Interior Painting "
              description="At Mario's Painting of Roswell, our expert interior painters know the first step is finding the perfect color.We have an extensive selection of colors, shades, and tones available in the quality paints and finishes offered by Sherwin Williams and Benjamin Moore. We can even give you an opportunity to test a color by applying a sample before work begins."
            />
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://www.themakerista.com/wp-content/uploads/2018/07/The-Makerista-White-House-Painting-Vinyl-Sherwin-Williams-Moderne-White-IMG_1330.jpg"
              />
            }
          >
            <Meta
              title="Exterior Painting "
              description="Whether your exterior is a chipped, fading mess, or you could simply use an exterior update, you can count on Mario's Painting of Roswell for unmatched results. Our combination of industry expertise, and top-notch products have made us the first choice of exterior painters for homeowners in metro Atlanta areas."
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Services;
