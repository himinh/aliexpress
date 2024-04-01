import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware((to, from) => {
	const authStore = useAuthStore();
	const { authUser } = storeToRefs(authStore);

	if (authUser.value?.user) return navigateTo("/");

	console.log({ to });
	return navigateTo(from.path);
});
