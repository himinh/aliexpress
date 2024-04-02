import { ErrorType } from "~/enums/errorType";

export const formatErrorMessage = (
	details: string[],
	errorType: string,
) => {
	const messages = details.map((message) => {
		const words = message.split(" ");

		const label = words[0];

		const msg = words.slice(1).join(" ");

		switch (errorType) {
			case ErrorType.ValidationExceptions:
				return `<p><b>${label}</b>:  ${msg}</p>`;

			default:
				return message;
		}
	});

	return messages.join("\n");
};
