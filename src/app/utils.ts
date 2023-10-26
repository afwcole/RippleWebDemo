export const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomPhoneNumber = (): string =>{
    const countryCode = '1'; // Replace with the desired country code
    const areaCode = getRandomNumber(100, 999).toString();
    const localNumber = getRandomNumber(1000000, 9999999).toString();
    return `${countryCode}${areaCode}${localNumber}`;
}

export const delay = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
