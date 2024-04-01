import { endpointApi } from "~/apis/endpoint.api";
import type { Endpoint } from "~/types";
import type { PaginationParams } from "~/utils/fetch/types";

export const useEndpointStore = defineStore("endpoint", () => {
	const limit = ref<number>(10);
	const page = ref<number>(1);
	const sort = ref<string>("-createdAt");
	const populate = ref<string>("");
	const fields = ref<string>("");
	// const endpoints = ref<Endpoint[] | null>(null);
	// const pageInfo = ref<{
	// 	hasNextPage: boolean;
	// 	hasPrevPage: boolean;
	// 	limit: number;
	// 	nextPage: number;
	// 	page: number;
	// 	pagingCounter: number;
	// 	prevPage: number;
	// 	totalData: number;
	// 	totalPages: number;
	// } | null>(null);

	const { data, pending } = useAsyncData(
		() =>
			endpointApi.paginate({
				_limit: limit.value,
				_page: page.value,
				_populate: populate.value,
				_fields: fields.value,
				_sort: sort.value,
			}),
		{
			watch: [limit, page, sort],
		},
	);

	const create = (item: Endpoint) => {
		return useAsyncData(() => endpointApi.create(item));
	};

	const getAllEndpoints = () => {
		return useAsyncData(() => endpointApi.getAll());
	};

	const getEndpointsPaginate = (query: PaginationParams) => {
		return useAsyncData(() => endpointApi.paginate(query), {});
	};

	return {
		limit,
		page,
		sort,
		pending,
		data,
		create,
		getAllEndpoints,
		getEndpointsPaginate,
	};
});
