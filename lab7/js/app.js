// Точка входа: загружаем блюда и инициализируем страницу.

async function init() {
    await loadDishes();

    renderDishes();
    updateHiddenFields();
    updateOrderSummary();
}

init();
