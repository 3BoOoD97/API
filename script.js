const api = "https://www.breakingbadapi.com/api/characters"

async function get() {
    const response = await fetch(api)
    const data = await response.json()

    printData(data)



}

function printData(data) {
    const header = document.querySelector("#header")
    const contnet = document.querySelector("#content")
    header.innerHTML += `
    <select class="form-control">
    <option> Please Select </option>
    ${data.map(actor => `<option>${actor.name}</option>`)}
    </select> `

}



get()