const calculateBmi = (height: number, weight: number) => {
  const heightM = height / 100;
  const BMI = weight / (heightM * heightM);
  if (BMI < 18.5) return "Underweight";
  if (BMI >= 18.5 && BMI <= 24.9) return "Healthy Weight";
  if (BMI >= 25.0 && BMI <= 29.9) return "Overweight";
  if (BMI > 30.0) return "Obesity";
};

console.log(calculateBmi(Number(process.argv[2]), Number(process.argv[3])));
