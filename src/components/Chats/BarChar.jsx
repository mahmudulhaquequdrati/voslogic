import { PureComponent } from "react";
import { BarChart, Bar, LabelList, ResponsiveContainer, XAxis } from "recharts";

const data = [
  {
    name: " A",
    uv: 4000,
  },
  {
    name: " B",
    uv: 3000,
  },
  {
    name: " C",
    uv: 2000,
  },
  {
    name: " D",
    uv: 2780,
  },
  {
    name: " E",
    uv: 1800,
  },
  {
    name: " F",
    uv: 2390,
  },
  {
    name: " G",
    uv: 3490,
  },
  {
    name: " H",
    uv: 3490,
  },
  {
    name: " I",
    uv: 3490,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 20;

  return (
    <svg>
      {/* <rect x="10" y="10" width="180" height="80" fill="lightgray" /> */}
      <g>
        <circle
          cx={x + width / 2}
          cy={y - radius - 15}
          r={radius}
          fill="#3637E9"
        />
        <text
          x={x + width / 2}
          y={y - radius - 15}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={12}
        >
          {value}
        </text>
      </g>
    </svg>
  );
};

export default class ChartBar extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 80,
            right: 5,
            left: 5,
          }}
          maxBarSize={25}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={10}

            // name="name"
          />
          <Bar dataKey="uv" fill="#0090C3">
            <LabelList dataKey="uv" content={renderCustomizedLabel} />
          </Bar>
        </BarChart>
        {/* <YAxis padding={{ left: 20, right: 10 }} /> */}
      </ResponsiveContainer>
    );
  }
}
