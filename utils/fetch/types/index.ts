export type SearchParams = {
	[key: string]: string | number;
};

export type MethodType = "get" | "post" | "delete" | "patch" | "put";

export type PaginationParams = {
	_page?: number;
	_limit?: number;
	_sort?: string;
	_populate?: string;
	_fields?: string;
} & SearchParams;

export type FetchOptions = {
	headers?: { [key: string]: string };
	mode?: "cors" | "no-cors" | "same-origin";
	credentials?: "omit" | "same-origin" | "include";
	cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached";
	redirect?: "follow" | "error" | "manual";
	referrer?: string;
	referrerPolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "unsafe-url";
	integrity?: string;
	baseURL?: string;
	query?: PaginationParams;
	method?: MethodType;
	body?: any;
};
