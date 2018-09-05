import * as d3 from "d3";
import React from "react";

class StockGraph extends React.Component {
  render () {
    console.log(this.props.stocks);
    return (
      <div id="chart-area"></div>
    );
  }

  componentDidUpdate () {
    const { stocks } = this.props;
    if (stocks != null) {
      this.initVisual(stocks);
      this.updateVisual(stocks);
    }
  }

  getEMString = s => `${s}em`;

  initVisual = stocks => {
    const margin = { left:80, right:100, top:50, bottom:100 },
      height = 500 - margin.top - margin.bottom, 
      width = 800 - margin.left - margin.right;
    const svg = d3.select("#chart-area").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("background-color", "grey");

    const g = svg.append("g")
      .attr("transform", "translate(" + margin.left + 
          ", " + margin.top + ")");

    // Time parser for x-scale
    const parseTime = d3.timeParse("%Y-%m-%d");
    // For tooltip
    const bisectDate = d3.bisector(function(d) { return d.year; }).left;

    // Scales
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);
    const color = d3.scaleOrdinal()
      .domain(Object.keys(stocks))
      .range(d3.schemeCategory10);

    // Axis generators
    const xAxisCall = d3.axisBottom();
    const yAxisCall = d3.axisLeft();
      // .ticks(6)
      // .tickFormat(function(d) { return parseInt(d / 1000) + "k"; });

    // Axis groups
    const xAxis = g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")");
    const yAxis = g.append("g")
      .attr("class", "y axis");

    // x axis label
    xAxis.append("text")
      .attr("y", 0)
      .attr("x", width / 2)
      .style("font-size", "3em")
      .attr("text-anchor", "middle")
      .text("Date")
      .attr("fill", "blue");

    // Y-Axis label
    yAxis.append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .attr("fill", "#5D6971")
      .text("Price ($)")
      .style("font-size", "3em");

    // Line path generator
    const line = d3.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.val); });

    // Legend
    const legend = g.append("g")
      .attr("transform", `translate(${width - 10}, ${0})`)
      .attr("height", 50)
      .attr("width", 50);
    Object.keys(this.props.stocks).forEach((d, i) => {
      const legendRow = legend.append("g")
        .style(
          "transform", `translate(0em, ${this.getEMString(i * 2)})`
        );

      legendRow.append("rect")
        .attr("width", this.getEMString(1))
        .attr("height", this.getEMString(.3))
        .attr("y", this.getEMString(.5))
        .attr("fill", color(d));
      legendRow.append("text")
        .attr("x", this.getEMString(-1))
        .attr("y", this.getEMString(1))
        .attr("text-anchor", "end")
        .text(d);
    });

    // bind to this for use in other functions
    const that = {
      bisectDate, color, g, height, line, parseTime, width, x, xAxis,
      xAxisCall, y, yAxis, yAxisCall
    };
    for (let k in that) {
      this[k] = that[k];
    }
  };

  updateVisual = stocks => {
    const {
      g, color, height, line, parseTime, x, xAxis, xAxisCall, y, yAxis,
      yAxisCall
    } = this;

    const formatTime = d3.timeFormat("%B %d, %Y");

    const stockMap = Object.keys(stocks).reduce((collector, ticker) => {
      collector[ticker] = stocks[ticker].map((d, i) => ({
        date: parseTime(d.date),
        val: d.close
      }));

      return collector;
    }, {});
    // console.log(stockMap);

    // set x domain
    const sampleKey = Object.keys(stockMap)[0];
    x.domain(d3.extent(stockMap[sampleKey], d => d.date));

    const prices = Object.keys(stockMap).reduce((allPrices, key) => {
      return [...allPrices, ...stockMap[key].map(d => d.val)]
    }, []);
    // console.log(prices);
    y.domain([
      0,
      d3.max(prices)
    ]);

    // generate axes
    xAxis.call(xAxisCall.scale(x));
    yAxis.call(yAxisCall.scale(y));

    // add lines for each ticker
    for (let k in stockMap) {
      g.append("path")
        .attr("fill", "none")
        .attr("stroke", color(k))
        .attr("stroke-width", "3px")
        .attr("d", line(stockMap[k]));
    }

    console.log(stockMap);
  };
}

export default StockGraph;
