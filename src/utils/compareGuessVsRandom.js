export function compareGuessVsRandom(values, random) {
  // exact values
  const exactMatches = [];
  const missingValues = []; // accumalator for unmatched values
  const missingRandom = []; // accumalator for unmatched random values
  for (let i = 0; i < values.length; i++) {
    if (values[i] === random[i]) {
      exactMatches.push(values[i]);
    } else {
      missingValues.push(values[i]);
      missingRandom.push(random[i]);
    }
  }

  // matches values
  const matchesByValue = [];
  for (let i = 0; i < missingValues.length; i++) {
    const randomIndex = missingRandom.findIndex((v) => v === missingValues[i]);
    // if random values contains the current value, remove the value from random values and save the value in matchesByValue
    if (randomIndex >= 0) {
      matchesByValue.push(missingValues[i]);
      missingRandom.splice(randomIndex, 1);
    }
  }

  console.log(exactMatches, matchesByValue);
  // if all checks pass, the arrays are a match
  return {
    match: exactMatches.length === random.length,
    exactMatches: exactMatches.length,
    matchesByValue: matchesByValue.length,
  };
}
