import type { AuthUser } from "~/types";

export const storageKeys = {
	token: "_app_login",
	carts: "carts",
};

export const localStorageManager = {
	getAuth(): AuthUser | null {
		const authString = localStorage.getItem(storageKeys.token);

		return authString ? JSON.parse(authString) : null;
	},

	setAuth(auth: AuthUser) {
		localStorage.setItem(storageKeys.token, JSON.stringify(auth));
	},

	clearAuth() {
		localStorage.removeItem(storageKeys.token);
	},

	getCarts() {
		const carts = localStorage.getItem(storageKeys.carts);

		return carts ? JSON.parse(carts) : null;
	},

	setCarts(carts: any[]) {
		localStorage.setItem(storageKeys.carts, JSON.stringify(carts));
	},

	clearCarts() {
		localStorage.removeItem(storageKeys.carts);
	},
};
