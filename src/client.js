import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryTooltip,
} from "victory";

const data2012 = [
  { quarter: 1, earnings: 13000, label: "test2012/1" },
  { quarter: 2, earnings: 16500, label: "test2012/2" },
  { quarter: 3, earnings: 14250, label: "test2012/3" },
  { quarter: 4, earnings: 19000, label: "test2012/4" },
];

const data2013 = [
  { quarter: 1, earnings: 15000, label: "test2013/1" },
  { quarter: 2, earnings: 12500, label: "test2013/1" },
  { quarter: 3, earnings: 19500, label: "test2013/1" },
  { quarter: 4, earnings: 13000, label: "test2013/1" },
];

const data2014 = [
  { quarter: 1, earnings: 11500, label: "test2014/1" },
  { quarter: 2, earnings: 13250, label: "test2014/2" },
  { quarter: 3, earnings: 20000, label: "test2014/3" },
  { quarter: 4, earnings: 15500, label: "test2014/4" },
];

const data2015 = [
  { quarter: 1, earnings: 18000, label: "Hello Mark :)" },
  { quarter: 2, earnings: 13250, label: "test2015/2" },
  { quarter: 3, earnings: 15000, label: "test2015/3" },
  { quarter: 4, earnings: 12000, label: "test2015/4" },
];

const Charts = () => {
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
            labelComponent={<VictoryTooltip />}
          />
          <VictoryBar
            data={data2013}
            x={"quarter"}
            y={"earnings"}
            labelComponent={<VictoryTooltip />}
          />
          <VictoryBar
            data={data2014}
            x={"quarter"}
            y={"earnings"}
            labelComponent={<VictoryTooltip />}
          />
          <VictoryBar
            data={data2015}
            x={"quarter"}
            y={"earnings"}
            labelComponent={<VictoryTooltip />}
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};

export default Charts;
