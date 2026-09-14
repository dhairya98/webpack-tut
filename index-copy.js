import { sum } from "./sum";
import "./style/style.scss";
import "./fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf";

document.getElementById("btn").addEventListener("click", () => {
	const result = product(3, 3);
	document.getElementById("result").innerHTML = `The product is: ${result}`;
});
