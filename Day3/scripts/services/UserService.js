/**
 * Created by user on 6/27/2016.
 */
hrApp.service('UserService', function(){
    var userList = [];
    // Stiu ca arata imputit, dar mi-am dat seama tarziu de faptul ca
    // Service-ul trebuie pus pe aceeasi pozitie cand il injectam si ca parametrii la functie
    return {
        addUser: function (a, b, c, d) {
            userList.push(a);
            userList.push(b);
            userList.push(c);
            userList.push(d);
        },
        getUser: function (index) {
            alert('first: ' + userList[index*4] + '\n' +
                'last: ' + userList[index*4 + 1]+ '\n' +
                'age: ' + userList[index*4 + 2] + '\n' +
                'id: ' + userList[index*4 + 3]);
        }
    }
});