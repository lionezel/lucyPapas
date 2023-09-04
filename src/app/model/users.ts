export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Cliente {
  uid: string;
  email: string;
  name: string;
  phone: string;
  photo: string;
  address: string;
  password: string
}
