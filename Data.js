import { useEffect, useState } from "react";
import React from "react";

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Data() {
  const [items, setItems] = useState([]);
  let url = "https://api.covidtracking.com/v1/states/daily.json";
  function getData() {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={items.slice(0, 3)} margin={{ right: 500 }}>
            <CartesianGrid />
            <XAxis dataKey="state" interval={"preserveStartEnd"} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="positive" stroke="black" activeDot={{ r: 8 }} />
            <Line
              dataKey="totalTestResults"
              stroke="red"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    </div>
  );
}
