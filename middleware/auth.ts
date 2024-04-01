export default defineNuxtRouteMiddleware((to, from) => {
	const { authUser } = useAuthStore();

	console.log({ to, from });

	if (!authUser) return navigateTo("/auth/login");
});
