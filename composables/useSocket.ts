import { io } from "socket.io-client";

export const useSocket = () => {
	const socket = io("http://localhost:9898", {
		extraHeaders: {
			authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU1NDhlZTczMmM1NWFhODhkMmJlZDQiLCJyb2xlIjoiVVNFUiIsImZ1bGxOYW1lIjoiQ2jDrHUgQ-G6r20gTWluaCIsImF2YXRhciI6IiIsImlhdCI6MTY4ODcxNjk5NCwiZXhwIjoxNjg5MzE2OTk0fQ.iy8KyLkaqad9P0dKVxX1mPh6P9LWWayV7KaH_RBpdeA",
		},
	});

	socket.on("connect", () => {
		// console.log('socket connected')
	});

	socket.on("disconnect", () => {
		// console.log('socket disconnected')
	});

	return {
		socket,
	};
};
