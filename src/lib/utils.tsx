export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export function countKeys(array: Array<any>, key: string): number {
  let found = 0;

  array.forEach((v) => {
    if (v[key]) {
      found += 1;
    }
  });

  return found;
}

export function delay(ms?: number) {
  return new Promise((resolve) => setTimeout(resolve, ms || 0));
}

export function calculateAge(birthYear: number, birthMonth: number, birthDay: number): number {
  const today = new Date();
  let age = today.getFullYear() - birthYear;

  // Check if birthday has passed this year
  const hasPassedBirthday = today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);

  if (!hasPassedBirthday) {
    age--;
  }

  return age;
}
