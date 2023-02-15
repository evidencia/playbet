export interface IUpdateUser {
  username?: string;
  email?: string;
  birthdate?: string;
  phoneNumber?: string;
}

export default interface IUser {
  id: string;
  username: string;
  email: string;
  birthdate: Date;
  account: {
    id: string;
    balance: number;
  };
  profile: {
    fullName: string | null;
    cpf: string | null;
    phoneNumber: string | null;
    validPhoneNumber: boolean;
  };
  roles: string[];
}
