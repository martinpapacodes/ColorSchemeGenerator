const colorPicker = document.getElementById("color-picker")

fetch("https://www.thecolorapi.com/scheme?hex=0047AB")
// fetch("test.json")
.then(res=> res.json())
.then(data => console.log(data))
.catch(error => {
  console.log(error)
  console.log("Failed to fetch data.")
})


colorPicker.addEventListener("change", () => {
  let colorValue = colorPicker.value
  console.log(colorValue)

})