document.addEventListener('DOMContentLoaded', function() {
    const recipeList = document.getElementById('recipeList');
    const addRecipeBtn = document.getElementById('addRecipeBtn');
    const saveSelectedBtn = document.getElementById('saveSelectedBtn');
    const recipeFormModal = document.getElementById('recipeFormModal');
    const closeModal = document.getElementById('closeModal');
    const recipeForm = document.getElementById('recipeForm');
    const searchInput = document.getElementById('searchInput');

    // Pre-added recipes
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [
        {
            name: "Avocado Toast",
            ingredients: "Avocado, Bread, Salt, Pepper, Lemon Juice",
            instructions: "Toast the bread. Mash the avocado and spread it on the toast. Add salt, pepper, and lemon juice to taste.",
            image: "https://images.unsplash.com/photo-1704545229893-4f1bb5ef16a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww",
            price: "100.00",
            discount: "20% off",
            offer: "Limited Time Offer!"
        },
        {
            name: "Greek Salad",
            ingredients: "Cucumber, Tomato, Onion, Feta Cheese, Olives",
            instructions: "Chop all the vegetables. Mix them in a bowl with feta cheese and olives. Dress with olive oil and lemon juice.",
            image: "https://media.istockphoto.com/id/1218891935/photo/classic-greek-salad-with-chickpeas-on-dark-background-top-view-vegetarian-healthy-diet-food.jpg?s=612x612&w=0&k=20&c=exTlHpZuJQ2ttI_Wb8G0Nbmq4AqjZJvWJdARr-lUMro=",
            price: "80.00",
            discount: "15% off",
            offer: "Buy One Get One Free"
        },
        {
            name: "Smoothie Bowl",
            ingredients: "Banana, Berries, Yogurt, Granola, Honey",
            instructions: "Blend the banana, berries, and yogurt. Pour into a bowl and top with granola and honey.",
            image: "https://images.pexels.com/photos/4099234/pexels-photo-4099234.jpeg?auto=compress&cs=tinysrgb&w=800",
            price: "120.00",
            discount: "10% off",
            offer: "Free Toppings!"
        },
        {
            name: " Instant Oats Rava Idli",
            ingredients: "Oats, rava, yogurt, water, baking soda, mustard seeds.",
            instructions: "mix all the things and pour into molds, steam for 10-15 mins, serve hot.",
            image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2020/10/Oats-Rava-Idli-3.jpg?w=684&ssl=1",
            price: "90.00",
            discount: "20% off",
            offer: "Limited Time Offer!"
        },
        {
            name: "Oats Poha",
            ingredients: "Oats, oil, mustard seeds, dals, onion, chili, ginger, curry leaves,",
            instructions: "Sauté spices, add veggies, mix in oats, cook, season, serve.",
            image: "https://www.ruchiskitchen.com/wp-content/uploads/2016/03/oats-poha-recipe-8.jpg.webp",
            price: "190.00",
            discount: "25% off",
            offer: "Buy One Get One Free!"
        },
        {
            name: "Greek Yogurt Parfait with Whey Protein",
            ingredients: "Greek yogurt, whey protein, honey, granola,berries.",
            instructions: "Mix Greek yogurt with whey protein.",
            image: "https://veg.fit/wp-content/uploads/2021/12/Overnight-oats.png",
            price: "190.00",
            discount: "10% off",
            offer: "Free Toppings!"
        },
        {
            name: "Chatpata Indian salads",
            ingredients: "Cucumber, tomatoes, onions, chickpeas/potatoes, green chilies.",
            instructions: " Mix chopped veggies and chickpeas/potatoes'",
            image: "https://veg.fit/wp-content/uploads/2021/12/Sprout-chaat.png",
            price: "190.00",
            discount: "20% off",
            offer: "Limited Time Offer!"
        },
        {
            name: "Overnight Chia Pudding",
            ingredients: "Chia seeds, milk (or almond milk), honey or maple syrup.",
            instructions: " Mix chia seeds with milk, honey, and vanilla, refrigerate overnight, top with fruit before serving.",
            image: "https://veg.fit/wp-content/uploads/2021/12/Chia-pudding.png",
            price: "200.00",
            discount: "15% off",
            offer: "Buy One Get One Free!"
        },
        {
            name: " Samosa Wraps",
            ingredients: "Samosas, tortillas or wraps, lettuce, cucumber, tomatoes",
            instructions: "Warm tortillas, add samosas, top with lettuce, cucumber, tomatoes, and sauce, roll up, serve.",
            image: "https://pickyeaterblog.com/wp-content/uploads/2022/11/samosa-wraps.jpg",
            price: "100.00",
            discount: "10% off",
            offer: "Buy One Get One Free!"
        },
        {
            name: "Appam Or Sri Lankan Hoppers",
            ingredients: "Rice flour, coconut milk, yeast, sugar, salt, water.",
            instructions: "Mix rice flour, swirl to form a thin edge, cook until edges are crispy, serve with curry.",
            image: "https://images.pexels.com/photos/4099234/pexels-photo-4099234.jpeg?auto=compress&cs=tinysrgb&w=800",
            price: "150.00",
            discount: "40% off",
            offer: "Limited Time Offer!"
        },
        {
            name: "High-Protein Mason Jar Salad",
            ingredients: "Quinoa, chickpeas, cucumber, cherry tomatoes, bell pepper, carrots",
            instructions: "Layer ingredients in a mason jar, Seal and shake before serving.",
            image: "https://www.eatingwell.com/thmb/YFrHD9ZA71SuygaIe7s-oQD81uY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EW-High-Protein-Salads-Beauty-Group-1x1-a3766d19228d4d7ab83479553850aac6.jpg",
            price: "150.00",
            discount: "40% off",
            offer: "Limited Time Offer!"
        },
        {
            name: "Tuna Salad & Tomato Sandwich",
            ingredients: "Tuna, mayo, diced celery, diced onion, bred, pepper",
            instructions: "Mix tuna, and pepper. Spread on bread, and top with another slice of bread.",
            image: "https://www.eatingwell.com/thmb/9c6ifi3Lg1nrY8iTc911l2VVhTI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tuna-salad-and-tomato-sandwich-hero-033-8a4f040ea4154aadafa7dcb7733e684c.jpg",
            price: "170.00",
            discount: "20% off",
            offer: "Limited Time Offer!"
        }
    ];

    function displayRecipes() {
        recipeList.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('menu-item');
            recipeCard.innerHTML = `
                <input type="checkbox" class="recipe-checkbox" data-index="${index}">
                <button class="remove-recipe" data-index="${index}">Remove</button>
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3><i class="fas fa-utensils"></i> ${recipe.name}</h3>
                <p class="ingredients"><i class="fas fa-leaf"></i> ${recipe.ingredients}</p>
                <p class="instructions"><i class="fas fa-book"></i> ${recipe.instructions}</p>
                <p class="price"><i class="fas fa-dollar-sign"></i> ${recipe.price} <span class="discount"><i class="fas fa-tag"></i> ${recipe.discount}</span></p>
                <p class="offer"><i class="fas fa-bell"></i> ${recipe.offer}</p>
            `;
            recipeList.appendChild(recipeCard);
        });
    }

    function addRecipe(event) {
        event.preventDefault();

        const name = document.getElementById('recipeName').value;
        const price = document.getElementById('recipePrice').value;
        const discount = document.getElementById('recipeDiscount').value;
        const offer = document.getElementById('recipeOffer').value;
        const ingredients = document.getElementById('recipeIngredients').value;
        const instructions = document.getElementById('recipeInstructions').value;
        const image = document.getElementById('recipeImage').value;

        const newRecipe = {
            name,
            ingredients,
            instructions,
            image: image || "https://via.placeholder.com/250/FF6F61/FFFFFF/?text=No+Image",
            price,
            discount,
            offer
        };

        recipes.push(newRecipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        displayRecipes();
        recipeFormModal.style.display = 'none';
        recipeForm.reset();
    }

    function removeRecipe(event) {
        if (event.target.classList.contains('remove-recipe')) {
            const index = event.target.getAttribute('data-index');
            recipes.splice(index, 1);
            localStorage.setItem('recipes', JSON.stringify(recipes));
            displayRecipes();
        }
    }

    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) || 
            recipe.ingredients.toLowerCase().includes(searchTerm) || 
            recipe.instructions.toLowerCase().includes(searchTerm)
        );
        recipeList.innerHTML = '';
        filteredRecipes.forEach((recipe, index) => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('menu-item');
            recipeCard.innerHTML = `
                <input type="checkbox" class="recipe-checkbox" data-index="${index}">
                <button class="remove-recipe" data-index="${index}">Remove</button>
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3><i class="fas fa-utensils"></i> ${recipe.name}</h3>
                <p class="ingredients"><i class="fas fa-leaf"></i> ${recipe.ingredients}</p>
                <p class="instructions"><i class="fas fa-book"></i> ${recipe.instructions}</p>
                <p class="price"><i class="fas fa-dollar-sign"></i> ${recipe.price} <span class="discount"><i class="fas fa-tag"></i> ${recipe.discount}</span></p>
                <p class="offer"><i class="fas fa-bell"></i> ${recipe.offer}</p>
            `;
            recipeList.appendChild(recipeCard);
        });
    }

    function saveSelectedRecipes() {
        const selectedRecipes = Array.from(document.querySelectorAll('.recipe-checkbox:checked')).map(checkbox => {
            const index = checkbox.getAttribute('data-index');
            return recipes[index];
        });

        if (selectedRecipes.length === 0) {
            alert('No recipes selected.');
            return;
        }

        const dataStr = JSON.stringify(selectedRecipes, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'selected_recipes.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    addRecipeBtn.addEventListener('click', function() {
        recipeFormModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        recipeFormModal.style.display = 'none';
    });

    recipeForm.addEventListener('submit', addRecipe);
    recipeList.addEventListener('click', removeRecipe);
    searchInput.addEventListener('input', filterRecipes);
    saveSelectedBtn.addEventListener('click', saveSelectedRecipes);

    // Initial display
    displayRecipes();
});




