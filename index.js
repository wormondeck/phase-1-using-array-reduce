const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const initialValue = 0;
const totalBatteries = batteryBatches.reduce((accum, currentValue) => accum + currentValue + initialValue);
