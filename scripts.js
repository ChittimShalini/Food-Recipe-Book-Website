function searchRecipe() {
            var searchInput = document.getElementById("recipeSearch").value.toLowerCase();
            var recipeMap = {
                "manchurian": "recipe1.html",
                "spicy egg noodles": "recipe2.html",
                "goli vada pav": "recipe3.html",
                "bikner rasagulla": "recipe4.html",
                "white sauce pasta": "recipe5.html",
                "chicken biryani": "recipe6.html",
                "masala dosa": "recipe7.html",
                "lachha parata": "recipe8.html",
                "mr.pulihora": "recipe9.html",
                "veg fried rice": "recipe10.html",
                "mushroom soup": "recipe11.html",
                "chettinad chicken": "recipe12.html",
                "chilli parata": "recipe13.html",
                "spicy roll": "recipe14.html",
                "mysore bonda": "recipe15.html",
                "sweet jamun": "recipe16.html",
                "lulu payasam": "recipe17.html",
                "ghee laddu": "recipe18.html",
                "oreo shake": "recipe19.html",
                "tasty rose milk": "recipe20.html"
            };
            if (recipeMap.hasOwnProperty(searchInput)) {
                window.location.href = recipeMap[searchInput];
            } else {
                alert("Recipe not found. Please try another search term.");
            }
}
