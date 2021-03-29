type CountryNameType = 'Nigeria' | 'United States' | 'Canada' | 'United Kingdom';

export const getPhoneExtensionCode = (countryName: string) => {
  const codesMapper = {
    Nigeria: '+234',
    Canada: '+1',
    'United States': '+1',
    'United Kingdom': '+44',
    Australia: '+61',
  };

  const extensionCode = codesMapper[countryName];

  return extensionCode;
};

export const getRawPhoneNumber = (countryName: string, phoneNumber: string) => {
  const sliceLengthMapper = {
    Nigeria: 4,
    Canada: 2,
    'United States': 2,
    'United Kingdom': 3,
    Australia: 3,
  };

  const slicedPhoneNumber = phoneNumber.slice(sliceLengthMapper[countryName]);

  return slicedPhoneNumber;
};
