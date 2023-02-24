import React, { useState } from "react";

import BarChart from "../Charts/BarChart";
import AreaChart from "../Charts/AreaChart";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./ChartsContainer.styles";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
