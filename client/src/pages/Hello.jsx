import React, { useState, useEffect } from "react";

function Prediction() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [cp, setCp] = useState("");
  const [trestbps, setTrestbps] = useState("");
  const [chol, setChol] = useState("");
  const [fbs, setFbs] = useState("");
  const [restecg, setRestecg] = useState("");
  const [thalach, setThalach] = useState("");
  const [exang, setExang] = useState("");
  const [oldpeak, setOldpeak] = useState("");
  const [slope, setSlope] = useState("");
  const [ca, setCa] = useState("");
  const [thal, setThal] = useState("");
  const [data, setData] = useState([{}]);
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      age,
      sex,
      cp,
      trestbps,
      chol,
      fbs,
      restecg,
      thalach,
      exang,
      oldpeak,
      slope,
      ca,
      thal,
    };
    fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) =>
      res.json().then((data) => {
        setData(data.prediction[0]);
        console.log("hii");
        console.log(data.prediction[0]);
      })
    );
  };

  return (
    <div>
      <h1>Heart Disease Prediction</h1>
      <form onSubmit={handleSubmit}>
        <h1>Hello</h1>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <label htmlFor="sex">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
        <br />

        <label htmlFor="cp">Chest Pain Type:</label>
        <select
          id="cp"
          name="cp"
          value={cp}
          onChange={(e) => setCp(e.target.value)}
        >
          <option value="0">Typical Angina</option>
          <option value="1">Atypical Angina</option>
          <option value="2">Non-anginal Pain</option>
          <option value="3">Asymptomatic</option>
        </select>
        <br />

        <label htmlFor="trestbps">Resting Blood Pressure:</label>
        <input
          type="text"
          id="trestbps"
          name="trestbps"
          value={trestbps}
          onChange={(e) => setTrestbps(e.target.value)}
        />
        <br />

        <label htmlFor="chol">Serum Cholesterol:</label>
        <input
          type="text"
          id="chol"
          name="chol"
          value={chol}
          onChange={(e) => setChol(e.target.value)}
        />
        <br />

        <label htmlFor="fbs">Fasting Blood Sugar:</label>
        <select
          id="fbs"
          name="fbs"
          value={fbs}
          onChange={(e) => setFbs(e.target.value)}
        >
          <option value="1">Greater than 120 mg/dl</option>
          <option value="0">Less than 120 mg/dl</option>
        </select>
        <br />

        <label htmlFor="restecg">Resting ECG Results:</label>
        <select
          id="restecg"
          name="restecg"
          value={restecg}
          onChange={(e) => setRestecg(e.target.value)}
        >
          <option value="0">Normal</option>
          <option value="1">Having ST-T wave abnormality</option>
          <option value="2">
            Probable or definite left ventricular hypertrophy
          </option>
        </select>
        <br />

        <label htmlFor="thalach">Max Heart Rate:</label>
        <input
          type="text"
          id="thalach"
          name="thalach"
          value={thalach}
          onChange={(e) => setThalach(e.target.value)}
        />
        <br />

        <label htmlFor="exang">Exercise-induced Angina:</label>
        <select
          id="exang"
          name="exang"
          value={exang}
          onChange={(e) => setExang(e.target.value)}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
        <br />

        <label htmlFor="oldpeak">ST Depression:</label>
        <input
          type="text"
          id="oldpeak"
          name="oldpeak"
          value={oldpeak}
          onChange={(e) => setOldpeak(e.target.value)}
        />
        <br />

        <label htmlFor="slope">Slope Of Peak Exercise ST Segment:</label>
        <select
          id="slope"
          name="slope"
          value={slope}
          onChange={(e) => setSlope(e.target.value)}
        >
          <option value="0">Upsloping</option>
          <option value="1">Flat</option>
          <option value="2">Downsloping</option>
        </select>
        <br />

        <label htmlFor="ca">Number of Major vessels:</label>
        <input
          type="text"
          id="ca"
          name="ca"
          value={ca}
          onChange={(e) => setCa(e.target.value)}
        />
        <br />

        <label htmlFor="thal">Thalassemia:</label>
        <select
          id="thal"
          name="thal"
          value={thal}
          onChange={(e) => setThal(e.target.value)}
        >
          <option value="0">Normal</option>
          <option value="1">Fixed Defect</option>
          <option value="2">Reversible Defect</option>
        </select>
        <br />

        
        <button onClick={handleSubmit} className="text-4xl font-bold bg-blue-500"> now predict</button>
      </form>
      
        <div>
          <h2>Prediction Result</h2>
          {data === 0 ? (
            <p className="bg-green-500 ">No chance of having heart disease</p>
          ) : (
            <p className="bg-red-500">Chance of having heart disease</p>
          )}
        </div>
      
    </div>
  );
}

export default Prediction;
