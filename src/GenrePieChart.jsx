import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const GenrePieChart = (props) => {
  const events = props.events;
  const [data, setData] = useState([]);

  const getData = (events) => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      let value = 0;
      for (const event of events) {
        if (event.summary.split(" ").includes(genre)) {
          value += 1;
        }
      }
      return { name: genre, value };
    });
    return data;
  };

  useEffect(() => {
    setData(getData(events));
  }, [events]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <ResponsiveContainer width={400} height={400}>
      <PieChart>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
              percent > 0 ?
              `${name} ${(percent * 100).toFixed(0)}%` :
              ''
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GenrePieChart;
