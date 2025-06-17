const container = document.querySelector('.container');

function createGrid(size) {
    container.innerHTML = '';

    const divSize = 512 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.width = divSize + 'px';
        div.style.height = divSize + 'px';

        div.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });

        container.appendChild(div);
    }
}

createGrid(16);
document.getElementById('new-grid').addEventListener('click', function () {
    const size = prompt('Enter number of squares per side (max 100):');

    if (size === null) return;

    const gridSize = parseInt(size);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert('Please enter a valid number between 1 and 100');
        return;
    }

    createGrid(gridSize);
});
