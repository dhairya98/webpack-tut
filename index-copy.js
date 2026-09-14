import { sum } from "./sum";
import "./style/style.scss";
import "./fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf";
import { product } from "./product";
import dayjs from "dayjs";
import _ from "lodash";

document.getElementById("btn").addEventListener("click", () => {
	const result = product(3, 3);
	const newResult = sum(3, 2);
	document.getElementById("result").innerHTML = `The product is: ${result}`;
});
