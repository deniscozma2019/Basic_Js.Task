class Validator {
    static isEmail(email) {
        const reg =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        return reg.test(String(email).toLowerCase());
    }

    static isDomain(domain) {
        const re =
            /(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        return reg.test(String(domain).toLowerCase());
    }

    static isDate(date) {
        const reg =
            /^(?:(?:31([\/\-.])(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        return reg.test(date);
    }

    static isPhone(phone) {
        const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

        return reg.test(phone);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    console.log(Validator.isEmail("denis.cozma@gmail.com"));
    console.log(Validator.isDate("22.07.2000"));
    console.log(Validator.isDomain("metro.org"));
    console.log(Validator.isPhone("022-05-4585"));

});

