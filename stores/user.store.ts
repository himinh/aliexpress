import { userApi } from "~/apis/user.api";
import type { User } from "~/types/user.type";

export const useUserStore = defineStore("user", () => {
	// const loading = ref<boolean>(false);
	const users = ref<User[] | null>();

	const { data } = useAsyncData(() => userApi.getAll());

	users.value = data.value;

	return {
		users,
	};
});
