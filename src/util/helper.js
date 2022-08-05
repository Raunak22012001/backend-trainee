

function printDate() {
    const date = new Date()
    console.log(date)
}
module.exports.printDate=printDate


function printmonth() {
    const month1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d= new Date()
    let month =month1[ d.getMonth()]
    console.log(month)
}
module.exports.printmonth=printmonth

function getBatchInfo(){
console.log("plutonium, W3D3, the topic for today is Nodejs module system")
}
module.exports.getBatchInfo= getBatchInfo
