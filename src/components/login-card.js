class LoginCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute("title")
        const deskripsi = this.getAttribute("deskripsi")
        const deskripsiText = this.getAttribute("deskripsiText")
        const link = this.getAttribute("link")
        const linkTwo = this.getAttribute("linkTwo")
        const textButton = this.getAttribute("textButton")
        this.innerHTML = `<div class="flex flex-col space-y-6 w-full md:w-140 px-5 md:px-10 py-5 md:py-10 bg-[#22282A]/40 rounded-xl backdrop-blur-2xl">
            <div class="justify-center items-center mx-auto">
                <img src="../../images/logo.png" alt="Foto Logo" class="w-32 items-center justify-center">
            </div>
            <div class="space-y-3 md:space-y-3">
                <h2 class="text-xl md:text-3xl text-white text-center font-bold">${title}</h2>
                <p class="text-md md:text-md text-white text-center">${deskripsi}</p>
            </div>
            <form class="flex flex-col -mt-5 space-y-2 md:px-5 w-85 md:w-600 max-w-md mx-auto">
                <label for="" class="text-white text-md  md:text-lg">Username</label>
                <input type="text" name="username" id="username" placeholder="Masukan username"
                    class="w-full rounded-2xl border-2 border-white px-3 py-2 text-white">
                <label for="" class="text-white text-md  md:text-lg">Kata Sandi</label>
                <input type="password" name="password" id="password" placeholder="Masukan Kata Sandi"
                    class="w-full rounded-2xl border-2 border-white px-3 py-2 text-white">
                    <span class="absolute text-white right-6 cursor-pointer md:right-28 md:bottom-[216px] bottom-[200px]"><i id="toggler"class="far fa-eye"></i></span>
                <!-- deskripsi -->
                <div class="flex flex-row justify-between gap-4">
                    <p class="text-gray-400 text-sm md:text-md">${deskripsiText} <a href="../page/register.html" class="text-white text-sm md:text-md">${link}</a></p>
                    <a href="" class="text-white text-sm md:text-md">${linkTwo}</a>
                </div>
                <!-- end deskripsi -->
                <!-- BUTTON -->
                <div class="flex flex-col space-y-2">
                    <button
                        class="px-3 py-3 bg-[#3D4142] rounded-4xl text-white cursor-pointer  border border-gray-500">${textButton}</button>
                    <p class="text-white text-center">OR</p>
                    <a href="#"
                        class="flex flex-row gap-3 px-3 py-3 bg-transparent rounded-4xl text-white border border-gray-500 cursor-pointer justify-center items-center">
                        <img src="../../images/google.png" width="20" alt="button">Masuk dengan Google
                    </a>
                </div>
                <!-- end BUTTON -->
            </form>
        </div>`
    }
}

customElements.define("login-card", LoginCard)