var data = require('../data.json')

const getJSON = (data) => {
    return data
}

export function getAll() {
    return data
}

export function getListDetail(element){
    var items = getJSON(data).slice(0)
    return items.filter(function(i){
        return i.key == element
    })
}

function getTwoLists(ob) {
    var arrays = ob.slice(0)
    var val = Math.floor(arrays.length / 2)
    var arr = arrays.splice(0, val)
    return [arrays, arr]
}

//CLOSURE
export const getTwoItems = getTwoLists(data);