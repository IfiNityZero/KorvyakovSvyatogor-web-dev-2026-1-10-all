// Массив со всеми блюдами меню.
// keyword — уникальное название блюда на латинице (используется как data-атрибут и значение формы)
// name    — название блюда
// price   — цена в рублях
// category — категория блюда (soup, main_course, drink)
// count    — вес/объём
// image    — путь к изображению

const dishes = [
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'images/menu/soups/gaspacho.jpg'
    },
    {
        keyword: 'gribnoy',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'images/menu/soups/gribnoy.jpg'
    },
    {
        keyword: 'norwegian',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'images/menu/soups/norwegian.jpg'
    },
    {
        keyword: 'potato_mushrooms',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main_course',
        count: '250 г',
        image: 'images/menu/main_course/potato_mushrooms.jpg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main_course',
        count: '310 г',
        image: 'images/menu/main_course/lasagna.jpg'
    },
    {
        keyword: 'chicken_cutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main_course',
        count: '280 г',
        image: 'images/menu/main_course/chicken_cutlets.jpg'
    },
    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'images/menu/beverages/orange_juice.jpg'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'images/menu/beverages/apple_juice.jpg'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'images/menu/beverages/carrot_juice.jpg'
    }
];
