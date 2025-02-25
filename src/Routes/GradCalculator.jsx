

const GradCalculator = () => {
  return (
    <div className="flex flex-row min-h-screen p-6 bg-purple-100">
    <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg mr-4">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Grade Calculator</h2>
      <p className="text-gray-600">Calculate your grades based on official evaluation methods.</p>
      {/* Add Grade Calculator UI here */}
    </div>
    <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg ml-4">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Grade Prediction</h2>
      <p className="text-gray-600">Predict your future grades based on performance trends.</p>
      {/* Add Grade Prediction UI here */}
    </div>
  </div>
  )
}

export default GradCalculator