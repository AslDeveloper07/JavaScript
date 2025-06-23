
const url = "https://dummyjson.com/products?limit=10";
const userContainer = document.getElementById("user-container");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    userContainer.innerHTML = "";

    data.products.forEach((product) => {
      const userCard = document.createElement("div");
      userCard.className =
        "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300";

      const descriptionSentences =
        product.description.split(".").slice(0, 3).join(".") + ".";

      userCard.innerHTML = `
       <img src="${product.images[0]}" alt="${product.title}"  className="w-full "/>
       <div class="p-4">
       <h2 class="text-xl text-gray-500 mb-3">${product.title}</h2>
       <p class ="text-gray-600 text-sm">${descriptionSentences}</p>
       </div>
      `;

      userContainer.appendChild(userCard);
    });
  })
  .catch((error) => {
    console.error("Xatolik:", error);
    userContainer.innerHTML =
      '<p class="text-red-600 text-center">Xatolik yuz berdi. Ma\'lumotlar olinmadi.</p>';
  });
