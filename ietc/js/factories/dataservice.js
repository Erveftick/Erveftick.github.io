/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */

    var correctAnswers = [1, 1, 1, 3, 2, 3, 1, 0, 2, 1, 1, 1];

    var quizQuestions  = [
        {
            type: "image",
            text: "Лише справжній(я) інженер може відрізнити гайку, шестерню та шайбу. Де ж на малюнку гайка? (потрібно натиснути на відповідне фото)",
            possibilities: [
                {
                    answer: "test/Picture1.jpg"
                },
                {
                    answer: "test/Picture2.jpg"
                },
                {
                    answer: "test/Picture3.jpg"
                }
            ],
            desc: "",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "На малюнку зображено механізм з’єднання декількох деталей. В яку сторону буде крутитися шестерня “Б”, якщо шестерня “А” обертається праворуч?",
            image: "test/Picture4.png",
            possibilities: [
                {
                    answer: "За годинниковою стрілкою"
                },
                {
                    answer: "Проти годинникової стрілки"
                },
                {
                    answer: "Не буде рухатись"
                }
            ],
            desc: "Пояснення: якщо одна шестерня крутиться ліворуч, то сусідня з нею - праворуч і навпаки",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Саме цей пристрій використовують справжні інженери. Що це?",
            image: "test/Picture5.png",
            possibilities: [
                {
                    answer: "Рейсмус"
                },
                {
                    answer: "Штангенциркуль"
                },
                {
                    answer: "Фуганок"
                }
            ],
            desc: "Пояснення: Штангенциркуль — це інструмент, призначений для вимірювань з високою точністю зовнішніх і внутрішніх розмірів предметів, а також глибини отворів. Рейсмус -— це теслярські пристосування, призначені для розмітки заготовок. За допомогою такого рейсмуса легко можна накреслити паралельні лінії відносно базової. Фуганок — довгий рубанок, потрібен для стругання, вирівнювання довгих нерівних дерев'яних площин. ",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Інженери повинні знати математику! Задача 1. В озері є латаття (водяна рослина з великим листям та білими або жовтими квітками), кількість якого щодня подвоюється. Латаття повністю вкриє озеро за 48 днів. За скільки днів воно вкриє половину озера?",
            possibilities: [
                {
                    answer: "24"
                },
                {
                    answer: "12"
                },
                {
                    answer: "38"
                },
                {
                    answer: "47"
                }
            ],
            desc: "Пояснення: оскільки кількість латаття подвоюється кожного дня, то попереднього дня його було удвічі менше, тобто латаття вкривало половину озера. Отже, відповідь - 47 днів.",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Інженери повинні знати математику! Задача 2. Чоловік купив годинник, лінійку і циркуль за 216 гривень. Годинник та лінійка разом коштують утричі більше, ніж циркуль. А лінійка та циркуль разом коштують удвічі менше, ніж годинник. Яка була ціна кожного?",
            possibilities: [
                {
                    answer: "Годинник - 143, лінійка - 18, циркуль - 55"
                },
                {
                    answer: "Годинник - 144, лінійка - 19, циркуль - 53"
                },
                {
                    answer: "Годинник - 144, лінійка - 18, циркуль - 54"
                },
                {
                    answer: "Годинник - 145, лінійка- 17, циркуль - 54"
                }
            ],
            desc: "Пояснення: годинник + лінійка = 162, 3 циркулі коштують 162. Лінійка + циркуль = 72 - це половина вартості годинника. Лінійка + циркуль + годинник = 216. Отже, відповідь правильна.",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Уяви, що ти головний інженер(ка) і тобі потрібно розподілити 202 інженерні інструменти між 60 працівниками. Деяким працівникам ти видав(ла) по 4 інструменти, решті — по 2 інструменти. Вважаючи, що всі інструменти було роздано, скільки працівників отримали лише 2 інженерні інструменти?",
            possibilities: [
                {
                    answer: "27"
                },
                {
                    answer: "20"
                },
                {
                    answer: "18"
                },
                {
                    answer: "19"
                }
            ],
            desc: "Пояснення: Нехай Х працівників отримало по 4 інструменти, тоді У працівників отримали по 2 інструменти. Згідно з умовою, можна скласти 2 рівняння: Х + У = 60 та 4*Х + 2*У = 202. Розв’язавши систему рівнянь, можна отримати, що У = 19",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "На малюнку зображено трактор. Яка гусениця повинна рухатись швидше, щоб трактор повертався у напрямку вказаному стрілкою?",
            image: "test/Picture6.png",
            possibilities: [
                {
                    answer: "Гусениця А"
                },
                {
                    answer: "Гусениця В"
                },
                {
                    answer: "Повинні рухатись однаково"
                }
            ],
            desc: "Пояснення: щоб повернутись праворуч, за однаковий час, гусениця В повинна пройти більшу відстань. Отже, швидкість гусениці В повинна бути більшою.",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Якщо верхнє колесо обертається у напрямку вказаному стрілкою зліва, то в якому напрямку обертається нижнє колесо?",
            image: "test/Picture7.png",
            possibilities: [
                {
                    answer: "У напрямку А"
                },
                {
                    answer: "В обох напрямках"
                },
                {
                    answer: "У напрямку В"
                }
            ],
            desc: "Пояснення: достатньо лише подивитись на малюнок, та уявити, що верхнє колесо почало рухатись. Тоді зовнішній шнур повертає нижнє колесо за годинниковою стрілкою, тобто у напрямку А.",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "У якому напрямку буде рухатись колесо після того, як ручку зліва рухати спочатку вниз, а потім різко вгору?",
            image: "test/Picture8.png",
            possibilities: [
                {
                    answer: "Вперед-назад по стрілкам А-В"
                },
                {
                    answer: "У напрямку стрілки А"
                },
                {
                    answer: "У напрямку стрілки В"
                }
            ],
            desc: "Пояснення: рухаючи ручку вниз, колесо починає свій рух. Але після різкого змінення руху вгору — колесо розганяється та рухається у напрямку стрілки В.",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Тепер потрібно показати свої знання з фізики. Якщо на круглий диск, вказаний на малюнку, одночасно діють дві однакові сили 1 та 2, то в якому напрямку буде рухатись диск?",
            image: "test/Picture9.png",
            possibilities: [
                {
                    answer: "У напрямку, вказаному стрілкою А"
                },
                {
                    answer: "У напрямку, вказаному стрілкою В"
                },
                {
                    answer: "У напрямку стрілки С"
                }
            ],
            desc: "Пояснення: якщо дві однакові сили діють перпендикулярно, то результуюча сила буде створювати кут 45º з кожною з двох сил. ",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Чи обов’язково потрібні обидва ланцюги, зображені на малюнку, для утримання вантажу, чи досить лише одного? Якщо так, то якого?",
            image: "test/Picture10.png",
            possibilities: [
                {
                    answer: "Досить ланцюга А"
                },
                {
                    answer: "Досить ланцюга В"
                },
                {
                    answer: "Потрібні обидва ланцюги"
                }
            ],
            desc: "Пояснення: якщо б не було ланцюгів, то брусок з вантажем почав би рухатись вниз.Якщо б був лише ланцюг А, то ситуація б не змінилась. Але якщо прикріпити ланцюг В, то конструкція залишиться непорушною, оскільки ланцюг В буде тримати брусок, шоб вантаж не рухав його вниз.",
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "З якою кулькою зіткнеться кулька Х, якщо її кинути в перешкоду за напрямком, указаним суцільною стрілкою?",
            image: "test/Picture11.png",
            possibilities: [
                {
                    answer: "З кулькою А"
                },
                {
                    answer: "З кулькою B"
                },
                {
                    answer: "З кулькою C"
                }
            ],
            desc: "Пояснення: кут падіння дорівнює куту відбивання - це кути між перпендикуляром до площини та напрямом руху кульки",
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
        /*{
            type: "Green Turtle",
            image_url: "http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "Up to 1.5m and up to 300kg",
            lifespan: "Over 80 years",
            diet: "Herbivore",
            description: "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
        },
        {
            type: "Loggerhead Turtle",
            image_url: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "90cm, 115kg",
            lifespan: "More than 50 years",
            diet: "Carnivore",
            description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
        },
        {
            type: "Leatherback Turtle",
            image_url: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg",
            locations: "All tropical and subtropical oceans",
            size: "Up to 2m, up to 900kg",
            lifespan: "45 years",
            diet: "Carnivore",
            description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
        },
        {
            type: "Hawksbill Sea Turtle",
            image_url: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532",
            locations: "Tropical Coastal areas around the world",
            size: "Over 1m, 45-68kg",
            lifespan: "30-50 Years",
            diet: "Carnivore",
            description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
        {
            type: "Alligator Snapping Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg",
            locations: "Along the Atlantic Coast of USA",
            size: "around 60cm, up to 100kg",
            lifespan: "20-70 years",
            diet: "Carnivore",
            description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
        },
        {
            type: "Kemp's Ridley Sea Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG",
            locations: "Coastal areas of the North Atlantic",
            size: "65cm, up to 45kg",
            lifespan: "Around 50 years",
            diet: "Omnivore",
            description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
        },
        {
            type: "Olive Ridley Turtle",
            image_url: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg",
            locations: "Tropical coastal areas around the world",
            size: "70cm, 45kg",
            lifespan: "50 years",
            diet: "Omnivore",
            description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
        },
        {
            type: "Eastern Snake Necked Turtle",
            image_url: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1",
            locations: "Eastern Australia",
            size: "Up to 30cm",
            lifespan: "25 years",
            diet: "Carnivore",
            description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
        }*/
    ];

})();
