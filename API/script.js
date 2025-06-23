const url = "https://dummyjson.com/products?limit=10";

const userContainer = document.getElementById("user-container");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    userContainer.innerHTML = "";

    data.products.forEach((products) => {
      const userCard = document.createElement("div");
      userCard.className =
        "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300";

      const descriptionSentences =
        products.description.split(".").slice(0, 3).join(".") + ".";
      userCard.innerHTML = `
    <img src="${products.images[0]}" alt="${products.title}" class="w-full"/>
    <div class="p-4">
    <h2 class="text-gray-800 text-3xl mb-3">${products.title}</h2>
    <p class="text-lg text-gray-400 ">${descriptionSentences}</p>
    </div>

    `;

      userContainer.appendChild(userCard);
    });
  });
