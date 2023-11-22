"use client";

import Snowfall from "react-snowfall";

const SnowfallBG = () => {
  return (
    <Snowfall
      // Changes the snowflake color
      color="#fff"
    //   Mange the radius of the snow dit 
      radius={[0.5, 0.8]}
      // Controls the number of snowflakes that are created (default 150)
      snowflakeCount={200}
    />
  );
};

export default SnowfallBG;
