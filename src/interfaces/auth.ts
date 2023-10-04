export interface IAuthUser {
  id: string;
  role: string;
}

export type LoginResponse = {
  accessToken: string;
  refreshToken?: string;
  needChangePassword: boolean;
};
