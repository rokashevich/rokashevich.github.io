function createCounters(numCounters) {
    const template = document.getElementById('counter-template');
    const container = document.getElementById('counters-container');

    for (let i = 0; i < numCounters; i++) {
        const clone = template.content.cloneNode(true);
        clone.querySelector('h1').textContent = `Counter App ${i+1}`;
        let counter = parseInt(localStorage.getItem(`counter${i+1}`)) || 0;
        clone.querySelector('div').querySelector('div').textContent = counter;
        clone.querySelector('div').id = i+1;
        container.appendChild(clone);
    }

    // Event delegation for better performance
    container.addEventListener('click', function(e) {
        if (e.target.classList.contains('increment-btn')) {
        const counterValue = e.target.previousElementSibling;
        const id = e.target.parentElement.id;
        counterValue.textContent = parseInt(counterValue.textContent) + 1;
        localStorage.setItem(`counter${id}`, counterValue.textContent.toString());
        }
    });
}

createCounters(5); // Creates 5 counters
