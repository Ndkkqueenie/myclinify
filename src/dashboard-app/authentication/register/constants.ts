import { nanoid } from 'nanoid';

export const organizationFields = [
  {
    id: nanoid(4),
    name: 'hospitalName',
    label: 'Facility Name',
    required: true,
  },
  {
    id: nanoid(4),
    name: 'hospitalAddress',
    label: 'Facility Address',
    required: true,
  },
  {
    id: nanoid(4),
    name: 'hospitalContactFirstName',
    label: 'Facility Contact First Name',
    required: true,
  },
  {
    id: nanoid(4),
    name: 'hospitalContactMiddleName',
    label: 'Facility Contact Middle Name',
    required: false,
  },
  {
    id: nanoid(4),
    name: 'hospitalContactLastName',
    label: 'Facility Contact Last Name',
    required: true,
  },
  {
    id: nanoid(4),
    name: 'hospitalContactPhoneNumber',
    label: 'Facility Contact Phone Number',
    required: true,
  },
  {
    id: nanoid(4),
    name: 'hospitalWebsite',
    label: 'Facility Website',
    required: false,
  },
  {
    id: nanoid(4),
    name: 'hospitalCountry',
    label: 'Country',
    required: true,
  },
  {
    id: nanoid(4),
    name: 'state',
    label: 'State',
    required: false,
  },
  {
    id: nanoid(4),
    name: 'lga',
    label: 'Local Government Area',
    required: false,
  },
  {
    id: nanoid(4),
    name: 'level',
    label: 'Level',
    required: false,
  },
  {
    id: nanoid(4),
    name: 'ownership',
    label: 'Ownership',
    required: false,
  },
];
