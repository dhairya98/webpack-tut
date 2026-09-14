import { sum } from "./sum";

document.getElementById("btn").addEventListener("click", () => {
	const result = sum(2, 3);
	document.getElementById("result").innerHTML = `The sum is: ${result}`;
});
