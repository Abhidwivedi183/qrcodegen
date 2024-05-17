let imgbox = document.getElementById("imgbox")

let qrimg = document.querySelector("#qrimg")

let qrtext = document.querySelector("#qrtext")

let bt = document.querySelector("#btn");
function qrgen(){
if(qrtext.value.length>0){
  qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + qrtext.value;
  imgbox.classList.add("show-img");
}
else{
  qrtext.classList.add("error")
  //i want t o remove it after few seconds
  setTimeout(()=>{
qrtext.classList.remove("show-img");
  },1000);
}
}

bt.addEventListener('click',function(e){
  qrgen();
})


