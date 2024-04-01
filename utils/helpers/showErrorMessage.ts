import { formatErrorMessage } from ".";

export const showErrorMessage = (error: any) => {
	let errorType = error.name;
	let errorTitle = error.name;

	if (error.data) {
		errorType = error.data.type;
		errorTitle = error.data.title;
	}
	const message = error.data
		? formatErrorMessage(error.data.details, errorType)
		: error.message;

	return {
		title: errorTitle,
		message,
	};
};
