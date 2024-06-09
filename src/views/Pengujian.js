import React, { useState } from "react";
import Negatif from "../Components/Negatif";
import Positif from "../Components/Positif";
import ErrorForm from "../Components/ErrorForm";
import Form from "./../Components/Form";
const Pengujian = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Alamine_Aminotransferase: "",
    Albumin: "",
    Albumin_and_Globulin_Ratio: "",
    Alkaline_Phosphotase: "",
    Aspartate_Aminotransferase: "",
    Direct_Bilirubin: "",
    Total_Bilirubin: "",
    Total_Protiens: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (!formData[key]) {
          ErrorForm();
          return;
        }
      }
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      // console.log("Result:", result);
      if (result.result === 0) {
        Negatif();
      } else if (result.result === 1) {
        Positif();
      }
      setFormData({
        Age: "",
        Gender: "",
        Alamine_Aminotransferase: "",
        Albumin: "",
        Albumin_and_Globulin_Ratio: "",
        Alkaline_Phosphotase: "",
        Aspartate_Aminotransferase: "",
        Direct_Bilirubin: "",
        Total_Bilirubin: "",
        Total_Protiens: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="halamanPengujian">
        <p className="judulPengujian">
          Form <b>Pengujian</b>
        </p>
        <form onSubmit={handleSubmit} className="formPengujian">
          <div className="form-group-row">
            <Form
              title={"Umur"}
              name={"Age"}
              id={"Age"}
              min={4}
              max={90}
              placeholder={"4 - 90"}
              formData={formData}
              handleChange={handleChange}
            />
            <div className="form-group-col">
              <p className="form-label">Jenis Kelamin</p>
              <select
                name="Gender"
                id="Gender"
                className="form-select"
                value={formData.Gender}
                onChange={handleChange}
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="0">Perempuan</option>
                <option value="1">Laki-Laki</option>
              </select>
            </div>
            <Form
              title={"Total_Bilirubin"}
              name={"Total_Bilirubin"}
              id={"Total_Bilirubin"}
              min={0.4}
              max={75}
              placeholder={"0.4 - 75"}
              formData={formData}
              handleChange={handleChange}
            />
            <Form
              title={"Direct_Bilirubin"}
              name={"Direct_Bilirubin"}
              id={"Direct_Bilirubin"}
              min={0.1}
              max={19.7}
              placeholder={"0.1 - 19.7"}
              formData={formData}
              handleChange={handleChange}
            />
            <Form
              title={"Alkaline_Phosphotase"}
              name={"Alkaline_Phosphotase"}
              id={"Alkaline_Phosphotase"}
              min={63}
              max={2110}
              placeholder={"63 - 2110"}
              formData={formData}
              handleChange={handleChange}
            />
            <Form
              title={"Alamine_Aminotransferase"}
              name={"Alamine_Aminotransferase"}
              id={"Alamine_Aminotransferase"}
              min={10}
              max={2000}
              placeholder={"10 - 2000"}
              formData={formData}
              handleChange={handleChange}
            />
            <Form
              title={"Aspartate_Aminotransferase"}
              name={"Aspartate_Aminotransferase"}
              id={"Aspartate_Aminotransferase"}
              min={10}
              max={4929}
              placeholder={"10 - 4929"}
              formData={formData}
              handleChange={handleChange}
            />
            <Form
              title={"Albumin"}
              name={"Albumin"}
              id={"Albumin"}
              min={0.9}
              max={5.5}
              placeholder={"0.9 - 5.5"}
              formData={formData}
              handleChange={handleChange}
            />
            <Form
              title={"Total_Protiens"}
              name={"Total_Protiens"}
              id={"Total_Protiens"}
              min={2.7}
              max={9.6}
              placeholder={"2.7 - 9.6"}
              formData={formData}
              handleChange={handleChange}
            />
            <Form
              title={"Albumin_and_Globulin_Ratio"}
              name={"Albumin_and_Globulin_Ratio"}
              id={"Albumin_and_Globulin_Ratio"}
              min={0.3}
              max={2.8}
              placeholder={"0.3 - 2.8"}
              formData={formData}
              handleChange={handleChange}
            />
          </div>
          <div className="form-submit">
            <button
              type="submit"
              className="buttonPengujian"
              // onClick={handleSubmit}
            >
              Cek Hasil
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Pengujian;
