let selectedCuisines = [];

    function selectCuisine(cuisine) {
        if (!selectedCuisines.includes(cuisine)) {
            selectedCuisines.push(cuisine);
            updateSelectedCuisines();
        }
    }

    function removeCuisine(cuisine) {
        selectedCuisines = selectedCuisines.filter(item => item !== cuisine);
        updateSelectedCuisines();
    }

    function updateSelectedCuisines() {
        const container = document.getElementById("selected-cuisine");
        container.innerHTML = "";
        selectedCuisines.forEach(cuisine => {
            container.innerHTML += `
                <span class="keywords-cuisine">${cuisine} 
                    <button type="button" class="btn-close btn-close-white ms-2" onclick="removeCuisine('${cuisine}')"></button>
                </span>
            `;
        });
    }
let selectedTags = [];

    function selectTag(tag) {
        if (!selectedTags.includes(tag)) {
            selectedTags.push(tag);
            updateSelectedTags();
        }
    }

    function removeTag(tag) {
        selectedTags = selectedTags.filter(item => item !== tag);
        updateSelectedTags();
    }

    function updateSelectedTags() {
        const container = document.getElementById("selected-tag");
        container.innerHTML = "";
        selectedTags.forEach(tag => {
            container.innerHTML += `
                <span class="keywords-tag">${tag} 
                    <button type="button" class="btn-close btn-close-white ms-2" onclick="removeTag('${tag}')"></button>
                </span>
            `;
        });
    }
let ingredientInput=document.getElementById("ingredients")
let add_ing=document.querySelector(".add-ing");
let ingredients = [];

add_ing.addEventListener("click",()=>{
    let ingredient=ingredientInput.value.trim();
    if (ingredient){
        selectIngredient(ingredient);
        ingredientInput.value="";
    }
});



    function selectIngredient(ingredient) {
        if (!ingredients.includes(ingredient)) {
            ingredients.push(ingredient);
            updateIngredients();
        }
    }

    function removeIngredient(ingredient) {
        ingredients = ingredients.filter(item => item !== ingredient);
        updateIngredients();
    }

    function updateIngredients() {
        const container = document.getElementById("selected-ingredients");
        container.innerHTML = "";
        ingredients.forEach(ingredient => {
            container.innerHTML += `
                <span class="keywords-ingredient">${ingredient} 
                    <button type="button" class="btn-close btn-close-white ms-2" onclick="removeIngredient('${ingredient}')"></button>
                </span>
            `;
        });
    }


    let instructionInput=document.getElementById("step")
    let add_step=document.querySelector(".add-step");
    let instructions = [];
    
    add_step.addEventListener("click",()=>{
        let instruction=instructionInput.value.trim();
        if (instruction){
            selectInstruction(instruction);
            instructionInput.value="";
        }
    });  
    
        function selectInstruction(instruction) {
            if (!instructions.includes(instruction)) {
                instructions.push(instruction);
                updateInstructions();
            }
        }
    
        function removeInstruction(instruction) {
            instructions = instructions.filter(item => item !== instruction);
            updateInstructions();
        }
    
        function updateInstructions() {
            const container = document.getElementById("instructions");
            container.innerHTML = "";
            let i=1
            instructions.forEach(instruction => {
                container.innerHTML += `
                    <span class="keywords-ingredient">${i}.${instruction} 
                        <button type="button" class="btn-close btn-close-white ms-2" onclick="removeInstruction('${instruction}')"></button>
                    </span>
                `;
                i++
            });
        }

        document.getElementById("file").addEventListener("change", function () {
            const file = this.files[0]; // Get the selected file
            const preview = document.getElementById("preview");
            const errorMessage = document.getElementById("file-error");
            const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
            
            if (file) {
                if (!allowedTypes.includes(file.type)) {
                    errorMessage.style.display = "block";
                    this.value = ""; // Clear the input field
                    preview.style.display = "none";
                } else {
                    errorMessage.style.display = "none";
        
                    // Create an image preview
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        preview.src = e.target.result;
                        preview.style.display = "block";
                    };
                    reader.readAsDataURL(file);
                }
            }
        });








