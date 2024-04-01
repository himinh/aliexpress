import { MenuLevel } from "~/utils/enums/menuLevel";
import { Role } from "~/utils/enums/role";

export type Menu = {
	readonly parentId?: string;
	readonly title: string;
	readonly prefix: string;
	readonly icon?: string;
	readonly level: MenuLevel;
	readonly url: string;
	readonly isHorizontal: boolean;
	readonly isShow: boolean;
	readonly roles: Role[];
	readonly subMenus: Menu[];
};
