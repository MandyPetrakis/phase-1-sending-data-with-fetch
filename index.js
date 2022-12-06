function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((resp) => resp.json())
    .then((obj) => {
      let li = document.createElement("li");
      li.textContent = obj.id;
      document.querySelector("body").appendChild(li);
    })
    .catch((message) => {
      let alert = document.createElement("li");
      alert.innerHTML = message;
      document.querySelector("body").append(alert);
    });
}
