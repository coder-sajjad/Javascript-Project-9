
// Fifth grade Student sheet
const student = [
    {
        id      :   01,
        name    :   'Josim',
        roll    :   1,
        location:   'Mirpur',
    },
    {
        id      :   02,
        name    :   'Rubel',
        roll    :   2,
        location:   'Banani',
    },
    {
        id      :   03,
        name    :   'Malek',
        roll    :   3,
        location:   'Uttara',
    },
    {
        id      :   04,
        name    :   'Robiul',
        roll    :   4,
        location:   'Rampura',
    },
    {
        id      :   05,
        name    :   'Saidi',
        roll    :   5,
        location:   'Mirpur',
    },
    {
        id      :   06,
        name    :   'Salek',
        roll    :   6,
        location:   'Banani',
    },
    {
        id      :   07,
        name    :   'Sahin',
        roll    :   7,
        location:   'Uttara',
    },
    {
        id      :   08,
        name    :   'Nirob',
        roll    :   8,
        location:   'Rampura',
    },
    {
        id      :   09,
        name    :   'Sajjad',
        roll    :   9,
        location:   'Mirpur',
    },
    {
        id      :   10,
        name    :   'Siddik',
        roll    :   10,
        location:   'Banani',
    }
    
];


let studentInfo = JSON.stringify(student);
localStorage.setItem('Student-Info', studentInfo );




// Family PhobeBook
const family = [
    {
        id		:	01,
        name    :   'Sajol',
        simName :   'Robi',
        phonNo  :   '01825602460',
        gender  :   'Male',
        area    :   'Bonossri',
    },
    {
        id		:	02,
        name    :   'Selim',
        simName :   'GrameenPhone',
        phonNo  :   '01725608490',
        gender  :   'Male',
        area    :   'Rampura',
    },
    {
        id		:	03,
        name    :   'Sinthiya',
        simName :   'Banglalink',
        phonNo  :   '01925256860',
        gender  :   'Female',
        area    :   'Bosundhara',
    },
    {
        id		:	04,
        name    :   'Sakil',
        simName :   'Airtel',
        phonNo  :   '01625564760',
        gender  :   'Male',
        area    :   'Bonossri',
    },
    {
        id		:	05,
        name    :   'Nidhi',
        simName :   'Grameenphone',
        phonNo  :   '01325614750',
        gender  :   'Female',
        area    :   'Rampura',
    },
    {
        id		:	06,
        name    :   'Jafor Ikbal',
        simName :   'Banglalink',
        phonNo  :   '01425142560',
        gender  :   'Male',
        area    :   'Bosundhara',
    },
    {
        id		:	07,
        name    :   'Nakib',
        simName :   'Robi',
        phonNo  :   '01826401470',
        gender  :   'Male',
        area    :   'Rampura',
    },
    {
        id		:	08,
        name    :   'Sakila',
        simName :   'Grameenphone',
        phonNo  :   '01785602140',
        gender  :   'Female',
        area    :   'Bonossri',
    },
    {
        id		:	09,
        name    :   'Monsefa',
        simName :   'Banglalink',
        phonNo  :   '01985602140',
        gender  :   'Female',
        area    :   'Basundhara',
    },
    {
        id		:	10,
        name    :   'Sobuj',
        simName :   'Robi',
        phonNo  :   '01885602140',
        gender  :   'Male',
        area    :   'Uttara',
    }

];

let familyPhonebook = JSON.stringify(family);
localStorage.setItem('Family-Phonebook', familyPhonebook)


