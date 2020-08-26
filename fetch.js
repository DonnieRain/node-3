let url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3`;
let data = [];

let getCourse = async () => {
	return await fetch(url)
					.then(result => {
						console.log(result);
						return result.json();
					})
					.then(result => {
						result.forEach(e => data.push(e));
						console.dir(data);
					})
					.catch((err) => console.log(err));
}

getCourse();
