document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("gerencia").checked = true;

  document
    .getElementById("meuFormulario")
    .addEventListener("submit", function (event) {
      var checkboxes = document.getElementsByName("area-interesse[]");
      var peloMenosUmSelecionado = false;

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          peloMenosUmSelecionado = true;
          break;
        }
      }

      if (!peloMenosUmSelecionado) {
        alert("Selecione pelo menos uma área de interesse.");
        event.preventDefault();
        return;
      }

      console.log("Dados Preenchidos:");

      var formData = {
        nome: document.getElementById("nome").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        cargo: document.querySelector('input[name="cargo"]:checked').id,
        areasInteresse: [],
        miniCurriculo: document.getElementById("mini-curriculo").value,
      };

      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          formData.areasInteresse.push(checkbox.value);
        }
      });

      console.log(formData);

      event.preventDefault();
    });
});
