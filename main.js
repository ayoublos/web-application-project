// const moment = require('moment');

let form=document.querySelector(`form`)
let reset=document.querySelector(`.reset`)
reset.addEventListener(`click`,event=>{
  let text;
if (confirm("Press a button!") === true) {
  text = "You pressed OK!";
  location.reload()
} else {
  text = "You canceled!";
}
  
 
})

form.addEventListener(`submit`,(event)=>{
    event.preventDefault()
    // let number=event.target.querySelector(`.number`).value
    let productName=event.target.querySelector(`.product-name`).value
    let image=event.target.querySelector(`.image`).value
    let quantity=event.target.querySelector(`.quantity`).value
    let description=event.target.querySelector(`.description`).value
    let supplier=event.target.querySelector(`.supplier`).value
   
   let date=new Date().toLocaleString()
  //  let year=date.getFullYear()
  //  let month=date.getUTCMonth()
  //  let day=date.getUTCDay()
  //  let hours=date.getHours()
  //  let minutes=date.getMinutes()
  //  let secondes=date.getSeconds()
  //  let time=year+month+day
  let table=document.querySelector(`table`)
  console.log(table.innerHTML)
  let element=document.querySelector(`.productName-item`)

  if(!element){
    table.innerHTML=` <tr>
    <th class="#">#</th>
    <th class="#">Image</th>
    <th class="#">Product Name</th>
    <th class="#">Stock</th>
    <th class="#">Description</th>
    <th class="#">Supplier</th>
    
    <th class="#">Updated At</th>
    <th class="#">Action</th>
    


  </tr>
 `
  }




   
    
   
    let tr=document.createElement(`tr`)

    
    

        
   
    // remove(li)
   
    
    tr.innerHTML=` 
    <td class='productName-item'></td>
    <td class='image-item'>
    <img src="${image}" alt="image">
    </td>
    <td class='productName-item'>${productName}</td>
    <td class='quantity-item'>${quantity}</td>
    <td class='description-item'>${description}</td>
    <td class='supplier-item'>${supplier}</td>
   
    <td class='time-item'>${date}</td>
    <td>
    <button class="remove">
    -
  </button>
  <button class="add">
    +
  </button>
  <br>
  <button class="delete">
    delete
  </button>
</td>
   
  `
let del=tr.querySelector(`.delete`)

del.addEventListener(`click`,event=>{
event.target.parentNode.parentNode.remove()
let element=document.querySelector(`.productName-item`)

if(!element){
  table.innerHTML=``

}

})
let add=tr.querySelector(`.add`)

add.addEventListener(`click`,event=>{
  
+(event.target.parentNode.parentNode.querySelector(`.quantity-item`).textContent)++
})
let remove=tr.querySelector(`.remove`)
remove.addEventListener(`click`,event=>{
  if(+(event.target.parentNode.parentNode.querySelector(`.quantity-item`).textContent)===0){
    event.target.parentNode.parentNode.querySelector(`.quantity-item`).textContent=0
  }
  else{
    +(event.target.parentNode.parentNode.querySelector(`.quantity-item`).textContent)--
  }

 })
// console.log(remove)
// if(inStock===`In stock`){
//   li.querySelector(`.out-of-stock`).style.color=`green`
//    }
//     let ul=document.querySelector(`ul`)

    table.append(tr)
form.reset()
})
// const lists=document.querySelectorAll(`li`)
// for(let list of lists){
//   let remove=list.querySelector(`.remove`)
//   console.log(remove)
//   remove.addEventListener(`click`,event=>{
//     event.target.parentNode.parentNode.parentNode.parentNode.remove()

//   // } 
// })}

// let button=document.querySelector(`.reset`)
// button.addEventListener(`click`,event=>{
//     let ul=document.querySelector(`ul`)
//     ul.innerHTML=``

// })
