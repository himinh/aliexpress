import { initializeApp } from "firebase/app";
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from "firebase/auth";

export const useFirebase = () => {
	const config = useRuntimeConfig();
	const { socialLogin } = useAuthStore();

	const app = initializeApp(config.public.firebaseConfig);

	const auth = getAuth();

	/**
	 * Facebook login
	 */
	const facebookLogin = async () => {
		const provider = new FacebookAuthProvider();

		const userCredential = await signInWithPopup(auth, provider);
	};

	/**
	 * Google login
	 */
	const googleLogin = async () => {
		const provider = new GoogleAuthProvider();

		const { user } = await signInWithPopup(auth, provider);

		const userItem: SocialLogin = {
			socialID: user.uid,
			fullName: user.displayName,
			accountType: AccountType.GOOGLE,
			email: user.email,
			avatar: user.photoURL,
			dateOfBirth: null,
			gender: Gender.OTHER,
			deviceID: null,
		};

		await socialLogin(userItem);
	};

	/**
	 * Firebase logout
	 */
	const firebaseLogout = async () => {
		await signOut(auth);
	};

	return { app, facebookLogin, googleLogin, firebaseLogout };
};
