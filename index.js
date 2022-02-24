const colorPicker = document.getElementById("color-picker")
const modePicker = document.getElementById("mode-picker")
const schemeButton = document.getElementById("scheme-button")
const schemeSelection = document.getElementById("scheme-selection")
const hexSelection = document.getElementById("hex-selection")

let selectedMode = modePicker.value
let selectedColor = colorPicker.value.slice(1)

let url = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}`

// fetch(url)
// .then(res=> res.json())
// .then(data => console.log(data))
// .catch(error => {
//   console.log(error)
//   console.log("Failed to fetch data.")
// })


colorPicker.addEventListener("change", () => {
  selectedColor = colorPicker.value.slice(1)
  

})

modePicker.addEventListener("change", () => {
  selectedMode = modePicker.value

})
schemeButton.addEventListener("click", ()=> {
  selectedMode = modePicker.value
  selectedColor = colorPicker.value.slice(1)
  console.log(selectedMode);
  console.log(selectedColor);
  url = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}`

fetch(url)
.then(res=> res.json())
.then(data => {
  const colors = data.colors
  console.log(colors);
  let output = ""
  let hexOutput = ""
  for(let color of colors){
    output += `
    <div style=background-color:${color.hex.value}>
    </div>  
    `
    hexOutput += `
    <p>${color.hex.value}</p>
    `
  }
  console.log(hexOutput)
  schemeSelection.innerHTML = output
  hexSelection.innerHTML = hexOutput
})
.catch(error => {
  console.log(error)
  console.log("Failed to fetch data.")
})
})
