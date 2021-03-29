export interface ICredentials {
  origin: string;
  patient: {
    user: string;
    password: string;
  };
  orgDoctor: {
    user: string;
    password: string;
  };
}

export const credentials: ICredentials = {
  origin: 'http://localhost:3000/',
  patient: {
    user: '9001234567',
    password: '135794',
  },
  orgDoctor: {
    user: '',
    password: '',
  },
};
