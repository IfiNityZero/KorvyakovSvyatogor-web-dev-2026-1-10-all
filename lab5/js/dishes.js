// Массив со всеми блюдами меню.
// keyword  — уникальное название блюда на латинице
// name     — название блюда
// price    — цена в рублях
// category — категория блюда (soup, main_course, salad, drink, dessert)
// kind     — тип блюда для фильтрации
// count    — вес/объём
// image    — путь к изображению

const dishes = [
    // ===== Супы =====
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        kind: 'veg',
        count: '350 г',
        image: 'images/menu/soups/gaspacho.jpg'
    },
    {
        keyword: 'gribnoy',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        kind: 'veg',
        count: '330 г',
        image: 'images/menu/soups/gribnoy.jpg'
    },
    {
        keyword: 'norwegian',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        kind: 'fish',
        count: '330 г',
        image: 'images/menu/soups/norwegian.jpg'
    },
    {
        keyword: 'tomyum',
        name: 'Том Ям с креветками',
        price: 365,
        category: 'soup',
        kind: 'fish',
        count: '350 г',
        image: 'images/menu/soups/tomyum.jpg'
    },
    {
        keyword: 'chicken_soup',
        name: 'Куриный суп с лапшой',
        price: 250,
        category: 'soup',
        kind: 'meat',
        count: '350 г',
        image: 'images/menu/soups/chicken.jpg'
    },
    {
        keyword: 'ramen',
        name: 'Рамен',
        price: 340,
        category: 'soup',
        kind: 'meat',
        count: '350 г',
        image: 'images/menu/soups/ramen.jpg'
    },

    // ===== Главные блюда =====
    {
        keyword: 'potato_mushrooms',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main_course',
        kind: 'veg',
        count: '250 г',
        image: 'images/menu/main_course/potato_mushrooms.jpg'
    },
    {
        keyword: 'pizza',
        name: 'Пицца Маргарита',
        price: 320,
        category: 'main_course',
        kind: 'veg',
        count: '300 г',
        image: 'images/menu/main_course/pizza.jpg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main_course',
        kind: 'meat',
        count: '310 г',
        image: 'images/menu/main_course/lasagna.jpg'
    },
    {
        keyword: 'chicken_cutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main_course',
        kind: 'meat',
        count: '280 г',
        image: 'images/menu/main_course/chicken_cutlets.jpg'
    },
    {
        keyword: 'fish_rice',
        name: 'Рис с рыбными шариками',
        price: 340,
        category: 'main_course',
        kind: 'fish',
        count: '300 г',
        image: 'images/menu/main_course/fish_rice.jpg'
    },
    {
        keyword: 'shrimp_pasta',
        name: 'Паста с креветками',
        price: 390,
        category: 'main_course',
        kind: 'fish',
        count: '300 г',
        image: 'images/menu/main_course/shrimp_pasta.jpg'
    },

    // ===== Салаты и стартеры =====
    {
        keyword: 'tuna_salad',
        name: 'Салат с тунцом',
        price: 310,
        category: 'salad',
        kind: 'fish',
        count: '220 г',
        image: 'images/menu/salads_starters/tuna_salad.jpg'
    },
    {
        keyword: 'caesar',
        name: 'Цезарь с курицей',
        price: 250,
        category: 'salad',
        kind: 'meat',
        count: '220 г',
        image: 'images/menu/salads_starters/caesar.jpg'
    },
    {
        keyword: 'korean_salad',
        name: 'Корейский салат с овощами и яйцом',
        price: 330,
        category: 'salad',
        kind: 'veg',
        count: '250 г',
        image: 'images/menu/salads_starters/korean_salad.jpg'
    },
    {
        keyword: 'caprese',
        name: 'Салат Капрезе',
        price: 280,
        category: 'salad',
        kind: 'veg',
        count: '200 г',
        image: 'images/menu/salads_starters/caprese.jpg'
    },
    {
        keyword: 'french_fries',
        name: 'Картофель фри',
        price: 150,
        category: 'salad',
        kind: 'veg',
        count: '150 г',
        image: 'images/menu/salads_starters/french_fries.jpg'
    },
    {
        keyword: 'potato_wedges',
        name: 'Картофельные дольки',
        price: 160,
        category: 'salad',
        kind: 'veg',
        count: '150 г',
        image: 'images/menu/salads_starters/potato_wedges.jpg'
    },

    // ===== Напитки =====
    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'images/menu/beverages/orange_juice.jpg'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'images/menu/beverages/apple_juice.jpg'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        kind: 'cold',
        count: '300 мл',
        image: 'images/menu/beverages/carrot_juice.jpg'
    },
    {
        keyword: 'green_tea',
        name: 'Зелёный чай',
        price: 100,
        category: 'drink',
        kind: 'hot',
        count: '300 мл',
        image: 'images/menu/beverages/green_tea.jpg'
    },
    {
        keyword: 'black_tea',
        name: 'Чёрный чай',
        price: 80,
        category: 'drink',
        kind: 'hot',
        count: '300 мл',
        image: 'images/menu/beverages/black_tea.jpg'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 190,
        category: 'drink',
        kind: 'hot',
        count: '200 мл',
        image: 'images/menu/beverages/cappuccino.jpg'
    },

    // ===== Десерты =====
    {
        keyword: 'donut',
        name: 'Пончик',
        price: 90,
        category: 'dessert',
        kind: 'small',
        count: '100 г',
        image: 'images/menu/desserts/donut.jpg'
    },
    {
        keyword: 'donut_choco',
        name: 'Пончик с шоколадной глазурью',
        price: 110,
        category: 'dessert',
        kind: 'small',
        count: '110 г',
        image: 'images/menu/desserts/donut_choco.jpg'
    },
    {
        keyword: 'muffin',
        name: 'Шоколадный маффин',
        price: 140,
        category: 'dessert',
        kind: 'small',
        count: '120 г',
        image: 'images/menu/desserts/muffin.jpg'
    },
    {
        keyword: 'cheesecake',
        name: 'Чизкейк классический',
        price: 200,
        category: 'dessert',
        kind: 'medium',
        count: '180 г',
        image: 'images/menu/desserts/cheesecake.jpg'
    },
    {
        keyword: 'choco_cheesecake',
        name: 'Чизкейк шоколадный',
        price: 240,
        category: 'dessert',
        kind: 'medium',
        count: '180 г',
        image: 'images/menu/desserts/choco_cheesecake.jpg'
    },
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        kind: 'large',
        count: '200 г',
        image: 'images/menu/desserts/baklava.jpg'
    }
];
