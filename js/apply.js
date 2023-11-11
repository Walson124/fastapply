function getInfo() {
    //console.log("get info");
    const collection = document.getElementsByTagName('textarea')
    const info = []
    for (var x = 0; x < collection.length; x++) {
        info.push(collection[x].value)
    }
    //console.log(info)
    return info
}

function apply() {
    info = getInfo();
    console.log(info);
}