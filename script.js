const api = "https://www.breakingbadapi.com/api/characters"

async function getData() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        printData(data)
    } catch (error) {
        console.log(error)
    }

}

function printData(data) {
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")
    header.innerHTML += `
    <select class="form-control" onchange="getCha(this.value)">
    <option> Please Select </option>
    ${data.map(actor => `<option>${actor.name}</option>`)}
    </select> `
}

async function getCha(name) {
    if (name !== "Please Select") {
        const response = await fetch(`${api}?name=${name}`)
        const data = await response.json()
        content.innerHTML = `
    <h2>${data[0].name}(${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <img src="${data[0].img}" width="250">
    `
    }
}

getData()