const weekDays = { "Mo": "Понедельник", "Tu": "Вторник", "We": "Среда", "Th": "Четверг", "Fr": "Пятница", "Sa": "Суббота", "Su": "Воскресенье",
};

const romDays = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];

translate = (obj, translate) => {
    const keys = Object.keys(obj);

    for (const key in keys) obj[keys[key]] = translate[key];
};

translate(weekDays, romDays);
console.log(weekDays);