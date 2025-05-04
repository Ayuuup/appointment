
// function to geenerate an array of points  between two points
function generateRange(start, end) {
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }


// function to check if there is a timerange available per chosen slotDuration
export const getAvailableSLotsPerDuration = (availableSlots,duration)=>{

    const availableHours = availableSlots.map(s => s.slotTime).sort((a, b) => a - b);
    const available_duration = [];
    for ( let i = 0; i < availableHours.length; i++) {
        const range = generateRange(availableHours[i], availableHours[i] + parseInt(duration)-1);
    
        for (let j = i + 1; j < availableHours.length ; j++) {
          if (availableHours[i] + (duration - 1) == availableHours[j] && range.every((item) => availableHours.includes(item))) {
            const slot = [availableHours[i], availableHours[j]];
            available_duration.push(slot);
          }
        }
      }
      return available_duration
}