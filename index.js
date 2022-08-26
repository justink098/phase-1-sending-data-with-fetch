// Add your code here
const p = document.createElement("p")

function submitData (name, email){ 
return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    })
      .then(resp => resp.json())
      .then(object => {
        console.log(object)
        p.textContent = object.id
        document.body.appendChild(p)
      })
      .catch( e =>{
        p.textContent = e.message
        document.body.appendChild(p)
})
}
submitData("Steve","steve@steve.com")