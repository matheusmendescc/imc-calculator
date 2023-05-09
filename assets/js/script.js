const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('weight').value;
    const altura = document.getElementById('height').value;

    const imc = (peso / (altura**2)).toFixed(2);

    const value = document.getElementById("value");
    let descricao = '';

    value.classList.add("attention");

    document.getElementById("infos").classList.remove('hidden');

    if (imc < 18.5) {
        descricao = "Magreza";
    } else if (imc >= 18.5 && imc <= 25){
        descricao = "Você está no peso ideal!";
        value.classList.remove("attention");
        value.classList.add("normal");
    } else if (imc > 25 && imc <= 30){
        descricao = "Você está sobrepeso";
    } else if (imc > 30 && imc <= 35) {
        descricao = "Obesidade - Moderada"
    } else if (imc > 35 && imc <= 40){
        descricao = "Obesidade - Grave";
    } else{
        descricao = "Obesidade - Morbida";
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById("description").textContent = descricao;
});