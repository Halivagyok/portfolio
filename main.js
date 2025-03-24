url = "https://raw.githubusercontent.com/Flerzy/PortfolioJSON/refs/heads/main/data.json"

function render(data){
    let munkak = document.querySelector(".munkak")
    munkak.innerHTML = ""
    console.log(data.photho_url);
    
    data.forEach(e => {
        munkak.innerHTML += `
            <div class="munkas">
                <img src="${e.photo_url}" alt=""> 
                <div class="munkas-side">                   
                    <h1>${e.title}</h1>
                    <hr>
                    <p>Témakörök:</p>
                    <ul class="too${e.id}">
                    </ul>
                    <div class="links">
                        <a href="${e["repo-link"]}">Github</a>
                        <a href="${e["site-link"]}">Oldal</a>
                    </div>
                </div>
            </div>`});
    data.forEach(e => {    
        const ul = document.querySelector(`.too${e.id}`)
        e.topics.forEach((t) => {
            ul.innerHTML += `<li>${t}</li>`
        });
    })
}

getData(url, render)