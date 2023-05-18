import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallButtons";

const UseCallback = (props) => {
const [count, setCont] = useState(0);

  const inc = useCallback(function inc (delta){
    setCont(curr =>curr+delta)
  },[setCont])


  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
            <UseCallbackButtons inc={inc}/>
      </div>
    </div>
  );
};

export default UseCallback;
