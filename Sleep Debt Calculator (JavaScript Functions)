const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday": return 6;
    case "tuesday": return 7;
    case "wednesday": return 8;
    case "thursday": return 7;
    case "friday": return 6;
    case "saturday": return 9;
    case "sunday": return 10;
    default: return 0;
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    return "You got the perfect amount of sleep!";
  } else if (actualSleepHours > idealSleepHours) {
    return (
      "You got more sleep than needed. You slept an extra " +
      (actualSleepHours - idealSleepHours) +
      " hours this week."
    );
  } else {
    return (
      "You need more sleep! You slept " +
      (idealSleepHours - actualSleepHours) +
      " hours less than needed this week."
    );
  }
};

const sleepDebt = calculateSleepDebt();
console.log(sleepDebt);
