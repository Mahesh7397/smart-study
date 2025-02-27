import { useState } from "react";

const GradCalculator = () => {
  const [subjects, setSubjects] = useState(1);
  const [Numberofsub, setNumberofsub] = useState(1);
  const [marks, setMarks] = useState([]);
  const [percentage, setPercentage] = useState(null);
  const [grade, setGrade] = useState(null);
  const [internalMark, setInternalMark] = useState(0);
  const [expectedGrade, setExpectedGrade] = useState(null);
  const [requiredSemesterMarks, setRequiredSemesterMarks] = useState(null);


  const gradeMapping = [
    { min: 90, max: 100, grade: "O" },
    { min: 80, max: 89, grade: "D+" },
    { min: 75, max: 79, grade: "D" },
    { min: 70, max: 74, grade: "A+" },
    { min: 60, max: 69, grade: "A" },
    { min: 50, max: 59, grade: "B" },
    { min: 40, max: 49, grade: "C" },
    { min: 0, max: 39, grade: "U" },
  ];

  const addmarks = (allmarks) => {
    let m = 0;
    for (let i = 0; i < allmarks.length; i++) {
      m = m + allmarks[i]
    }
    return m
  }

  const calculateGrade = () => {
    const totalMarks = addmarks(marks);
    console.log(totalMarks)
    const totalPossibleMarks = subjects * 100;
    const calculatedPercentage = (totalMarks / totalPossibleMarks) * 100;
    setPercentage(calculatedPercentage.toFixed(2));

    const assignedGrade = gradeMapping.find(
      (g) => calculatedPercentage >= g.min && calculatedPercentage <= g.max
    );
    setGrade(assignedGrade ? assignedGrade.grade : "Invalid");
  };

  const calculateRequiredMarks = () => {
    const gradeRequirement = gradeMapping.find((g) => g.grade === expectedGrade);
    if (gradeRequirement) {
      const requiredMarks = ((gradeRequirement.min * Numberofsub) - (internalMark * Numberofsub)) / Numberofsub;
      setRequiredSemesterMarks(requiredMarks > 0 ? requiredMarks.toFixed(2) : 0);
    }
  };


  return (
    <div className="flex flex-col item-center md:flex-row min-h-screen p-4 md:p-6 bg-purple-100/30 ">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition max-w-screen md:w-full min-w-3xs mb-6 m-6">
        <h2 className="text-xl font-bold mb-4">Grade Calculator</h2>
        <label className="block mb-2">Number of Subjects:</label>
        <input
          type="number"
          value={subjects}
          min="1"
          max="48"
          onChange={(e) => setSubjects(Number(e.target.value))}
          className="border p-2 rounded w-full mb-4"
        />
        <label className="block mb-2">Enter Marks:</label>
        {[...Array(subjects)].map((_, i) => (
          <input
            key={i}
            type="number"
            min="0"
            max="100"
            placeholder={`Subject ${i + 1}`}
            onChange={(e) => {
              const value = Number(e.target.value);
              const newMarks = [...marks];
              newMarks[i] = value;
              setMarks(newMarks);
            }}
            className={`border p-2 rounded w-full mb-2 ${marks[i] > 100 ? 'border-red-500' : ''}`}
          />
        ))}
        <button
          onClick={calculateGrade}
          className="bg-purple-500 hover:bg-purple-700 transition text-white p-2 rounded w-full mt-4"
        >
          Calculate Grade
        </button>
        {percentage && <p className="mt-4 text-xl font-(family-name:Fjalla One,serif}) ">Percentage: {percentage}%</p>}
        {grade && <p className="text-xl">Grade: {grade}</p>}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition max-w-screen md:w-full min-w-3xs md-6 m-4">
        <h2 className="text-xl font-bold mb-4">Grade Prediction</h2>
        <label className="block mb-2">Internal Mark (out of 25):</label>
        <input
          type="number"
          min="0"
          max="25"
          onChange={(e) => setInternalMark(Number(e.target.value))}
          className={`border p-2 rounded w-full mb-4 ${internalMark > 25 ? 'border-red-500' : ''}`}
        />
        <label className="block mb-2">Number of Subjects:</label>
        <input
          type="number"
          value={Numberofsub}
          min="1"
          max="12"
          onChange={(e) => setNumberofsub(Number(e.target.value))}
          className="border p-2 rounded w-full mb-4"
        />
        <label className="block mb-2">Expected Grade:</label>
        <select
          onChange={(e) => setExpectedGrade(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        >
          <option value="">Select Grade</option>
          {gradeMapping.map((g) => (
            <option key={g.grade} value={g.grade}>{g.grade}</option>
          ))}
        </select>
        <button
          onClick={calculateRequiredMarks}
          className="bg-purple-500 hover:bg-purple-700 transition text-white p-2 rounded w-full"
        >
          Predict Required Marks
        </button>
        {requiredSemesterMarks !== null && (
          <p className="mt-4">Score {requiredSemesterMarks} marks in semester to get {expectedGrade} for internalMark {internalMark}</p>
        )}
      </div>
    </div>
  )
}

export default GradCalculator