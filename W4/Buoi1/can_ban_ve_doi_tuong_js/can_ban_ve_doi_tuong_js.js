
//Tạo một đối tượng thường bắt đầu bằng việc định nghĩa và khởi tạo một biến.
let person = {
    name : {
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

//chúng ta đã có thể truy xuất chúng qua một vài cú pháp khá đơn giản!
// Bạn có thể gọi các thành phần của đối tượng như sau.
person.bio();

//Thiết lập các thành phần của đối tượng
person.age = 45;
person['name']['last'] = 'Cratchit';

//truy xuất lại
person.age;
person['name']['last'];

