import { sum } from "./sum";

import "./style/style.scss";
import "./style/style-copy.scss";
import "./fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf";
import dayjs from "dayjs";

document.getElementById("btn").addEventListener("click", () => {
	const unusedVariable = "55555";
	const result = sum(2, 3);
	document.getElementById("result").innerHTML = `The sum is: ${result}`;
});
