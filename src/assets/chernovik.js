function persistence(num) {

    let count = 0

    while (num >= 10){
        let arr = num.toString().split('').map(el => +el)

        let result =  arr.reduce((acc, val) => acc * val)

        num = result

        count = count +1
    }




    return count
}

console.log(persistence(999))