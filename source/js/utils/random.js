export default function(min, max, round){
	var number = Math.random() * (max - min) + min;
	return round ? Math.round(number) : number;
}
