import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

/** charts */
import MultipleDateAxesChart from "../../containers/MultipleDateAxesChart/MultipleDateAxesChart";

class EnergyConsumption extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <span className="m-0">{title}</span>
        </CardHeader>
        <CardBody className="pt-0">
          {/* <MultipleDateAxesChart /> */}
          {/* <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="d-flex mb-2 mb-sm-0">
              <RangeDatePicker />
            </Col>
            <Col>
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >
                View Full Report &rarr;
              </Button>
            </Col>
          </Row>
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          /> */}
        </CardBody>
      </Card>
    );
  }
}

EnergyConsumption.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

EnergyConsumption.defaultProps = {
  title: "Weekly Schedule"
};

export default EnergyConsumption;
