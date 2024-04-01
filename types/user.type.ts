import { AccountType } from "~/utils/enums/accountType";
import { Gender } from "~/utils/enums/gender";
import { Role } from "~/utils/enums/role";

export type User = {
	email: string | null;
	phone: string;
	username: string;
	accountType: AccountType;

	_id: string;
	fullName: string | null;
	gender: Gender | "";
	dateOfBirth: number | null;
	avatar: string | null;

	deviceID: string;
	fcmTokens: string[];
	enableFcm: boolean;
	role: Role;
	deleted: boolean;
};
