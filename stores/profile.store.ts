import type { User } from "~/types/user.type";

export const userProfileStore = defineStore("profile", () => {
	const loading = ref<boolean>(false);
	const user = ref<User | null>(null);

	/**
	 * Set user
	 *
	 * @param data
	 */
	const setUser = (data: User) => {
		user.value = data;
	};

	/**
	 * Clear user
	 *
	 * @param data
	 */
	const clearUser = (data: User) => {
		user.value = data;
	};

	return {
		loading,
		setUser,
		clearUser,
	};
});
