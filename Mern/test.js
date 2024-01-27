// // const arr=[];
// // try{
// //     arr.push('try')
// //     throw new Error();
// // }
// // catch(e)
// // {
// //     arr.push('c');

// // }
// // finally{
// //     arr.push('f');
// // }
// // console.log(arr);

// // const my=new Set()
// // my.add(1)
// // my.add(1)
// // my.add('a')
// // my.add('a')
// // my.add(undefined)
// // my.add(undefined)
// // my.add({prop:true})
// // my.add({prop:true})
// // console.log(my.size)

// // let x='fog'
// // function first()
// // {
// //     console.log(x)
// // }
// // x='dog';
// // function s()
// // {
// //     let x='log';
// //     first();
// // }
// // s();

// // const obj={
// //     prop:1
// // }
// // console.log(obj.prop)
// // Object.defineProperty(obj,'prop',{
// //     writable:false,
// //     value:2
// // })
// // console.log(obj.prop)
// // obj.prop=3
// // console.log(obj.prop)

// // function my(y1,y2,...y3)
// // {
// //     const [x1,...[res]]=y3
// //     console.log(res)
// // }
// // const mya=['r','p','s','l','sp']
// // my(...mya)

// // function* gen()
// // {
// //     console.log(yield 1)
// //     console.log(yield 2)
// //     console.log(yield 3)
// // }
// // const iterator =gen()
// // console.log(iterator.next('a').value)
// // console.log(iterator.next('b').value)
// // console.log(iterator.next('c').value)
// // const my = [1,2]
// // my.customProperty =true
// // my.forEach(e=>{
// //     console.log(e)
// // })

// async function api()
// {
//     return new Promise(res=>{
//         setTimeout(()=>{res('b'),50});
//     })
// }
// async function logger()
// {
//     setTimeout(()=>{ console.log('a'),10});
//     console.log(await api());
//     console.log('c')
// }
// logger();

const a=0;
const b='';
// const c=[false]
const out =!!(a||b||c||d)