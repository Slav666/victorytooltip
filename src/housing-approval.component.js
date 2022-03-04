import React, { useMemo, useState } from "react";

import {
  VictoryGroup,
  VictoryLine,
  VictoryScatter,
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";

const renderLineChart = () => {
  return (
    <div>
      <VictoryChart>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 6 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
            { x: 6, y: 2 },
            { x: 7, y: 8 },
            { x: 8, y: 5 },
            { x: 9, y: 2 },
            { x: 10, y: 1 },
          ]}
        />

        <VictoryScatter
          labelComponent={<VictoryTooltip />}
          style={{ data: { fill: "#c43a31" } }}
          labels={({ datum }) => {
            console.log("DAtum_Y", datum._y);
            return ` ${datum._y}`;
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 6 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
            { x: 6, y: 2 },
            { x: 7, y: 8 },
            { x: 8, y: 5 },
            { x: 9, y: 2 },
            { x: 10, y: 1 },
          ]}
        />

        <VictoryLine
          data={[
            { x: 1, y: 8 },
            { x: 2, y: 4 },
            { x: 3, y: 6 },
            { x: 4, y: 3 },
            { x: 5, y: 3 },
            { x: 6, y: 3 },
            { x: 7, y: 3 },
            { x: 8, y: 3 },
            { x: 9, y: 3 },
            { x: 10, y: 3 },
          ]}
          // style={{
          //   data: { stroke: "#c43a31" },
          //   parent: { border: "1px solid #ccc" },
          // }}
        />

        <VictoryScatter
          style={{ data: { fill: "#FFC0CB" } }}
          data={[
            { x: 1, y: 8 },
            { x: 2, y: 4 },
            { x: 3, y: 6 },
            { x: 4, y: 3 },
            { x: 5, y: 3 },
            { x: 6, y: 3 },
            { x: 7, y: 3 },
            { x: 8, y: 3 },
            { x: 9, y: 3 },
            { x: 10, y: 3 },
          ]}
          labelComponent={<VictoryTooltip />}
          labels={({ datum }) => {
            console.log("DAtum_Y", datum._y);
            return ` ${datum._y}`;
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default renderLineChart;
