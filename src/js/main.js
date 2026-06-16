const buttonLogout = document.getElementById("menu");
const footer = document.getElementById("list");
const footerGenre = document.getElementById("listGenre");
const buttonArrow = document.getElementById("button-arrow");
const buttonArrowGenre = document.getElementById("button-arrowGenre");
const arrowbottomGenre = document.getElementById("button-arrowGenre_top");

buttonArrow.addEventListener("click", () => {
    footer.innerHTML = `
    <li>FAQ</li>
    <li>Kontak Kami</li>
    <li>Privasi</li>
    <li>Syarat & Ketentuan</li>
    `
    footer.classList.toggle("hidden")
    buttonArrow.classList.toggle("rotate-90")
})

buttonArrowGenre.addEventListener("click", () => {
    buttonArrowGenre.classList.toggle("rotate-90")
    footerGenre.classList.toggle("hidden")
    footerGenre.innerHTML = `
        <li>Aksi</li>
        <li>Anak-anak</li>
        <li>Anime</li>
        <li>Britania</li>`
})

function scrollContainer(id, amount) {
    const container = document.getElementById(id);
    container.scrollBy({
        left: amount,
        behavior: "smooth"
    })
}
buttonLogout.addEventListener("change", function (e) {
    if (e.target.value === "logout") {
        globalThis.location.href = "../../src/page/login.html"
    }
})
