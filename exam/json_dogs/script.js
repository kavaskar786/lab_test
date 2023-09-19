document.addEventListener('DOMContentLoaded', function () {
    fetch('dogs.json')
        .then((response) => response.json())
        .then((data) => {
            const dogsList = document.getElementById('dogs-list');
            const ul = document.createElement('ul');

            data.slice(0, 10).forEach((dog) => {
                const li = document.createElement('li');
                li.textContent = `Breed: ${dog.breed}, Color: ${dog.color}, Country: ${dog.country}`;
                ul.appendChild(li);
            });

            dogsList.appendChild(ul);
        })
        .catch((error) => {
            console.error('Error fetching dogs.json:', error);
            alert('Failed to fetch dog data.');
        });
});
