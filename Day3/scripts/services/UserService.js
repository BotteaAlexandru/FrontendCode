/**
 * Created by user on 6/27/2016.
 */
hrApp.service('UserService', function(){
    var userList = [];

    return {
        addUser: function (user) {
            userList.push(user);
        },
        get: function () {
            return userList;
        }
    }
});