function info() {
    var description = "Medicina Resources is a platform for students that want to know more about Science.\n";
    var date = new Date().toUTCString();
    const creationDate = new Date('November 07, 2020');
    const creationMonth = creationDate.getMonth();
    const creationDay = creationDate.getDay();
    const creationYear = creationDate.getFullYear();
    console.log("-------------MR2.0-------------")
    console.log(description, date);
    console.log("Creation Date of 2.0 version:" + " " + creationMonth + "-" + creationDay + "-" + creationYear);
    console.log("-------------MR2.0-------------")
}
info();