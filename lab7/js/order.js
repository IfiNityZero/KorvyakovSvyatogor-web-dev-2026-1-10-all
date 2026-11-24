// Выбор блюд, вывод состава заказа и подсчёт итоговой стоимости.

const selectedDishes = {
    soup: null,
    main_course: null,
    drink: null
};

function findDish(keyword) {
    return dishes.find(dish => dish.keyword === keyword);
}

function getDishPrice(keyword) {
    const dish = findDish(keyword);
    return dish ? dish.price : 0;
}

function selectDish(keyword) {
    const dish = findDish(keyword);

    if (!dish) {
        return;
    }

    selectedDishes[dish.category] = dish.keyword;

    // выделяем выбранную карточку в пределах её категории
    const cards = document.querySelectorAll('.dishes[data-category="' + dish.category + '"] .dish');
    cards.forEach(card => {
        card.classList.toggle('dish--selected', card.dataset.dish === dish.keyword);
    });

    updateHiddenFields();
    updateOrderSummary();
}

function updateHiddenFields() {
    CATEGORY_ORDER.forEach(category => {
        const input = document.getElementById('field-' + category);
        input.value = selectedDishes[category] || '';
    });
}

function updateOrderSummary() {
    const summary = document.getElementById('order-summary');
    const chosenCount = CATEGORY_ORDER.filter(category => selectedDishes[category]).length;

    if (chosenCount === 0) {
        summary.innerHTML = '<p class="order-summary__empty">Ничего не выбрано</p>';
        return;
    }

    let html = '';

    CATEGORY_ORDER.forEach(category => {
        const keyword = selectedDishes[category];
        const dish = keyword ? findDish(keyword) : null;

        html += '<div class="order-summary__row">';
        html += '<p class="order-summary__category">' + CATEGORY_LABELS[category] + '</p>';

        if (dish) {
            html += '<p class="order-summary__value">' + dish.name + ' ' + dish.price + '&#8381;</p>';
        } else {
            const emptyText = category === 'drink' ? 'Напиток не выбран' : 'Блюдо не выбрано';
            html += '<p class="order-summary__value order-summary__value--empty">' + emptyText + '</p>';
        }

        html += '</div>';
    });

    const total = CATEGORY_ORDER.reduce(function (sum, category) {
        return sum + getDishPrice(selectedDishes[category]);
    }, 0);

    html += '<div class="order-summary__row order-summary__row--total">';
    html += '<p class="order-summary__category">Стоимость заказа</p>';
    html += '<p class="order-summary__total">' + total + '&#8381;</p>';
    html += '</div>';

    summary.innerHTML = html;
}

document.addEventListener('click', function (event) {
    const button = event.target.closest('.dish__button');

    if (!button) {
        return;
    }

    const card = button.closest('.dish');
    selectDish(card.dataset.dish);
});

