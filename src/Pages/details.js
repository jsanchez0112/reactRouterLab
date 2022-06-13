
import React from "react";
import Stocks from "./stocks"

const Details = (props) => {
      const symbol = props.match.params.symbol
      const data = Stocks.symbol
      const [usd , setUsd] = React.useState(null);
      setUsd(data);

      return (
            <div>
                  <h1>Test Data</h1>
                  <h1>{usd.name}</h1>
                  <h1>{usd.symbol}</h1>
            </div>
      )
};

export default Details;