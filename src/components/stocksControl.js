import React from "react";
import Slider from "@material-ui/lab/Slider";

/*
overriding css classes: https://material-ui.com/customization/overrides/#overriding-with-classes
slider api: https://material-ui.com/lab/api/slider/#css-api
slider example: https://material-ui.com/lab/slider/
*/

class StocksControl extends React.Component {
  state = {
    value: 0,
  };

  render () {
    const { maxDate, minDate } = this.props;
    const { value } = this.state;

    return (
      <div>
        Control here
        <div className={"stocks--slider"}>
          {value}
          <Slider
            max={maxDate}
            min={minDate}
            onChange={this.handleSlide}
            step={1}
            value={value}
          />
        </div>
      </div>
    );
  }

  handleSlide = (event, value) => {
    this.setState({ value });
  };
}

export default StocksControl;
