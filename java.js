var input = document.querySelector("input");
  input.addEventListener("change", updateValue);
  input.addEventListener("mousemove", updateValue)

function updateValue() {
    console.log(this.value);
    var percent = document.querySelector("span");
    percent.textContent = this.value;
    
    document.documentElement.style.setProperty("--light", this.value/100);
    document.documentElement.style.setProperty("--glow", this.value/100);
}