// Developer Sheet
const devs = [
    {
        id          :   01,
        name        :   'Sumon',
        age         :   20,
        skill       :   'Laravel',
        location    :   'Uttara',
        selery      :   500,
    },
    {
        id          :   02,
        name        :   'Jibon',
        age         :   30,
        skill       :   'DjangGo',
        location    :   'Mirpur',
        selery      :   600,
    },
    {
        id          :   03,
        name        :   'Lalu',
        age         :   40,
        skill       :   'Go Lang',
        location    :   'Banani',
        selery      :   700,
    },
    {
        id          :   04,
        name        :   'Jahid',
        age         :   20,
        skill       :   'Java',
        location    :   'Mirpur',
        selery      :   800,
    },
    {
        id          :   05,
        name        :   'Salman',
        age         :   30,
        skill       :   'JavaScript',
        location    :   'Banani',
        selery      :   900,
    },
    {
        id          :   06,
        name        :   'Hannan',
        age         :   40,
        skill       :   'PHP',
        location    :   'Uttara',
        selery      :   850,
    },
    {
        id          :   07,
        name        :   'Sahin',
        age         :   28,
        skill       :   'WordPress',
        location    :   'Banani',
        selery      :   300,
    },
    {
        id          :   08,
        name        :   'Shawon',
        age         :   20,
        skill       :   'Phython',
        location    :   'Mirpur',
        selery      :   750,
    },
    {
        id          :   09,
        name        :   'Ryhid',
        age         :   20,
        skill       :   'C++',
        location    :   'Uttara',
        selery      :   950,
    },
    {
        id          :   10,
        name        :   'Reja',
        age         :   30,
        skill       :   'PHP',
        location    :   'Banani',
        selery      :   850,
    }
];

let devsInfo = JSON.stringify(devs);
localStorage.setItem('Devs-Info', devsInfo );


// JSON to Object Convert
let allInfo = [ student, family, devs ];
console.log(JSON.stringify(allInfo));

// All info String
let data = '[[{"id":1,"name":"Josim","roll":1,"location":"Mirpur"},{"id":2,"name":"Rubel","roll":2,"location":"Banani"},{"id":3,"name":"Malek","roll":3,"location":"Uttara"},{"id":4,"name":"Robiul","roll":4,"location":"Rampura"},{"id":5,"name":"Saidi","roll":5,"location":"Mirpur"},{"id":6,"name":"Salek","roll":6,"location":"Banani"},{"id":7,"name":"Sahin","roll":7,"location":"Uttara"},{"id":8,"name":"Nirob","roll":8,"location":"Rampura"},{"id":9,"name":"Sajjad","roll":9,"location":"Mirpur"},{"id":10,"name":"Siddik","roll":10,"location":"Banani"}],[{"id":1,"name":"Sajol","simName":"Robi","phonNo":"01825602460","gender":"Male","area":"Bonossri"},{"id":2,"name":"Selim","simName":"GrameenPhone","phonNo":"01725608490","gender":"Male","area":"Rampura"},{"id":3,"name":"Sinthiya","simName":"Banglalink","phonNo":"01925256860","gender":"Female","area":"Bosundhara"},{"id":4,"name":"Sakil","simName":"Airtel","phonNo":"01625564760","gender":"Male","area":"Bonossri"},{"id":5,"name":"Nidhi","simName":"Grameenphone","phonNo":"01325614750","gender":"Female","area":"Rampura"},{"id":6,"name":"Jafor Ikbal","simName":"Banglalink","phonNo":"01425142560","gender":"Male","area":"Bosundhara"},{"id":7,"name":"Nakib","simName":"Robi","phonNo":"01826401470","gender":"Male","area":"Rampura"},{"id":8,"name":"Sakila","simName":"Grameenphone","phonNo":"01785602140","gender":"Female","area":"Bonossri"},{"id":9,"name":"Monsefa","simName":"Banglalink","phonNo":"01985602140","gender":"Female","area":"Basundhara"},{"id":10,"name":"Sobuj","simName":"Robi","phonNo":"01885602140","gender":"Male","area":"Uttara"}],[{"id":1,"name":"Sumon","age":20,"skill":"Laravel","location":"Uttara","selery":500},{"id":2,"name":"Jibon","age":30,"skill":"DjangGo","location":"Mirpur","selery":600},{"id":3,"name":"Lalu","age":40,"skill":"Go Lang","location":"Banani","selery":700},{"id":4,"name":"Jahid","age":20,"skill":"Java","location":"Mirpur","selery":800},{"id":5,"name":"Salman","age":30,"skill":"JavaScript","location":"Banani","selery":900},{"id":6,"name":"Hannan","age":40,"skill":"PHP","location":"Uttara","selery":850},{"id":7,"name":"Sahin","age":28,"skill":"WordPress","location":"Banani","selery":300},{"id":8,"name":"Shawon","age":20,"skill":"Phython","location":"Mirpur","selery":750},{"id":9,"name":"Ryhid","age":20,"skill":"C++","location":"Uttara","selery":950},{"id":10,"name":"Reja","age":30,"skill":"PHP","location":"Banani","selery":850}]]';

localStorage.setItem('All-Data', data);

