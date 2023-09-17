(function () {
    const buttons = document.querySelectorAll('.btn'); // Corrected the selector
    const storeItems = document.querySelectorAll('.store-item'); // Corrected the selector

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => { // Corrected the method name
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeItems.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
})();
