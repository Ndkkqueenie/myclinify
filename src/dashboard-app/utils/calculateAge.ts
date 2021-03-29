const calculateAge = (yearOfBirth) => {
  if (!yearOfBirth) return '--';
  const date = new Date();
  const currentYear = date.getFullYear();
  const age = currentYear - yearOfBirth;
  return age;
};

export default calculateAge;
