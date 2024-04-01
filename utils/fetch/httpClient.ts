import type { FetchOptions, MethodType, QueryParams } from "./types";

export class HttpClient {
	private readonly isAuth: boolean;

	constructor(isAuth: boolean) {
		this.isAuth = isAuth;
	}

	request<ResT>(
		method: MethodType,
		endpoint: string,
		requestData?: any,
		opts?: FetchOptions,
	) {
		const options = {
			...opts,
			method,
			baseURL: opts?.baseURL ?? useRuntimeConfig().public.apiBase,
		};

		if (this.isAuth) {
			this._addAuthToken(options);
		}

		if (requestData) {
			options.body = requestData;
		}

		return $fetch<ResT>(endpoint, options);
	}

	private _addAuthToken(fetchOptions: FetchOptions) {
		// Check and add access token to header
		const onRequest = async ({ options }: any) => {
			const authStore = useAuthStore();
			const token = await authStore.getAccessToken();

			if (token)
				options.headers = {
					...options.headers,
					authorization: `Bearer ${token}`,
				};
		};

		Object.assign(fetchOptions, { onRequest });
	}

	get<ResT>(endpoint: string, query?: QueryParams, opts?: FetchOptions) {
		return this.request<ResT>("get", endpoint, undefined, {
			...opts,
			query,
		});
	}

	post<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
		return this.request<ResT>("post", endpoint, body, opts);
	}

	patch<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
		return this.request<ResT>("patch", endpoint, body, opts);
	}

	put<ResT>(endpoint: string, body: any, opts?: FetchOptions) {
		return this.request<ResT>("put", endpoint, body, opts);
	}

	delete<ResT>(endpoint: string, opts?: FetchOptions) {
		return this.request<ResT>("delete", endpoint, undefined, opts);
	}
}

export const httpClient = new HttpClient(false);
