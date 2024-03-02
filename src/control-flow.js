export const Greetings = {
  GOOD_MORNING: "Good morning",
  GOOD_AFTERNOON: "Good afternoon",
  GOOD_EVENING: "Good evening",
};

export function howGreetAtTime_elseIfExample(hour) {
  if (hour >= 6 && hour < 12) {
    return Greetings.GOOD_MORNING;
  } else if (hour >= 12 && hour < 18) {
    return Greetings.GOOD_AFTERNOON;
  } else return Greetings.GOOD_EVENING;
}

export function howGreetAtTime_switchCaseExample(hour) {
  switch (hour) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return Greetings.GOOD_MORNING;
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return Greetings.GOOD_AFTERNOON;
      break;
    default:
      return Greetings.GOOD_EVENING;
  }
}
