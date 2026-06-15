function scrollContainer(id, amount) {
    const container = document.getElementById(id);
    container.scrollBy({
        left: amount,
        behavior: "smooth"
    })
}