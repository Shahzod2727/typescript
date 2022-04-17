// let abc:boolean = true;
function buildUser(userId, userName) {
    return { id: userId, name: userName };
}
var newUser = buildUser(2, "Bill");
console.log("id: ", newUser.id);
console.log("name: ", newUser.name);
