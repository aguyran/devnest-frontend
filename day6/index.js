//Q1
function is_array(xd){
    
    return xd.constructor==Array;

}
console.log(is_array('w3resource'));
console.log(is_array(['w3resource','yeye']));
console.log(is_array([1, 2, 4, 0]));


//Q2

function clone_array(xd){
    return JSON.parse(JSON.stringify(xd))
}
console.log(clone_array([1, 2, 4, 0]));
console.log(clone_array([1, 2, [4, 0]]));

//Q3

function first(arr,n=1){
    temp=[]
    if(arr.length<n){
        n=arr.length
    }
    for(let i =0;i<n;i++){
        temp.push(arr[i])
    }
    return temp
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


//Q4 Said to write program not function so used predefined
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.join(","));
console.log(myColor.join("+"));

//Q5
returnFreq=(arr)=>{
    hashmap={}
    for(let i =0;i<arr.length;i++){
        if(arr[i] in hashmap){
            hashmap[arr[i]]+=1}
        else{
            hashmap[arr[i]]=1
        }
    }
    let key=0
    let max =0
    for(key2 in hashmap){
        if (hashmap[key2]>max){
            max=hashmap[key2]
            key=key2
        }
    
    }
    return {[key]:max}
}
console.log(returnFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
))