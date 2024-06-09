import React, { useState, useEffect } from "react";
import axios from "axios";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import reload from "../LottieFiles/loading.json";

const Dataset = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/dataset")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching dataset");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loadingData">
        <Tilt>
          <Lottie className="animasi" animationData={reload} loop={true} />
        </Tilt>
      </div>
    );
  }

  if (error) {
    return <div className="errorDataset">{error}</div>;
  }

  return (
    <div className="dataset-container">
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th className="tableMetode" key={key}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dataset;
