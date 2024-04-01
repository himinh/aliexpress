import type { User } from "./user.type";

export type Login = {
	password: string;
	email: string;
};

export type SocialLogin = {
	socialID: string;
	deviceID: string | null;
} & Pick<
	User,
	"accountType" | "dateOfBirth" | "fullName" | "gender" | "avatar" | "email"
>;

export type Register = Login &
	Pick<User, "fullName" | "dateOfBirth" | "gender" | "username" | "phone">;

export type ResetPassword = Pick<Login, "password"> & { token: string };

export type Token = {
	token: string;
	expiresAt: number;
};

export type Tokens = {
	accessToken: Token;
	refreshToken: Token;
};

export type AuthUser = Tokens & {
	user?: User;
};
