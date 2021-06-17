window.addEventListener("load", () => {
  let totalseats = 36;
  const parentd = document.getElementById("parent");
  let seats;
  for (let i = 0; i < 36; i++) {
    seats = document.createElement("div");
    seats.className = "book";
    parentd.appendChild(seats);
  }
  const book = document.querySelectorAll(".book");
  const text = document.getElementById("yeye");
  book.forEach((i) => {
    i.addEventListener("click", () => {
      if (i.classList.contains("active")) {
        totalseats += 1;
        text.innerText = `remaining: ${totalseats}`;
        i.classList.remove("active");
      } else {
        i.classList.add("active");
        totalseats -= 1;
        text.innerText = `remaining: ${totalseats}`;
      }
    });
  });
});
