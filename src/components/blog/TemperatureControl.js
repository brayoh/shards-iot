import React from "react";
import styled from "styled-components";

/** Presentational */
import { Card, CardHeader, CardBody } from "shards-react";

/** Containers */
import RoundSlider from "../../containers/RangerSlider";

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  box-shadow: none;
  color: #222b45;
  font-family: Open Sans, sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin-bottom: 1.875rem;
  padding: 1rem 2rem;
`;

class TemperatureControl extends React.Component {
  state = {
    value: 44,
    tempControlStatus: "now"
  };

  render() {
    const { value } = this.state;

    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <span className="m-0">Temperature</span>
        </CardHeader>
        <CardBody
          className="d-flex py-0 more-padding"
          style={{ justifyContent: "center" }}
        >
          <SliderContainer>
            <RoundSlider
              sliderType="min-range"
              circleShape="pie"
              value={value}
              startAngle={315}
              radius={150}
              width={20}
              handleSize="+16"
              handleShape="dot"
              editableTooltip={false}
              tooltipFormat={args =>
                `<p class="round-slider-temp__text">now</p><p className="round-slider-temp__now">${args.value}&deg</p>`
              }
              lineCap="round"
              min={5}
              max={65}
            />
          </SliderContainer>
        </CardBody>
      </Card>
    );
  }
}

export default TemperatureControl;
