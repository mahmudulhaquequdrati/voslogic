/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { BarChart, Bar, LabelList, ResponsiveContainer, XAxis } from "recharts";
// import { getAllCalls } from "../../actions/ServerAction";

// const data = [
//   {
//     name: " A",
//     uv: 4000,
//   },
//   {
//     name: " B",
//     uv: 3000,
//   },
//   {
//     name: " C",
//     uv: 2000,
//   },
//   {
//     name: " D",
//     uv: 2780,
//   },
//   {
//     name: " E",
//     uv: 1800,
//   },
//   {
//     name: " F",
//     uv: 2390,
//   },
//   {
//     name: " G",
//     uv: 3490,
//   },
//   {
//     name: " H",
//     uv: 3490,
//   },
//   {
//     name: " I",
//     uv: 3490,
//   },
// ];

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

export default function ChartBar({ calls }) {
  // const callsObejct = useSelector((state) => state.calls);

  // const { calls } = callsObejct || {};

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // const [calls, setCalls] = useState([]);

  // useEffect(() => {
  //   getAllCalls()
  //     .then((response) => {
  //       setCalls(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [calls.length]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getAllCalls()
  //       .then((response) => {
  //         if (response.data?.calls?.length > calls.length) {
  //           setCalls(response.data);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // }, [calls.length]);

  const monthlyCallCounts = months.map((month) => {
    const callsInMonth = calls?.calls?.filter((call) => {
      const callDate = new Date(call.date_created);
      return callDate.getMonth() === months.indexOf(month);
    });

    return { month, count: callsInMonth?.length || 0 };
    // return { month, count: Math.ceil(Math.random() * 10) };
  });

  return (
    <>
      {monthlyCallCounts?.length && (
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            // width={500}
            // height={300}
            data={monthlyCallCounts || []}
            margin={{
              top: 80,
              right: 5,
              left: 5,
            }}
            maxBarSize={25}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={10}

              // name="name"
            />
            <Bar dataKey="count" fill="#0090C3">
              <LabelList dataKey="count" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
          {/* <YAxis padding={{ left: 20, right: 10 }} /> */}
        </ResponsiveContainer>
      )}
    </>
  );
}
