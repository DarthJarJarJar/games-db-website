let x = [];
const gameObject = {
	id: 19113,
	rating: 5
};

const newGame = {};

newGame.id = 740;
newGame.rating = 5;

x.push(newGame);

const game2 = {};
game2.id = 19000;
game2.rating = 4.5;

x.push(game2);

let rating;
let searchedGame = 19000;
for (let game of x) {
	if (game.id === searchedGame) {
		rating = game.rating;
	}
}
console.log(rating);
