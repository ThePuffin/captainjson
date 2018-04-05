if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").then(function() {
    console.log("Service Worker Registered");
  });
}

function see(id) {
  fetch(
    `https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
  )
    .then(response => response.json())
    .then(res => {
      console.log(res);
      document.getElementById("content").innerHTML = `
      <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-content card-image">
            <img src="${res.images.md}">

            <span class="card-title">${res.name}</span>
            <p>${res.name}</p>
          </div>
        </div>
      </div>
    </div>
       
      `;
    });
}
