import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryLine,
} from "victory";

const data2012 = [
  { quarter: 1, earnings: 13000 },
  // { quarter: 2, earnings: 16500 },
  // { quarter: 3, earnings: 14250 },
  // { quarter: 4, earnings: 19000 },
];

const singleEarning = data2012.forEach(function (earning) {
  // return earning.earnings;
  console.log("Single Earning", earning.earnings);
});

const data2013 = [
  { quarter: 1, earnings: 15000 },
  // { quarter: 2, earnings: 12500 },
  // { quarter: 3, earnings: 19500 },
  // { quarter: 4, earnings: 13000 },
];
const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 },
];

const data2015 = [
  { quarter: 1, earnings: 18001 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 15500 },
];
// const totalValues = data2013[0].toString() + data2012[0].toString();
// console.log("totalValue", totalValues);
const Charts = () => {
  //   labels={props) => {
  //   console.log('PROPS: , props);
  //   return `${datum.earnings}`
  // }}
  return (
    <div>
      <h1>Victory Tutorial</h1>
      <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
        <VictoryStack colorScale={"warm"}>
          <VictoryBar
            data={data2012}
            x={"quarter"}
            y={"earnings"}
            labels={({ data }) => {
              let total = 0;
              data.forEach((datum) => (total = total + datum.earnings));
              // console.log("Props", datum.earnings);
              return `The total value is: ${total}`;
            }}
            labelComponent={<VictoryTooltip />}
          />
          <VictoryBar
            data={data2013}
            x={"quarter"}
            y={"earnings"}
            labels={({ y, data }) => {
              let total = 0;
              data.forEach((datum) => (total = total + datum.earnings));
              // console.log("Props", datum[y]);
              return `The total value is: ${total}`;
            }}
            labelComponent={<VictoryTooltip />}
          />

          {/* <VictoryBar
            data={data2014}
            x={"quarter"}
            y={"earnings"}
            labels={({ datum, data }) => {
              let total = 0;
              data.forEach((datum) => (total = total + datum.earnings));
              console.log("Props", datum.earnings);
              return `The total value is: ${total}`;
            }}
           
            labelComponent={<VictoryTooltip />}
          /> */}
          {/* <VictoryBar
            data={data2015}
            x={"quarter"}
            y={"earnings"}
            labels={({ datum, data }) => {
              let total = 0;
              data.forEach((datum) => (total = total + datum.earnings));
              console.log("Props", datum.earnings);
              return `The total value is: ${total}`;
            }}
            labelComponent={<VictoryTooltip />}
          /> */}
        </VictoryStack>
      </VictoryChart>
      <VictoryChart
        // domainPadding={{ y: 10 }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `${(datum.x, 2)}, ${(datum.y, 2)}`}
            // labels={() => "Something"}
          />
        }
      >
        <VictoryLine
          y={(datum) => {
            console.log(datum);
            return Math.sin(2 * Math.PI * datum.x);
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Charts;
