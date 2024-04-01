import { authApi } from "~/apis/auth.api";
import type {
	AuthUser,
	Login,
	Register,
	ResetPassword,
	SocialLogin,
} from "~/types/auth.type";
import { localStorageManager, showErrorMessage } from "~/utils/helpers";

export const useAuthStore = defineStore("auth", () => {
	const forgotPassSent = reactive({
		isSent: false,
		email: "",
	});

	const authUser = ref<AuthUser | null>(localStorageManager.getAuth());
	const loading = ref<boolean>(false);

	/**
	 * Login
	 *
	 * @param inputs
	 * @returns
	 */
	const login = async (inputs: Login) => {
		const data = await _asyncHandler(() => authApi.login(inputs));

		if (data) _setAuth(data);
	};

	const socialLogin = async (inputs: SocialLogin) => {
		const data = await _asyncHandler(() => authApi.socialLogin(inputs));

		if (data) _setAuth(data);
	};

	/**
	 * Register
	 *
	 * @param inputs
	 */
	const register = async (inputs: Register) => {
		const data = await _asyncHandler(() => authApi.register(inputs));

		if (data) _setAuth(data.value!);
	};
	/**
	 * Logout
	 */
	const logout = async () => {
		await useAsyncData(() => authApi.logout());

		navigateTo("/auth/login");
		_clearAuth();
	};

	/**
	 * Forgot pass
	 *
	 * @param rfToken
	 * @returns
	 */
	const forgotPassword = async (email: string) => {
		const data = await _asyncHandler(() => authApi.forgotPassword(email));

		if (data) setForgotPassSent(true, data.email);
	};

	/**
	 * Reset password
	 *
	 * @param inputs
	 */
	const resetPassword = async (inputs: ResetPassword) => {
		const data = await _asyncHandler(() => authApi.resetPassword(inputs));

		if (data) {
			_setAuth(data);

			return data;
		}
	};

	/**
	 * Get access token
	 *
	 * @returns
	 */
	const getAccessToken = async () => {
		if (!authUser.value) return null;

		const currentMS = new Date().getTime();
		const { accessToken, refreshToken } = authUser.value;

		if (accessToken.expiresAt > currentMS) return accessToken.token;

		if (refreshToken.expiresAt < currentMS) {
			_clearAuth();
			return null;
		}

		const data = await refreshAuthByRfToken(refreshToken.token);

		if (data) return data.accessToken.token;

		_clearAuth();
		return null;
	};

	/**
	 * Refresh auth by refreshToken
	 *
	 * @param rfToken
	 * @returns
	 */
	const refreshAuthByRfToken = async (rfToken: string) => {
		try {
			const data = await authApi.refreshToken(rfToken);

			_setAuth(data);

			return data;
		} catch (error) {
			showErrorMessage(error);

			_clearAuth();

			return null;
		}
	};

	/**
	 * Set auth
	 *
	 * @param data
	 */
	const _setAuth = (data: AuthUser) => {
		authUser.value = { ...authUser.value, ...data };
		localStorageManager.setAuth(authUser.value);
	};

	/**
	 * Clear auth
	 */
	const _clearAuth = () => {
		localStorageManager.clearAuth();
		authUser.value = null;
	};

	const setForgotPassSent = (isSent: boolean, email?: string) => {
		forgotPassSent.isSent = isSent;

		if (email) forgotPassSent.email = email;
	};

	/**
	 * async handler
	 *
	 * @param handler
	 * @returns
	 */
	const _asyncHandler = async (handler: () => Promise<any>) => {
		loading.value = true;

		const { data, error } = await useAsyncData(handler);

		loading.value = false;

		if (error.value) {
			showErrorMessage(error.value);
			return null;
		}

		return data.value;
	};

	return {
		authUser,
		loading,
		login,
		register,
		logout,
		getAccessToken,
		setForgotPassSent,
		forgotPassword,
		forgotPassSent,
		resetPassword,
		socialLogin,
	};
});
