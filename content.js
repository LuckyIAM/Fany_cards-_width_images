const getNumber = (max = 101, min = 0) => Math.floor(Math.random() * (max - min) + min); 

const getColor = (a=100) => `rgba(${getNumber()},${getNumber()},${getNumber()},${a/100})`;

const getWord = (n, w0, w1, w2) => {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1;
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2;
        } else {
            return w0;
        }
    } else {
        return w0;
    }
} 

const images = [ "face-smile", "face-tired", "face-surprise", 
"face-smile-wink", "face-smile-beam", "face-sad-tear", "face-sad-cry", 
"face-rolling-eyes", "face-meh-blank", "face-meh", "face-laugh-wink", 
"face-laugh-squint", "face-laugh-beam", "face-laugh", "face-kiss-wink-heart", 
"face-kiss-beam", "face-kiss", "face-grin-wink", "face-grin-wide", "face-grin-tongue-wink", 
"face-grin-tongue-squint", "face-grin-tongue", "face-grin-tears", "face-grin-stars", 
"face-grin-squint-tears", "face-grin-squint", "face-grin-hearts", "face-grin-beam-sweat", 
"face-grin-beam", "face-grin", "face-grimace", "face-frown-open", "face-frown", "face-flushed", 
"face-dizzy", "face-angry", ]; 

const names = ["Агафья","Аглая","Агния","Агриппина","Аза","Акулина","Алевтина","Александра",
"Алина","Алла","Анастасия","Ангелина","Анжела","Анжелика","Анна","Антонина","Анфиса","Авдей",
"Авксентий","Агапит","Агафон","Акакий","Акиндин","Александр","Алексей","Альберт","Альвиан","Анатолий",
"Андрей","Аникита","Антон","Антонин","Анфим","Аристарх","Аркадий","Арсений","Артём","Артемий","Артур",
"Архипп","Афанасий"]; 

class User {
    constructor(name, age, pic, color, cnt) {
    this.name = name;
    this.age = age;
    this.image = pic;
    this.color = color;
    this.cnt = cnt;
    }
    getInfo(dic) {
        let content = "";
        for (let i = 0; i < this.cnt; i++) {
            let word = dic[getNumber(dic.length)];
            if (i === 0) {
                content += word[0].toUpperCase() + word.slice(1);
            } else {
                content += " " + word;
            }
        }
        return content;
    }
    getAge() {
        return `${this.age} ${getWord(this.age, "лет", "год", "года")}`
        } 
}   

