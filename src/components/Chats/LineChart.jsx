/* eslint-disable react/prop-types */
import { LineChart, Line, ResponsiveContainer, XAxis } from "recharts";

const data = [
  {
    name: "JAN",
    uv: 2400,
  },
  {
    name: "FEB",
    uv: 3000,
  },
  {
    name: "MAR",
    uv: 2000,
  },
  {
    name: "APR",
    uv: 2780,
  },
  {
    name: "MAY",
    uv: 1890,
  },
  {
    name: "JUN",
    uv: 2390,
  },
  {
    name: "JUL",
    uv: 3490,
  },
  {
    name: "AUG",
    uv: 2000,
  },
  {
    name: "SEP",
    uv: 2780,
  },
  {
    name: "OCT",
    uv: 1890,
  },
  {
    name: "NOV",
    uv: 2390,
  },
  {
    name: "DEC",
    uv: 3490,
  },
];

const CustomizedDot = (props) => {
  const { cx, cy } = props;

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={16}
      height={16}
      viewBox="0 0 182 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="91" cy="91" r="91" fill="white" />
      <circle
        cx="91"
        cy="91"
        r="74.5"
        fill="white"
        stroke="#1B9CCA"
        strokeWidth="5"
      />
    </svg>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={30} y={10} dy={20} textAnchor="end" fill="#666" transform="">
        {payload.value}
      </text>
    </g>
  );
};

export default function ChartLine() {
  return (
    <ResponsiveContainer width="98%" className="mx-auto " height="100%">
      <LineChart width={100} height={100} data={data}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          strokeWidth={2}
          dot={<CustomizedDot />}
        />
        <XAxis
          // height={60}
          padding={{ left: 15, right: 30 }}
          dataKey="name"
          stroke="#fff"
          tick={<CustomizedAxisTick />}
          tickSize={0}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
