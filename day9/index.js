window.addEventListener("load", () => {
  let i = 0;
  document.addEventListener("keydown", (e) => {
    console.log(e);
    const keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    rgb = () => {
      document.getElementById("parent").classList.toggle("haxor");

      i = 0;
    };

    if (e.keyCode === keys[i]) {
      i += 1;
      if (i == keys.length) {
        rgb();
      }
    } else {
      i = 0;
    }
  });
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
