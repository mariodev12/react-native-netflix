import data from '../data.json'

export function getAll(){
    return data
}

function getTwoLists(json){
    var array = json.slice(0)
    var val = Math.floor(array.length / 2)
    var newArray = array.splice(0, val)
    return [array, newArray]
}

export const getTwoItems = getTwoLists(data)