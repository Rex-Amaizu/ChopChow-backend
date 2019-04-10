import React, { Component } from 'react'; 
import {Typeahead} from 'react-bootstrap-typeahead';
// import ListedMealsSection from './components/mealMenu/ListedMealsSection';
// import RecipeContentSection from './components/mealMenu/RecipeContentSection';
// import IngredientSection from './components/mealMenu/IngredientSection';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Popover, PopoverBody } from 'reactstrap';
import Popup from "reactjs-popup";
import { Link, Route, Switch } from "react-router-dom";
import RecipeContentSection from './components/mealMenu/RecipeContentSection';
import ListedMealsSection from './components/mealMenu/ListedMealsSection';
import IngredientSection from './components/mealMenu/IngredientSection';
import ProductsSection from './components/productSection/ProductsPage';
//import Collapse from 'react-bootstrap/Collapse';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

    meals = [
        {
            id: 1,
            label: "Garri",
            imageSrc: '/images/meal_pics/Garri.jpg',
            readTime: "2 mins read",
            cookTime: "2 mins to prepare",
            intro: "Garri (African cereal) is a populous snack-meal in Western African region. "+
            "It is made from cassava and can be drink by soaking in cold water or eaten as meal by soaking in hot water till its solid.",
            ingredients: ["Garri", "Water", "Sugar"],
            new_ingredient:{
                "Garri":{
                servings:{
                    quantitiy: 1,
                    measurements: "Cup(s)"
                }},
                "Water":{
                servings:{
                    quantitiy: 1,
                    measurements: "Cup(s)"
                }},
                "Sugar":{
                    servings:{
                        quantitiy: 1,
                        measurements: "Spoon(s)"
                    }}
              
            },
            products: ["Garri ", "Sugar ", "Water " ],
            quantity:[1,2,1],
            measurements:["Cup(s)","Cup(s)","Spoon(s)"],
            instructions: ["Mix Garri and Sugar in a bowl", "Add ice, water and groundnuts as preffered", "Enjoy!"],
            servings: 1,
            display: false
        },
        {
            id: 2,
            label: "Puff Puff",
            imageSrc: '/images/meal_pics/puff_puff.jpg',
            readTime: "4 mins read",
            cookTime: "80  mins to prepare",
            intro: " Puff Puff -- A very popular West African street food that's quick and easy to make with different variations."+
            " Dangerously delicious and addicting!",
            ingredients: ["Water- 2 Cups", "Yeast - 2 and 1/4 teaspoons(1 packet)", "Flour- 3 and 1/2 Cups", "Sugar- 3/4 Cup"],
            new_ingredient:{
                "Garri":{
                servings:{
                    quantitiy: 1,
                    measurements: "Cup(s)"
                }},
                "Water":{
                servings:{
                    quantitiy: 1,
                    measurements: "Cup(s)"
                }},
                "Sugar":{
                    servings:{
                        quantitiy: 1,
                        measurements: "Spoon(s)"
                    }}
              
            },
            products: ["Flour ", "Sugar ", "Yeast ", "Water "],
            quantity:[1,2,1],
            measurements:["Cup(s)","Cup(s)","Spoon(s)"],
            instructions: ["Mix salt, sugar, water, and yeast . Set aside for 5 minutes.",
"Add flour and mix.",
"Let the mixture rise for approximately 1- 2 hours",
"In a large,sauce pan pour vegetable oil into a pot, until it is at least 3 inches (or about 5 centimeters) high (too little will result in flatter balls), and place on low heat.",
"Test to make sure the oil is hot enough by putting a ‘drop’ of batter into the oil. If it is not hot enough, the batter will stay at the bottom of the pot rather than rising to the top.",
"Using your hands grab a little bit of mixture at time and drop in the oil.",
"When the oil is hot enough, use a spoon to dish up the batter, and another spoon or spatula to drop it in the oil, sort of in the shape of a ball.",
"Fry for a few minutes until the bottom side is golden brown.",
"Turn the ball over and fry for a few more minutes until the other side is golden brown.",
"Use a large spoon or something like that to take it out of the oil. I usually place them on napkins right away to soak up some of the excess oil.",
"If desired, you can roll the finished product in table sugar or powdered sugar to make it sweeter"],
            servings: 4,
            display: false
        },
        {
            id: 3,
            label: "Jollof Rice",
            imageSrc: "/images/meal_pics/Jollof.jpg",
            readTime: "4 mins read",
            cookTime: "45 mins to prepare",
            intro: "Jollof rice is a common delicacy that is enjoyed in the Western Africa region."+
            "Jollof rice a.k.a “One pot” in Benachin, is a delicious delicacy that can be enjoyed without the need of a side-dish. "+
            " Jollof rice is a good source for carbohydrate, starch, fibers and traces of protein depending on the in the ingredients. "+
            "Cooking jollof rice is often considered as a work of art due to the many styles and techniques and taste as good as next day left-over. "+
            "Chop-Chow guarantees one of the best methods in Cooking Jollof rice. Chow!",
            ingredients: ["Rice- 3 Cups", "Tomatoes x 6", "Onion x 2"],
            products: ["Rice ", "Tomatoes ", "Onions "],
            instructions:[ "Tomato , Onion Tatashe, Rodo Blended in Blender",
            "Vegetable Oil + Palm Oil, Low Heat in Pan",
            "Add onions to Pan", "Add Tomato Paste", "Add Powdered Ginger, Garlic and Curry",
            "Add Blended Tomatoes mix (If too thick, add water)","Add seasoning, Maggi (Chicken Flavor), Salt",
        "For Jollof Rice, add Bay Leaves."],
            display: true
        },
        {
            id: 4,
            label: "Fried Beans",
            imageSrc: "/images/meal_pics/FriedBeans.jpg",
            readTime: "4 mins read",
            cookTime: "60 mins to prepare",
            intro: "Fried beans is a delicious meal rich in protein, vitamins and fiber."+
            " It can serves as alternative for those trying to reduce the intake of meat and animal protein.",
            ingredients: ["Black Eyed Beans x 1 bag(350mL)", "Onions x 2", "Palm Oil- 2 Cups"],
            products: ["Black Eyed Beans ", "Onions ", "Palm Oil "],
            instructions: ["Soak beans in water overnight","The next day, chop 1 onion into thin slices, cut the other one into 4 big chunks then pound/grind the pepper.",
        "Rinse the beans and put in a sizeable pot. I rinse it twice.",
     "Pre-cook the sliced onions with a few drops of water to soften them a bit.","When the beans is done, add salt, leave to dry up all the water and transfer the beans to another container.",
    "Now, set a dry clean pot on the stove, pour the palm oil and heat it up till the oil melts (if congealed). Note that you should only heat it up, not bleach the oil. You will know it is hot enough when a piece of onion dropped into the oil sizzles.",
"Add the precooked onions and stir for a bit.", "Add the ground Habanero pepper and stir till everything is heated up very well, at most 2 minutes.","Add the beans and stir for about 2 minutes. Add salt if necessary.",
"Cover and leave to simmer for about 2 minutes and it's done."],
            display: true
        },
        {
            id: 5,
            label: "Roasted Potatoes",
            imageSrc: "/images/meal_pics/roasted_potatoes.jpg",
            readTime: "3 mins read",
            cookTime: "90 mins to prepare",
            intro: "Delicious Red Roasted Potatoes. Popular in European dishes",
            ingredients: ["Potatoes - 8", "Garlic- 6 cloves",  "Thyme", "Oregano", "Basil", "Parmesan Cheese", "Oil", "Butter"],
            products: ["Red Potatoes ", "Parmesan Cheese ", "Thyme ", "Oregano ", "Basil ", "Vegetable Oil ", "Butter "],
            instructions: ["Adjust oven rack to lowest position and heat oven to 450 degrees. ", "Cut potatoes into quarter chunks",
        "Toss potatoes with oil, salt and pepper chopped garlic, Thyme, Oregano, Basil and then Parmesan Cheese", 
    "Arrange, cut side down, on a large lipped cookie sheet or jellyroll pan.", "Roast until tender and golden brown, or until desired crispiness about 30-45 minutes","Add butter in between roasting for a savory taste, Transfer to a serving dish when ready."],
            display: true
        }
    ]


    constructor(props){
        super(props);
        this.suggestMealToggle = this.suggestMealToggle.bind(this);
        this.updateInstructionsDisplayBaseIndex = this.updateInstructionsDisplayBaseIndex.bind(this);
        //this.showIngredient = this.showIngredient.bind(this);

        this.state={
            suggestMealPopOver: false,
            mealsListed : false,
            mealSelected : false,
            IngredientsListed : false,
            recipes: this.meals, //[this.Garri, this.Jollof_Rice],
            selectedMealIngredients: this.meals[0].new_ingredients,
            selectedMeal: this.meals[0],
            showIngredients:{
                hidden: true
            },
            showProducts:{
                hidden: true
            },
            //open: false,

            mealsLength : this.meals.length,
            base_index : 0
        }
    }

    meal_popups  = [];

    showIngredients=(event)=>{
        let mealString = event.target.innerText;
        var meal;
        for (meal in this.meals){
            //console.log(this.meals[meal].label);
            if (this.meals[meal].label === mealString){
            //change selected ingredients
                this.setState({selectedMealIngredients: this.meals[meal].ingredients});
                this.setState({selectedMeal: this.meals[meal]});
                break;
            }
        }
        //console.log({meal}.name);
        //get list of ingredients
    }

    suggestMealToggle() {
        this.setState({
            suggestMealPopOver: !this.state.suggestMealPopOver
        });
    }

    showIngredient(index){
        console.log("updating popup boolean");
        this.meal_popups[index] = !this.meal_popups[index]
    }

    updateInstructionsDisplayBaseIndex(event){
        //console.log(event.target.innerText);
        var button = event.target.innerText;
        var regExp = '/^w+[ ]/d  $/';
        var slide_index = button.match(regExp);
        //console.log(slide_index);
        var last_chars = button.slice(6,7);

        var slide_num = Number(last_chars);

        this.setState({base_index: slide_num*3})
        //var base_index = slide_num*3;
        //console.log("Updating base index on click to: " +this.state.base_index);
    }


    render() {
        // Render your page inside
        // the layout provider
        //const elements = ['one', 'two', 'three'];
        //const popOverInfo = []
        const items = []



        for (const [index, value] of this.meals.entries()) {
            //console.log();
            var base_index = 0;
            const mealPrep = value.instructions.map((step)=> <li key={step} > {step} </li>);
            var popUpSlides = [];

             const instructionsLength = value.instructions.length;
             //console.log(instructionsLength);

            // var mealIngredient = value.ingredients ;
            const ingredientsList = value.ingredients.map((step)=> <li key={step} > {step} </li>);
            var i;
            for (i = 0; i < instructionsLength/3; i++) { 
                popUpSlides.push(<button key={i} onClick={this.updateInstructionsDisplayBaseIndex}>Slide {i}  </button>)
              }
            this.meal_popups.push(false);
            // console.log(this.meal_popups);
            // console.log(index);
            items.push(
                <div className="col-sm-12 col-md-6 col-lg-4 mealContainer"  key = {value.id} >
                    <div>
                        <div style={containerStyle} onClick={()=>{
                                this.meal_popups[index] = !this.meal_popups[index];
                                // console.log(this.meal_popups);
                                var x = document.getElementById(value.id);
                                var y = document.getElementById(value.id+"products")
                                if(this.meal_popups[index]){
                                    x.style.display = "block";
                                    y.style.display = "block";

                                }
                                else{
                                    x.style.display = "none";
                                    y.style.display = "none";
                                }
                                }}>
                            <img src={value.imageSrc} className="images" style={{width:"100%"}} alt={value.id}></img>
                            {/* <img src={value.imageSrc} className="images" style={{width:"100%"}} alt={value.id} onClick={this.showIngredient(index)}></img> */}
                            <div style={{color: "black"}}> <b> {value.label} | {value.cookTime}  </b>| <span style={{color:"grey"}}> View Details</span></div>
                        </div>
                    </div>
                <Popup 
                    trigger={
                        <div id = {value.id} style={{ display:"none"}}>
                        {value.intro}
                        <br></br>
                        <br></br>
                        <button style={{backgroundColor: "orange" }}>View Steps</button>  
                        <br></br>                           
                        </div> 
                    } modal closeOnDocumentClick contentStyle={contentStyle}>
                    {/* Inside Pop - up */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div><b>Ingredients</b></div>
                                <div className="col align-items-center"><ol>{ingredientsList}</ol></div>
                            </div>
                            <div className="col-sm-6"><b>
                                <div className="col">{value.readTime}<br></br>{value.cookTime}</div>
                                {/* <div className="col"></div> */}
                                </b>
                            </div> 
                            <div id= "mealPrepChunk">
                            {mealPrep[this.state.base_index+0]}
                            {mealPrep[this.state.base_index+1]}
                            {mealPrep[this.state.base_index+2]}
                            </div>
                        </div>
                        <br></br>
                        {/* <div className="row">
                            <div className="col-sm-12">
                                <img src={value.imageSrc} alt='info' style={{ width:"100%", height:"100%", align:"center"}}></img>
                            </div>
                        </div> */}
                    </div>
                    <hr></hr>

                    <span>Overview</span>&nbsp;|&nbsp;<span>Kitchen accessories for this meal</span>&nbsp;|&nbsp;<span>Add To Cart..</span>
                    <br></br>
                    {popUpSlides}
                    <img src={value.imageSrc} alt='info' style={{ width:"100%", height:"100%", align:"center"}}></img>
                    <hr></hr>
                    {/* <div className="col">
                        <div className="col align-items-center"><ol>{mealPrep}</ol></div>
                    </div> */}
                            
                    {/* </div> */}
                        
                    {/* </div> */}
                    {/* <div>
                    <div className="col align-items-left">
                        <img src={value.imageSrc} alt='info'  style={{width:'35%', height:'35%', align:"center"}}></img>
                    </div>
                    <div>                            
                        <div className="col align-items-center"><ol>{mealPrep}</ol></div>
                    </div>
                    </div>
                    */}
                 </Popup>
                 <div id = {value.id+"products"} style={{ display:"none"}}>
                 <b>Ingredients</b>
                        <br></br>
                        {value.products}
                 </div>
                
                    
                </div>
            )
        }

        return (
            <div>
                {/* <div> */}
               
<div className="w3-bar w3-dark-grey w3-green ">
        <Link to="/v2" className="w3-bar-item w3-button w3-text-orange w3-hover-orange w3-mobile">CC</Link>
        <Link to="/v2" className="w3-bar-item w3-button w3-hover-orange w3-mobile">Recipes</Link>
        <Link to="/grocery" className="w3-bar-item w3-button w3-hover-orange w3-mobile">Grocery List</Link>
    <div className="w3-dropdown-hover w3-mobile">
        <button className="w3-button w3-hover-orange w3-mobile"> Shop <i className="fa fa-caret-down"></i></button>
        <div className="w3-dropdown-content w3-bar-block w3-card-4 ">
            <Link to="/products" className="w3-bar-item w3-button w3-hover-orange w3-mobile">Food Products</Link>
            <Link to="/products" className="w3-bar-item w3-button w3-hover-orange w3-mobile">Kitchen Products</Link>
            <Link to="/products" className="w3-bar-item w3-button w3-hover-orange w3-mobile">Other Household Items</Link>
        </div>
    </div>
    <span className="w3-bar-item w3-button w3-text-grey w3-hover-orange w3-mobile"> Stats</span>

</div>

                {/* </div> */}
                <Typeahead options={this.meals} 
                placeholder="Find Meals (and Ingredients) here.."
                id="typeahead"
                // onChange={(selected) => {
                //     // Handle selections...
                //   }}
                // filterBy={['label', 'ingredients']}
                />


                    
                <Switch>
                    <Route exact path="/" render={(props)=>(
                        <div className="container">
                            <div className="row ">
                                {items} 
                            </div>
                        </div>
                    )}/>

                    <Route path="/v1" render={(props)=>(
                        <div className="container">
                        <br></br>
                        <div className="row">
                            <div className="col-sm">
                                <b>Meals</b>
                                <ListedMealsSection 
                                recipes={this.state.recipes} showIngredients={this.showIngredients}
                                selectedMeal={this.state.selectedMeal}/>
                                <span>&#43;</span><input placeholder="Suggest Meal"></input> 
                                
                              &nbsp;<button>Submit <span id="Popover1" onMouseOver={this.suggestMealToggle} onMouseOut={this.suggestMealToggle} >
                              <img src="/images/info_icon.png" alt="info" style={{width:'13px', height:'13px'}}/> </span></button>
                              {/* onClick={this.suggestMealToggle} */}
                             </div>                     
                            <div className="col-sm">
                                <b>Recipe Contents</b>
                                <RecipeContentSection selectedMeal= {this.state.selectedMeal}/>
                                
                            </div>
        
                            <div className="col-sm">
                                <b>Ingredients</b>
                                <IngredientSection selectedMealIngredients= {this.state.selectedMealIngredients}
                                selectedMeal= {this.state.selectedMeal}/>
                                {/* <span>&#43;</span><input placeholder="Suggest Ingredient.."></input> */}
                            </div>
                            
                            <Popover placement="auto" isOpen={this.state.suggestMealPopOver} target="Popover1" toggle={this.suggestMealToggle}>
                                <PopoverBody><div className="payback-disclaimer">
                                Suggestions by Guest Users are recorded, but do not change the publicly displayed Meals.
                                </div></PopoverBody>
                            </Popover>
                        </div>
                    </div>
                    )}/>

                    <Route path="/v2" render={(props)=>(
                    <div>
                        <div id="title">
                            <b>Meals</b>
                         </div>

                        <div className="container">
                           

                            <div className="row ">
                                {items} 
                            </div>
                        </div>
                    </div>
                    )}/>

                    <Route path="/grocery" render={(props)=>(
                        // <RecipeContentSection selectedMeal= {this.state.selectedMeal}/>
                        <span><b>Your Grocery List</b></span>
                    )}/>

                    <Route path="/products" render={(props)=>(
                         <ProductsSection /> 
                    )}/>
                    </Switch>

    
                {/* <div className="row">
                    <div className="col-sm">
                        <b>Meals</b>
                        <ListedMealsSection 
                        recipes={this.state.recipes} showIngredients={this.showIngredients}
                        selectedMeal={this.state.selectedMeal}/>
                        
                        
                
                     </div>                     
                    <div className="col-sm">
                        <b>Recipe Contents</b>
                        <RecipeContentSection selectedMeal= {this.state.selectedMeal}/>
                        
                    </div>

                    <div className="col-sm">
                        <b>Ingredients</b>
                        <IngredientSection selectedMealIngredients= {this.state.selectedMealIngredients}
                        selectedMeal= {this.state.selectedMeal}/>
                    </div>
                    
                    
                </div> */}
            </div>
        );
    }
} 

const containerStyle = {
    //font: "50px",
    display: "inline-block",
    width: "100%",
    height: "100%",
    
}

const contentStyle = {
// borderRadius: "25px",
maxWidth: "100vw",
maxHeight: "100vh",
overflow: "scroll"
// width: "90%",
// height: "50%",

};
  

export default App;

