export const useCount = () => {
	const count = useState("count", () => Math.round(Math.random() * 20));

	const inc = () => {
		count.value += 1;
	};

	const dec = () => {
		count.value -= 1;
	};

	return {
		count,
		inc,
		dec,
	};
};
