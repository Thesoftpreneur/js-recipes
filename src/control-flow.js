export const Greetings = {
  GOOD_MORNING: "Good morning",
  GOOD_AFTERNOON: "Good afternoon",
  GOOD_EVENING: "Good evening",
};

export function howGreetAtTime(hour) {
  if (hour >= 6 && hour < 12) {
    return Greetings.GOOD_MORNING;
  } else if (hour >= 12 && hour < 18) {
    return Greetings.GOOD_AFTERNOON;
  } else return Greetings.GOOD_EVENING;
}

export function howGreetAtTime2(hour) {
  if (hour >= 6 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else return "Good evening";
}
