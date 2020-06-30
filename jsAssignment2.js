//chunk
let chunk= (chunk_arr, chunk_size)=>{
    let [ final_arr, arr_length]= [[], chunk_arr.length]
    for(let i= 0; i< chunk_arr.length; i+=chunk_size){
        final_arr.push(chunk_arr.slice(i, i+chunk_size))
    }
    return final_arr
}
console.log(chunk([1, 'a', 2, 'b', 3, 'c', 4, 'd'], 2))


//pull 
let pull= (arrs, ...oust)=>{
    return arrs.filter(a=>{
        for(let i of oust){
            if(a == i){
                return false
            }            
        }
        return true
    })
}
console.log(pull([1, 4, 3,5, 6, 2, 1 ,3 ,5 ,1, 2, 1,3], 1, 3))

//difference
let difference= (first_arr, second_arr)=>{
    return first_arr.filter(a=>{
    for(let i of second_arr){
        if(i == a){
            return false
        }
    }
    return true
})
}
console.log(difference([1, 4, 3,5, 6, 2, 1 ,3 ,5 ,1, 2, 1,3], [1, 3]))

//take
let take= (arr, slice_length)=>{ return arr.slice(0, slice_length) }
console.log(take([1,2,3,5,6,71,2,5,22], 5))

//sum
let sum= (arr)=>{ return (arr.length < 1)? 0 :arr.reduce((a, b)=>a+b) }
console.log(sum([1,2,3,4,5,6,7,8,9]))

//gte
let gte= (value, other)=>{ return value<= other  }
console.log(gte(3, 1))

//keys
let keys= (obj, type)=>{
    let final= []
    if(obj instanceof Object){
        for(let key in obj){
            final.push(key)
        }
    }
    else if(typeof obj == "string"){
        for(let i= 0; i< obj.length; i++){
            final.push(i)
        }
    }
    return final
}

console.log(keys({name:"prem",age:21}))
console.log(keys("hi"))

//value
let values= (obj)=>{
        let final= []
        if(obj instanceof Object){
            for(let key in obj){
                final.push(obj[key])
            }
        }
        else if(typeof obj == "string"){
            for(let i= 0; i< obj.length; i++){
                final.push(obj[i])
            }
        }
        return final

}
console.log(values({name:"prem",age:21}))
console.log(values("hi"))

//camecase
let camelCase= (strs)=>{ 
    strs= strs.trim()
    strs=strs.replace(/[-_]*/, "")
    strs= strs.replace(/[_-]*$/, "")
    let final= []
    let temp= ""
    for(let i= 0; i< strs.length; i++){
        if(strs[i] === ' ' || strs[i] === '-' || strs[i] === '_'){
            final.push(temp)
            temp= ""
            temp= temp.concat(strs[++i].toUpperCase())
        }
        else{
            temp= temp.concat(strs[i])
        }
    }
    final.push(temp)
    return final.join('')
}
console.log(camelCase("  -_foo-bar-kk-_"))

//endswith
let endswith= (str, target, position=1)=>{ return str.slice(str.length-position, str.length).includes(target) }
console.log(endswith("abc", "b", 2))

//tail
let tail=arr=>{ return arr.slice(1, arr.length) }
console.log(tail([1,2,3,4,5,6]))

//union
let union=(...arr)=>{
    let final= {}
    for(let i of arr){
        for(let j of i){
            final[j]= 0
        }
    }
    return keys(final)
}
console.log(union([1,2,3],[2,3,4]))

