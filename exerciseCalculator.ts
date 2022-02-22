interface exerciseObject {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  dailyHours: number[],
  dailyTarget: number
): exerciseObject => {
  const total = dailyHours.reduce((total, current) => {
    return total + current;
  }, 0);

  const average = total / dailyHours.length;

  const rate = () => {
    if (average === dailyTarget) {
      return { rating: 3, desc: "Well done you reached your goals" };
    }
    if (average > dailyTarget) {
      return { rating: 3, desc: "Well done you surpassed your goals" };
    }
    if (average <= dailyTarget) {
      return { rating: 1, desc: "not too bad but could be better" };
    }
  };

  return {
    periodLength: dailyHours.length,
    trainingDays: dailyHours.filter((hour) => hour !== 0).length,
    success: average >= dailyTarget,
    rating: rate().rating,
    ratingDescription: rate().desc,
    target: dailyTarget,
    average: average,
  };
};

const args = process.argv.map((num) => {
  return Number(num);
});
const dailyHours = args.slice(0, -1);
const target = args.slice(-1)[0];
// console.log(calculateExercises(process.argv[2], Number(process.argv[3])));

console.log(calculateExercises(dailyHours, target));
