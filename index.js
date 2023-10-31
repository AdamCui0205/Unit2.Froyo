const froyoFlavors = prompt('Please give us what flavor do you want:');
const orderedFlavor = froyoFlavors.split(',');
console.log(orderedFlavor)

const order = {};
// for(let i =0; i<orderedFlavor.length;i++){
//     if (order[orderedFlavor[i]]){
//         order[orderedFlavor[i]]++
//     }
//     else {
//         order[orderedFlavor[i]]=1
//     }
// }

for(const flavor of orderedFlavor){
    if(!order[flavor]){
        order[flavor]=1
    }
    else {order[flavor]++}
}
console.table(order);