fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
          <p class="card-text">${values.body}</p>
        </div>
      </div>`;
    })
    document.getElementById("card").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})

function myFunction() {
    document.getElementById("myForm").submit();
  }