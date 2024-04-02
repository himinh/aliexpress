import type { EndpointGroup } from "~/types/endpoint-group.type";
import type { PaginateResponse } from "../types/paginate-reponse.type";
import { httpClient } from "../utils/fetch";
import type {
	FetchOptions,
	PaginationParams,
} from "../utils/fetch/types";

const endpointGroupUrl = "/endpointGroups";
export const endpointGroupService = {
	getAll(
		query?: PaginationParams,
		options?: FetchOptions,
	): Promise<EndpointGroup[]> {
		return httpClient.get(
			`${endpointGroupUrl}`,
			query,
			options,
		);
	},

	getById(
		id: string,
		query?: PaginationParams,
		options?: FetchOptions,
	): Promise<EndpointGroup> {
		return httpClient.get(
			`${endpointGroupUrl}/${id}`,
			query,
			options,
		);
	},

	create(
		body: EndpointGroup,
		options?: FetchOptions,
	): Promise<EndpointGroup> {
		return httpClient.post(
			`${endpointGroupUrl}`,
			body,
			options,
		);
	},

	update(
		id: string,
		body: EndpointGroup,
		options?: FetchOptions,
	): Promise<EndpointGroup> {
		return httpClient.patch(
			`${endpointGroupUrl}/${id}`,
			body,
			options,
		);
	},

	delete(id: string): Promise<EndpointGroup> {
		return httpClient.delete(
			`/${`${endpointGroupUrl}`}/${id}`,
		);
	},

	updatePassword(body: {
		oldPassword: string;
		newPassword: string;
	}) {
		return httpClient.patch(`${endpointGroupUrl}/`, body);
	},

	deleteManySoftByIds(ids: string[]) {
		return httpClient.delete(
			`${endpointGroupUrl}/${ids.toString()}/soft_ids`,
		);
	},

	deleteManyByIds(ids: string[]) {
		return httpClient.delete(
			`${endpointGroupUrl}/${ids.toString()}`,
		);
	},

	getMe() {
		return httpClient.get(`${endpointGroupUrl}/me`, {});
	},

	paginate(
		query?: PaginationParams,
		options?: FetchOptions,
	): Promise<PaginateResponse<EndpointGroup>> {
		return httpClient.get(
			`${endpointGroupUrl}/paginate`,
			query,
			options,
		);
	},
};
