


document.addEventListener("DOMContentLoaded", function () {
    const recipeSection = document.querySelector(".recipes-section");

    function revealOnScroll() {
        let scrollY = window.scrollY;
        let viewportHeight = window.innerHeight;
        let sectionPosition = recipeSection.offsetTop;

        if (scrollY + viewportHeight > sectionPosition + 100) {
            recipeSection.classList.add("show");
        }
      }

    window.addEventListener("scroll", revealOnScroll);
});






document.addEventListener("DOMContentLoaded", function () {
    const nextBtn1 = document.querySelector("#recipeForm1 .next-btn");
    const nextBtn2 = document.querySelector("#recipeForm2 .next-btn");
    const nextBtn3 = document.querySelector("#recipeForm3 .next-btn");
    const backBtn2 = document.querySelector("#recipeForm2 .back-btn");
    const backBtn3 = document.querySelector("#recipeForm3 .back-btn");
    const backBtn4 = document.querySelector("#recipeForm4 .back-btn");

    const form1 = document.getElementById("recipeForm1");
    const form2 = document.getElementById("recipeForm2");
    const form3 = document.getElementById("recipeForm3");
    const form4 = document.getElementById("recipeForm4");

    // Initially hide Step 2
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";

    // Show Step 2 when clicking "Next"
    nextBtn1.addEventListener("click", function () {
        form1.style.display = "none";
        form2.style.display = "block";
        form3.style.display = "none";
        form4.style.display = "none";
    });

    nextBtn2.addEventListener("click", function () {
        form1.style.display = "none";
        form3.style.display = "block";
        form2.style.display = "none";
        form4.style.display = "none";
    });

    nextBtn3.addEventListener("click", function () {
        form1.style.display = "none";
        form4.style.display = "block";
        form3.style.display = "none";
        form2.style.display = "none";
    });

    // Show Step 1 when clicking "Back"
    backBtn2.addEventListener("click", function () {
        form2.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        form1.style.display = "block";
    });
    backBtn3.addEventListener("click", function () {
        form1.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        form2.style.display = "block";
    });
    backBtn4.addEventListener("click", function () {
        form2.style.display = "none";
        form1.style.display = "none";
        form4.style.display = "none";
        form3.style.display = "block";
    });
});


let selectedCuisines = [];

    function selectCuisine(cuisine) {
        if (!selectedCuisines.includes(cuisine)) {
            selectedCuisines.push(cuisine);
            console.log("Updated Cuisines:", selectedCuisines);
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








