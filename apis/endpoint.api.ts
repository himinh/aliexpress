import type { Endpoint } from "~/types/endpoint.type";
import { authFetch } from "~/utils/fetch";
import type { PaginateResponse } from "../types/paginate-reponse.type";
import type { PaginationParams } from "../utils/fetch/types";

const endpointUrl = "/endpoints";
export const endpointApi = {
	getAll(query?: PaginationParams): Promise<Endpoint[]> {
		return authFetch.get(`${endpointUrl}`, query);
	},

	getById(id: string, query?: PaginationParams): Promise<Endpoint> {
		return authFetch.get(`${endpointUrl}/${id}`, query);
	},

	create(body: Endpoint): Promise<Endpoint> {
		return authFetch.post(`${endpointUrl}`, body);
	},

	update(id: string, body: Endpoint): Promise<Endpoint> {
		return authFetch.patch(`${endpointUrl}/${id}`, body);
	},

	delete(id: string): Promise<Endpoint> {
		return authFetch.delete(`/${`${endpointUrl}`}/${id}`);
	},

	updatePassword(body: { oldPassword: string; newPassword: string }) {
		return authFetch.patch(`${endpointUrl}/`, body);
	},

	deleteManySoftByIds(ids: string[]) {
		return authFetch.delete(`${endpointUrl}/${ids.toString()}/soft_ids`);
	},

	deleteManyByIds(ids: string[]) {
		return authFetch.delete(`${endpointUrl}/${ids.toString()}`);
	},

	getMe() {
		return authFetch.get(`${endpointUrl}/me`, {});
	},

	paginate(query?: PaginationParams): Promise<PaginateResponse<Endpoint>> {
		return authFetch.get(`${endpointUrl}/paginate`, query);
	},
};
