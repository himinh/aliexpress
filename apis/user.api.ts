import type { User } from "~/types/user.type";
import { authFetch, httpClient } from "~/utils/fetch";
import type { PaginateResponse } from "../types/paginate-reponse.type";
import type {
	FetchOptions,
	PaginationParams,
} from "../utils/fetch/types";

const userUrl = "/users";
export const userApi = {
	getAll(
		query?: PaginationParams,
		options?: FetchOptions,
	): Promise<User[]> {
		return httpClient.get(`${userUrl}`, query, options);
	},

	getById(
		id: string,
		query?: PaginationParams,
		options?: FetchOptions,
	): Promise<User> {
		return authFetch.get(
			`${userUrl}/${id}`,
			query,
			options,
		);
	},

	create(
		body: User,
		options?: FetchOptions,
	): Promise<User> {
		return authFetch.post(`${userUrl}`, body, options);
	},

	update(
		id: string,
		body: User,
		options?: FetchOptions,
	): Promise<User> {
		return authFetch.patch(
			`${userUrl}/${id}`,
			body,
			options,
		);
	},

	delete(id: string): Promise<User> {
		return authFetch.delete(`/${`${userUrl}`}/${id}`);
	},

	updatePassword(body: {
		oldPassword: string;
		newPassword: string;
	}) {
		return authFetch.patch(`${userUrl}/`, body);
	},

	deleteManySoftByIds(ids: string[]) {
		return authFetch.delete(
			`${userUrl}/${ids.toString()}/soft_ids`,
		);
	},

	deleteManyByIds(ids: string[]) {
		return authFetch.delete(`${userUrl}/${ids.toString()}`);
	},

	getMe() {
		return authFetch.get(`${userUrl}/me`, {});
	},

	paginate(
		query?: PaginationParams,
		options?: FetchOptions,
	): Promise<PaginateResponse<User>> {
		return authFetch.get(
			`${userUrl}/paginate`,
			query,
			options,
		);
	},
};
