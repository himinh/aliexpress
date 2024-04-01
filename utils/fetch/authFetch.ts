import { HttpClient } from "./httpClient";

class AuthFetch extends HttpClient {
	constructor() {
		super(true);
	}
}

export const authFetch = new AuthFetch();
