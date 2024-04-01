export default defineNuxtRouteMiddleware((to) => {
	// Auth store here
	const auth = useAuthStore();

	console.log({ auth, to });
	// await auth.loadProfile()

	// if (to.meta.requiresAuth && !auth.isAuth) {
	//   return navigateTo('/login')
	// }
});
