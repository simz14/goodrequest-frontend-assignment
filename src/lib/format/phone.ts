const INTERNATIONAL_LENGTH = 13;

export const formatPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length !== INTERNATIONAL_LENGTH) return phoneNumber;

  const prefix = phoneNumber.slice(0, 4);
  const a = phoneNumber.slice(4, 7);
  const b = phoneNumber.slice(7, 10);
  const c = phoneNumber.slice(10);

  return `${prefix} ${a} ${b} ${c}`;
};
