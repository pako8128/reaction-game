const setup = () => {
	const cells = document.querySelectorAll('.cell');
	cells.forEach((cell) => {
		cell.addEventListener('click', (event) => {
			if (cell.classList.contains('active')) {
				cell.classList.remove('active');
			} else {
				loose();
			}
		});
	});

	setInterval(timeToggle, 1000);
};

const timeToggle = () => {
	const cells = document.querySelectorAll('.cell:not(.active)');
	const randomCell = cells.item(Math.floor(Math.random() * cells.length));
	randomCell.classList.add('active');
};

const loose = () => {
	alert("You Loose!");
	const cells = document.querySelectorAll('.cell.active');
	cells.forEach((cell) => {
		cell.classList.remove('active');
	});
};

setup();
