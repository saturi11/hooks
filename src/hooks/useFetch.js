import { useEffect, useState } from "react";


export const useFetch = (url, method = "get") => {
  const [state, setState] = useState({
    data: null,
    loading: false,
  });

  useEffect(
    function () {
      fetch(url, { method })
        .then(resp => resp.json())
        .then(json =>
          setState({
            data: json,
            loading: false,
          })
        );
    },[url, method]);
    return state;
  
};
