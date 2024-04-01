import type { Menu } from "~/types/menu.type";
import type { PaginateResponse } from "../types/paginate-reponse.type";
import { authFetch } from "../utils/fetch";
import type { PaginationParams } from "../utils/fetch/types";

const menuUrl = "/menus";
export const menuApi = {
	getAll(query?: PaginationParams): Promise<Menu[]> {
		return authFetch.get(`${menuUrl}`, query);
	},

	getById(id: string, query?: PaginationParams): Promise<Menu> {
		return authFetch.get(`${menuUrl}/${id}`, query);
	},

	create(body: Menu): Promise<Menu> {
		return authFetch.post(`${menuUrl}`, body);
	},

	update(id: string, body: Menu): Promise<Menu> {
		return authFetch.patch(`${menuUrl}/${id}`, body);
	},

	delete(id: string): Promise<Menu> {
		return authFetch.delete(`/${`${menuUrl}`}/${id}`);
	},

	updatePassword(body: { oldPassword: string; newPassword: string }) {
		return authFetch.patch(`${menuUrl}/`, body);
	},

	deleteManySoftByIds(ids: string[]) {
		return authFetch.delete(`${menuUrl}/${ids.toString()}/soft_ids`);
	},

	deleteManyByIds(ids: string[]) {
		return authFetch.delete(`${menuUrl}/${ids.toString()}`);
	},

	paginate(query?: PaginationParams): Promise<PaginateResponse<Menu>> {
		return authFetch.get(`${menuUrl}/paginate`, query);
	},
};
