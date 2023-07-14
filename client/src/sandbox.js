function* generator(){
    let res = 0
    for (let i = 1; i <= 100; i++) {
         res += i 
         console.log(res)
        const k = yield i
        console.log('k = ',k)
    }
}
const iter = generator()
const res1 = iter.next()
console.log(res1)
const res2 = iter.next(20)
console.log(res2)
const res3 = iter.next(50)
const res4 = iter.next()
