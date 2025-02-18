function unic(c) {

   let obj = {}

    for (let i = 0; i < c.length; i++){
        if (c[i] in obj){
            obj[c[i]]++
        } else {
            obj[c[i]] = 1
        }
    }

    let max = Math.max(...Object.values(obj))

    for (let key in obj){
        if (obj[key] === max){
            return key
        }
    }


}
console.log(unic([1, 1, 2, 4, 4, 3, 5, 6, 6, 2, 3, 3, 3]))

