function openModalProject() {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("card_project").style.display = "block";
  document.getElementById("card_education").style.display = "none";
  document.getElementById("card_about").style.display = "none";
  document.getElementById("card_contact").style.display = "none";
}
function openModalEducation() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("card_education").style.display = "block";
    document.getElementById("card_project").style.display = "none";
    document.getElementById("card_about").style.display = "none";
    document.getElementById("card_contact").style.display = "none";
}
function openModalAbout() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("card_contact").style.display = "none";
    document.getElementById("card_education").style.display = "none";
    document.getElementById("card_project").style.display = "none";
    document.getElementById("card_about").style.display = "block";
}
function openModalContact() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("card_contact").style.display = "block";
    document.getElementById("card_education").style.display = "none";
    document.getElementById("card_project").style.display = "none";
    document.getElementById("card_about").style.display = "none";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
