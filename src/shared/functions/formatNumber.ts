
// TODO - Following this is a shared function better 
// to add separator prop and add 'B' option as well
export function formatNumber(value: number, separator: string = ''): string {
    // if (value >= 1000000) {
    //     return `${(value / 1000000).toFixed(1)}M`;
    // } else if (value >= 1000) {
    //     return `${(value / 1000).toFixed(1)}K`;
    // } else {
    //     return value.toString();
    // }

    // TODO - checkout the steps
    // step 1: always check if the value is not undefined or null
    if(value === undefined || value === null) {
        return ''
    }

    // step 2: check each option
    if (value < 1e3) {
        return value + separator;
      }

      if (value >= 1e3 && value < 1e6) {
        return +(value / 1e3).toFixed(2) + separator + 'K';
      }

      if (value >= 1e6 && value < 1e9) {
        return +(value / 1e6).toFixed(2) + separator + 'M';
      }

      if (value >= 1e9) {
        return +(value / 1e9).toFixed(2) + separator + 'B';
      }

      return '';
}