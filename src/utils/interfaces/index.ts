export interface authInterface {
  value: number;
  data: {
    email: string;
    password: string;
    contactNo: string;
    firstName: string;
    lastName: string;
    token: string;
    verificationCode: number;
    id: string;
  };
  loading: boolean;
  error: boolean;
}
