(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(288)},124:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=(a(124),a(32)),s=a(8),c=a(9),d=a(12),m=a(10),u=a(11),p=a(2),g=a(114),h=a(291),b=a(290),y=a(27),f=a(17),v=a(26),w=(a(285),a(115)),E=a(69),k=function(e){var t=e.image;e.width,e.height,"".concat(t);return i.a.createElement("div",{className:"slide",style:{backgroundPosition:"center top",backgroundRepeat:"no-repeat",float:"left",width:"auto",height:"auto"}},i.a.createElement("img",{src:t,style:{width:"100px",height:"100px"}}))};k.defaultProps={width:300,height:600};var _=k,O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).renderSlides=function(){var e=a.state.images;return i.a.createElement("div",{className:"slider-items"},e.map(function(e,t){return i.a.createElement(_,{image:e,width:a.state.width,height:a.state.height,key:t})}))},a.state={width:200,height:100,images:["/images/products/sugar.jpeg","/images/products/onion.jpg","/images/products/tomato.jpg","/images/products/water.jpeg","/images/products/vegetable_oil.jpg"]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"slideLeft",value:function(){var e=this.state.images.slice(-1),t=this.state.images.slice(0,-1),a=[e].concat(Object(E.a)(t));this.setState({images:a})}},{key:"slideRight",value:function(){var e=Object(w.a)(this.state.images),t=e[0],a=e.slice(1),n=[].concat(Object(E.a)(a),[t]);this.setState({images:n})}},{key:"renderNavigation",value:function(){var e=this;return i.a.createElement("div",{className:"slider-arrows"},i.a.createElement("a",{className:"arrow left",onClick:function(){return e.slideLeft()}},i.a.createElement("img",{src:"/images/Arrow.png",style:{width:"50px"}})),i.a.createElement("a",{className:"arrow right",onClick:function(){return e.slideRight()}},i.a.createElement("img",{src:"/images/Arrow.png",style:{width:"50px"}})))}},{key:"render",value:function(){return i.a.createElement("div",{className:"slider"},this.renderNavigation(),this.renderSlides())}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.selectedMeal.instructions.map(function(e){return i.a.createElement("li",{key:e}," ",e," ")});return i.a.createElement("div",null,i.a.createElement("div",null,this.props.selectedMeal.label," "),i.a.createElement("div",null,i.a.createElement("img",{src:this.props.selectedMeal.imageSrc,alt:"info",style:{width:"350px",height:"350px"}})),i.a.createElement("div",null,this.props.selectedMeal.readTime," "),i.a.createElement("div",null," ",this.props.selectedMeal.cookTime),i.a.createElement(y.a,{trigger:i.a.createElement("u",null,"Click here to read steps"),modal:!0,contentStyle:x},function(a){return i.a.createElement("div",null,i.a.createElement("a",{className:"close",onClick:a},"\xd7"),i.a.createElement("div",{className:"container",style:j,id:"bigContainer"},i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("img",{src:e.props.selectedMeal.imageSrc,alt:"info",style:{width:"35%",height:"35%"}}),i.a.createElement("div",{className:"col-sm"},i.a.createElement("ol",{style:N},t))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"}," ",i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"}))))))}))}}]),t}(n.Component),j={display:"inline-block",width:"100%",height:"100%"},x={maxWidth:"100%",maxHeight:"100%"},N={},S=C,T=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t={backgroundColor:"#fd8953"},a=this.props.recipes.map(function(a){return a===e.props.selectedMeal?i.a.createElement("li",{key:a.id,onClick:e.props.showIngredients}," ",i.a.createElement("span",{style:t},i.a.createElement("b",null,a.label))," "):i.a.createElement("li",{key:a.id,onClick:e.props.showIngredients}," ",a.label," ")});return i.a.createElement("div",null,i.a.createElement("ol",null," ",a," "))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).number=3,a.ingredientPopOver=!0,a.stored_ingredients=[{Garri:{availability:["Lizy Gidy"]},Water:{availability:["Lizy Gidy"]},Sugar:{availability:["Lizy Gidy"]},"Rice- 3 Cups":{availability:["Lizy Gidy"]},"Tomatoes x 6":{availability:["Lizy Gidy"]},"Onion x 2":{availability:["Lizy Gidy"]},"Palm Oil- 2 Cups":{availability:["Lizy Gidy"]},"Black Eyed Beans x 1 bag(350mL)":{availability:["Lizy Gidy"]},"Onions x 2":{availability:["Lizy Gidy"]},"Potatoes - 8":{availability:["Lizy Gidy"]},"Garlic- 6 cloves":{availability:["Lizy Gidy"]},Thyme:{availability:["Lizy Gidy"]},Oregano:{availability:["Lizy Gidy"]},Basil:{availability:["Lizy Gidy"]},"Parmesan Cheese":{availability:["Lizy Gidy"]},Oil:{availability:["Lizy Gidy"]},Butter:{availability:["Lizy Gidy"]}}],a.IngredientInfoToggle=a.IngredientInfoToggle.bind(Object(p.a)(Object(p.a)(a))),a.state={ingredientPopOver:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"IngredientInfoToggle",value:function(e){console.log("toggled by:"+e.target),console.log()}},{key:"render",value:function(){var e,t=this,a=this.props.selectedMeal.ingredients.length,n=this.props.selectedMeal.ingredients.map(function(e){return i.a.createElement("li",{key:e}," ",e," \xa0",i.a.createElement("span",{id:e,onMouseOver:t.IngredientInfoToggle,onMouseOut:t.IngredientInfoToggle},i.a.createElement("img",{src:"/images/info_icon.png",alt:"Product details not found",style:{width:"13px",height:"13px"}})))});for(e=0;e<a;e++)i.a.createElement(h.a,{placement:"auto",isOpen:this.ingredientPopOver,target:this.props.selectedMeal.ingredients[e],toggle:this.IngredientInfoToggle},i.a.createElement(b.a,null,i.a.createElement("div",{className:"payback-disclaimer"},"In Stock in ",this.stored_ingredients," store(s)",i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("button",null,"Add to WishList"),i.a.createElement("br",null),i.a.createElement("button",null,"Add to Cart ")," ",i.a.createElement("br",null))));return i.a.createElement("div",null,i.a.createElement("ul",null," ",n," "))}}]),t}(i.a.Component),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).storeCollection=[{store_name:"Lizy Gidy",store_image:"/images/store_pics/lizy_gidy.jpg",products:[{product_name:"Garri",product_image:"/images/products/garri.jpg",product_price:8.99,variations:["Ijebu Garri","Ghana Garri","Yellow Garri"],sizes:["50lbs"]},{product_name:"Palm Oil",product_image:"/images/products/ola_ola_palm_oil.jpg",product_price:8.99,sizes:["64 oz","32 oz","17.6 choleterol free","35.2","105.60"],respective_prices:[19.99,10.99,7.99,13.99,29]},{product_name:"Beans",product_image:"/images/products/beans.jpeg",product_price:12,variations:["Brown Beans","Honey Beans"],sizes:["2 lbs"],price_per_ounce:3.2}]},{store_name:"African Carribean Market",store_image:"/images/store_pics/african_carribean_storefront_people.jpg",products:[{product_name:"Palm Oil",product_image:"/images/products/ola_ola_palm_oil.jpg",product_price:8.99,variations:["Ola-Ola Palm Oil","Omni Red Palm Oil 100% unrefined"],sizes:["1.32 Gallons","0.9 Gallons","50lbs"],price_per_gallon:3,price_per_pound:.3},{product_name:"Beans",product_image:"/images/products/beans.jpg",product_price:2.25,variations:["Black Eyes Peas","Whole Green Peas","Pinto Beans","Red Kidney Beans","Large Lime Beans"],sizes:"0.5 L"},{product_name:"Egusi",product_image:"/images/products/egusi.jpg",product_price:9.95,sizes:"5 Lbs"},{product_name:"Garri",product_image:"/images/products/garri.jpg",product_price:8.99,variations:["Ijebu Garri","Ghana Garri","Yellow Garri"],sizes:"50lbs"}]}],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var r,o=this.storeCollection.entries()[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var s=r.value,c=Object(l.a)(s,2),d=(c[0],c[1]),m=[],u=!0,p=!1,g=void 0;try{for(var h,b=d.products.entries()[Symbol.iterator]();!(u=(h=b.next()).done);u=!0){var f=h.value,v=Object(l.a)(f,2),w=(v[0],v[1]),E=d.store_name+w.product_name;m.push(i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 mealContainer",key:E},i.a.createElement("div",null,i.a.createElement("div",{style:M},i.a.createElement(y.a,{trigger:i.a.createElement("div",{id:w.id,style:M},i.a.createElement("img",{src:w.product_image,className:"images",style:{width:"100%"},alt:w.id}),i.a.createElement("div",{id:"textbox"},i.a.createElement("p",{className:"alignleft"},w.product_name),i.a.createElement("p",{className:"alignright",style:{color:"green"}},"$",w.product_price))),modal:!0,closeOnDocumentClick:!0,contentStyle:B},i.a.createElement("div",null,w.product_name,i.a.createElement("br",null),"Availability"),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("b",null,i.a.createElement("img",{src:w.product_image,alt:"info",style:{width:"100%",height:"100%",align:"center"}}))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("b",null,"Availabile",i.a.createElement("br",null),"Variations:",i.a.createElement("br",null),"Price:")))),i.a.createElement("span",null,"View Product"),"\xa0|\xa0",i.a.createElement("span",null,"Update Product"),"\xa0|\xa0",i.a.createElement("span",null,"Add To Cart.."),i.a.createElement("hr",null))))))}}catch(k){p=!0,g=k}finally{try{u||null==b.return||b.return()}finally{if(p)throw g}}e.push(i.a.createElement("div",{key:d.store_name},i.a.createElement("hr",null),i.a.createElement("img",{src:d.store_image,className:"images",style:{width:"10%"},alt:d.id}),i.a.createElement("b",null,d.store_name),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row "},m)),i.a.createElement("hr",null)))}}catch(k){a=!0,n=k}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}return i.a.createElement("div",null,i.a.createElement("div",{id:"title"},i.a.createElement("b",null,"Our Products")),e)}}]),t}(n.Component),M={display:"inline-block",width:"100%",height:"100%"},B={maxWidth:"100vw",maxHeight:"100vh",overflow:"scroll"},G=I,A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).meals=[{id:1,label:"Garri",imageSrc:"/images/meal_pics/Garri.jpg",readTime:"2 mins read",cookTime:"2 mins to prepare",intro:"Garri (African cereal) is a populous snack-meal in Western African region. It is made from cassava and can be drink by soaking in cold water or eaten as meal by soaking in hot water till its solid.",ingredients:["Garri","Water","Sugar"],new_ingredient:{Garri:{servings:{quantitiy:1,measurements:"Cup(s)"}},Water:{servings:{quantitiy:1,measurements:"Cup(s)"}},Sugar:{servings:{quantitiy:1,measurements:"Spoon(s)"}}},products:["Garri ","Sugar ","Water "],quantity:[1,2,1],measurements:["Cup(s)","Cup(s)","Spoon(s)"],instructions:["Mix Garri and Sugar in a bowl","Add ice, water and groundnuts as preffered","Enjoy!"],servings:1,display:!1},{id:2,label:"Puff Puff",imageSrc:"/images/meal_pics/puff_puff1.jpg",readTime:"4 mins read",cookTime:"80  mins to prepare",intro:" Puff Puff -- A very popular West African street food that's quick and easy to make with different variations. Dangerously delicious and addicting!",ingredients:["Water- 2 Cups","Yeast - 2 and 1/4 teaspoons(1 packet)","Flour- 3 and 1/2 Cups","Sugar- 3/4 Cup"],new_ingredient:{Garri:{servings:{quantitiy:1,measurements:"Cup(s)"}},Water:{servings:{quantitiy:1,measurements:"Cup(s)"}},Sugar:{servings:{quantitiy:1,measurements:"Spoon(s)"}}},products:["Flour ","Sugar ","Yeast ","Water "],quantity:[1,2,1],measurements:["Cup(s)","Cup(s)","Spoon(s)"],instructions:["Mix salt, sugar, water, and yeast . Set aside for 5 minutes.","Add flour and mix.","Let the mixture rise for approximately 1- 2 hours","In a large,sauce pan pour vegetable oil into a pot, until it is at least 3 inches (or about 5 centimeters) high (too little will result in flatter balls), and place on low heat.","Test to make sure the oil is hot enough by putting a \u2018drop\u2019 of batter into the oil. If it is not hot enough, the batter will stay at the bottom of the pot rather than rising to the top.","Using your hands grab a little bit of mixture at time and drop in the oil.","When the oil is hot enough, use a spoon to dish up the batter, and another spoon or spatula to drop it in the oil, sort of in the shape of a ball.","Fry for a few minutes until the bottom side is golden brown.","Turn the ball over and fry for a few more minutes until the other side is golden brown.","Use a large spoon or something like that to take it out of the oil. I usually place them on napkins right away to soak up some of the excess oil.","If desired, you can roll the finished product in table sugar or powdered sugar to make it sweeter"],servings:4,display:!1},{id:3,label:"Jollof Rice",imageSrc:"/images/meal_pics/Jollof.jpg",readTime:"4 mins read",cookTime:"45 mins to prepare",intro:"Jollof rice is a common delicacy that is enjoyed in the Western Africa region.Jollof rice a.k.a \u201cOne pot\u201d in Benachin, is a delicious delicacy that can be enjoyed without the need of a side-dish.  Jollof rice is a good source for carbohydrate, starch, fibers and traces of protein depending on the in the ingredients. Cooking jollof rice is often considered as a work of art due to the many styles and techniques and taste as good as next day left-over. Chop-Chow guarantees one of the best methods in Cooking Jollof rice. Chow!",ingredients:["Rice- 3 Cups","Tomatoes x 6","Onion x 2"],products:["Rice ","Tomatoes ","Onions "],instructions:["Tomato , Onion Tatashe, Rodo Blended in Blender","Vegetable Oil, Low Heat in Pan","Add onions to Pan","Add Tomato Paste","Add Powdered Ginger, Garlic and Curry","Add Blended Tomatoes mix (If too thick, add water)","Add seasoning, Maggi (Chicken Flavor), Salt","For Jollof Rice, add Bay Leaves."],display:!0},{id:4,label:"Fried Beans",imageSrc:"/images/meal_pics/Fried_beans_w_red_oil_plate.jpg",readTime:"4 mins read",cookTime:"60 mins to prepare",intro:"Fried beans is a delicious meal rich in protein, vitamins and fiber. It can serves as alternative for those trying to reduce the intake of meat and animal protein.",ingredients:["Black Eyed Beans x 1 bag(350mL)","Onions x 2","Palm Oil- 2 Cups"],products:["Black Eyed Beans ","Onions ","Palm Oil "],instructions:["Soak beans in water overnight","The next day, chop 1 onion into thin slices, cut the other one into 4 big chunks then pound/grind the pepper.","Rinse the beans and put in a sizeable pot. I rinse it twice.","Pre-cook the sliced onions with a few drops of water to soften them a bit.","When the beans is done, add salt, leave to dry up all the water and transfer the beans to another container.","Now, set a dry clean pot on the stove, pour the palm oil and heat it up till the oil melts (if congealed). Note that you should only heat it up, not bleach the oil. You will know it is hot enough when a piece of onion dropped into the oil sizzles.","Add the precooked onions and stir for a bit.","Add the ground Habanero pepper and stir till everything is heated up very well, at most 2 minutes.","Add the beans and stir for about 2 minutes. Add salt if necessary.","Cover and leave to simmer for about 2 minutes and it's done."],display:!0},{id:5,label:"Roasted Potatoes",imageSrc:"/images/meal_pics/roasted_potatoes.jpg",readTime:"3 mins read",cookTime:"90 mins to prepare",intro:"Delicious Red Roasted Potatoes. Popular in European dishes",ingredients:["Potatoes - 8","Garlic- 6 cloves","Thyme","Oregano","Basil","Parmesan Cheese","Oil","Butter"],products:["Red Potatoes ","Parmesan Cheese ","Thyme ","Oregano ","Basil ","Vegetable Oil ","Butter "],instructions:["Adjust oven rack to lowest position and heat oven to 450 degrees. ","Cut potatoes into quarter chunks","Toss potatoes with oil, salt and pepper chopped garlic, Thyme, Oregano, Basil and then Parmesan Cheese","Arrange, cut side down, on a large lipped cookie sheet or jellyroll pan.","Roast until tender and golden brown, or until desired crispiness about 30-45 minutes","Add butter in between roasting for a savory taste, Transfer to a serving dish when ready."],display:!0},{id:6,label:"Beans Burger",imageSrc:"/images/meal_pics/bean_burger.jpg",readTime:"8 mins read",cookTime:"40 mins to prepare",intro:"A healthy replacement for beef burgers, Beans burgers is just as filling and can be even more delicious.",ingredients:["2 cans black beans","1/2 bell pepper","1 large onion","6 garlic cloves","1 cup breadcrumbs","3 eggs (or more)","Paprika","Cumin","Garlic powder","\xbd cup cheese","1 tbsp worcestershire sauce","2 tbsp ketchup or bbq sauce"],products:["Black Beans","Vegetable Oil","BreadCrumbs","Paprika","Cheese","Worcestershire Wauce","BBQ Sauce","Heinz Ketchup"],instructions:["Drain and rinse beans and lay out on a baking tray in a single layer. Bake 325F for 15 min, while you set up the rest.","Dice the onion, garlic and pepper as finely as you can. Fry them together with a very small amount of oil, until onions start to go clear.","Blot the onion mix with a paper towel to remove excess oil and moisture. Add to a large mixing bowl with the beans and all other ingredients.","Mix ingredients together and mash with a fork. If the mix does not form solid patties, add more eggs and breadcrumbs until it is more solid. These 2 ingredients are the binding agents.","Form patties with the mix. I typically make them \xbd cup size each. For a more tasty version, try adding a layer of cheese in between 2 smaller patties.","Cook by frying around 5 mins on each side, or grill or bake at medium heat for about 10 minutes on each side. Any remaining burgers can be frozen in sandwich bags and cooked another time without any loss of flavour. You don\u2019t need to wait for the burgers to thaw before cooking.","Serve in a bun with toppings and sauces of your choice."],display:!0},{id:7,label:"Egusi Stew",imageSrc:"/images/meal_pics/image_coming_soon.png",readTime:"5 mins read",cookTime:"40 mins to prepare",intro:"A classic west African delicious stew that can be customized to your taste. Egusi can be eaten with varieties of meal like rice, amala and eba.",ingredients:["Melon Seeds - 3 Cups","Palm Oil","Chicken/Beef","Spinach - 1","Bell Pepper - 1","Tomatoes - 3","Onion - 1","Maggi","Salt","Stockfish","Crayfish","Assorted meats"],products:["Melon Seeds","Palm Oil","Chicken/Beef","Spinach","Bell Pepper","Tomatoes","Onion","Maggi","Salt","Stockfish","Crayfish","Assorted meats"],instructions:["Boil chicken/meat and keep aside the liquid broth for later use","Pour 3 cups of powder melon seed into a bowl","Pour 2 cups of water and mix into a thick paste","Pour desired amount of stock fish and crayfish into a bowl and add hot water to soften","Add 1 bell pepper, 3 tomatoes and half onion into blender and blend","Pour a small amount of palm oil and half onion diced into a cooking pot","Let it sizzle for a minute, then add the blended mixture"," Cook for 10 minutes, then add chicken or meat broth","Cook for additional 5 minutes ","Add the powdered melon seed in paste form and stir continuously (Reduce the heat to avoid burning)","Add 2 maggi and a sprinkle of salt, then cook for 7 mins","Add a box of chopped spinach and stir","Add the stock fish and crayfish","Add 1 maggi (Taste often for desired level of seasoning)","Cook for additional 10 minutes"],display:!0},{id:8,label:"Egg Stew",imageSrc:"/images/meal_pics/image_coming_soon.png",readTime:"5 mins read",cookTime:"30 mins to prepare",intro:"Egg stew is a creative modern style of frying eggs and insanely delicious, easy to make. Watch out, you might find this meal addictive.",ingredients:["Eggs -3 uncooked","Tomatoes - 3","Onions - 1","Oil","Maggi - 2 cubes","Salt","Shrimp","Sardine"],products:["Eggs","Tomatoes","Onions","Oil","Maggi","Salt","Shrimp","Sardine"],instructions:["Add 3 tomatoes and \xbd onion into blender and blend","Crack 3 eggs into a bowl, plus 1 maggi and a little sprinkle of salt, then mix well ","Add a small amount of cooking oil into frying pan","Add \xbd diced onion and let it fry for about a minute ","Add your choice of secondary ingredients","Let it cook for 5 mins"," Add the blended mixture, plus 1 maggi","Let it cook for another 5 mins (Taste often for desired level of seasoning","Pour the egg mixture into the fry pan and stir often ","Let it cook for about 7 mins (stir often)"],display:!0}],a.meal_popups=[],a.showIngredients=function(e){var t,n=e.target.innerText;for(t in console.log(n),a.meals)if(a.meals[t].label===n){a.setState({selectedMealIngredients:a.meals[t].ingredients}),a.setState({selectedMeal:a.meals[t]});break}},a.suggestMealToggle=a.suggestMealToggle.bind(Object(p.a)(Object(p.a)(a))),a.updateInstructionsDisplayBaseIndex=a.updateInstructionsDisplayBaseIndex.bind(Object(p.a)(Object(p.a)(a))),a.state={suggestMealPopOver:!1,mealsListed:!1,mealSelected:!1,IngredientsListed:!1,recipes:a.meals,selectedMealIngredients:a.meals[0].new_ingredients,selectedMeal:a.meals[0],showIngredients:{hidden:!0},showProducts:{hidden:!0},mealsLength:a.meals.length,base_index:0,topNav_className:"w3-bar w3-dark-grey w3-green topnav"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"suggestMealToggle",value:function(){this.setState({suggestMealPopOver:!this.state.suggestMealPopOver})}},{key:"showIngredient",value:function(e){console.log("updating popup boolean"),this.meal_popups[e]=!this.meal_popups[e]}},{key:"updateInstructionsDisplayBaseIndex",value:function(e){console.log(e.target.innerText);var t=e.target.innerText,a=(t.match("/^w+[ ]/d  $/"),t.slice(6,7)),n=Number(a);this.setState({base_index:3*n})}},{key:"render",value:function(){var e=this,t=[],a=!0,n=!1,r=void 0;try{for(var o,s=function(){var a=o.value,n=(d=Object(l.a)(a,2))[0],r=d[1];0;var s=r.instructions.map(function(e){return i.a.createElement("li",{key:e}," ",e," ")});m=[];var c=r.instructions.length,p=r.ingredients.map(function(e){return i.a.createElement("li",{key:e}," ",e," ")});for(u=0;u<c/3;u++)m.push(i.a.createElement("button",{key:u,onClick:e.updateInstructionsDisplayBaseIndex},"Slide ",u,"  "));e.meal_popups.push(!1),t.push(i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 mealContainer",key:r.id},i.a.createElement("div",null,i.a.createElement("div",{style:L,onClick:function(){e.meal_popups[n]=!e.meal_popups[n];var t=document.getElementById(r.id),a=document.getElementById(r.id+"products");e.meal_popups[n]?(t.style.display="block",a.style.display="block"):(t.style.display="none",a.style.display="none")}},i.a.createElement("img",{src:r.imageSrc,className:"images",style:{width:"100%"},alt:r.id}),i.a.createElement("div",{style:{color:"black"}}," ",i.a.createElement("b",null," ",r.label," | ",r.cookTime,"  "),"| ",i.a.createElement("span",{style:{color:"grey"}}," View Details")))),i.a.createElement(y.a,{trigger:i.a.createElement("div",{id:r.id,style:{display:"none"}},r.intro,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{style:{backgroundColor:"orange"}},"View Steps"),i.a.createElement("br",null)),modal:!0,closeOnDocumentClick:!0,contentStyle:z},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",null,i.a.createElement("b",null,"Ingredients")),i.a.createElement("div",{className:"col align-items-center"},i.a.createElement("ol",null,p))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("b",null,i.a.createElement("div",{className:"col"},r.readTime,i.a.createElement("br",null),r.cookTime))),i.a.createElement("div",{id:"mealPrepChunk"},s[e.state.base_index+0],s[e.state.base_index+1],s[e.state.base_index+2])),i.a.createElement("br",null)),i.a.createElement("hr",null),i.a.createElement("span",null,"Overview"),"\xa0|\xa0",i.a.createElement("span",null,"Kitchen accessories for this meal"),"\xa0|\xa0",i.a.createElement("span",null,"Add To Cart.."),i.a.createElement("br",null),m,i.a.createElement("img",{src:r.imageSrc,alt:"info",style:{width:"100%",height:"100%",align:"center"}}),i.a.createElement("hr",null)),i.a.createElement("div",{id:r.id+"products",style:{display:"none"}},i.a.createElement("b",null,"Ingredients 1"),i.a.createElement("br",null),r.products,i.a.createElement(O,{products:r.products}))))},c=this.meals.entries()[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var d,m,u;s()}}catch(p){n=!0,r=p}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}return i.a.createElement("div",null,i.a.createElement("div",{className:"w3-bar w3-dark-grey w3-green topnav",id:"myTopnav"},i.a.createElement(f.b,{to:"/v2",className:"w3-bar-item w3-button w3-text-orange w3-hover-orange w3-mobile"},"CC"),i.a.createElement(f.b,{to:"/v2",className:"w3-bar-item w3-button w3-hover-orange w3-mobile"},"Recipes"),i.a.createElement(f.b,{to:"/grocery",className:"w3-bar-item w3-button w3-hover-orange w3-mobile"},"Grocery List"),i.a.createElement("div",{className:"w3-dropdown-hover w3-mobile"},i.a.createElement("button",{className:"w3-button w3-hover-orange w3-mobile"},"Shop ",i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{className:"w3-dropdown-content w3-bar-block w3-card-4 "},i.a.createElement(f.b,{to:"/products",className:"w3-bar-item w3-button w3-text-black w3-hover-orange w3-mobile"},"Food Products"),i.a.createElement(f.b,{to:"/products",className:"w3-bar-item w3-button w3-text-black w3-hover-orange w3-mobile"},"Kitchen Products"),i.a.createElement(f.b,{to:"/products",className:"w3-bar-item w3-button w3-text-black w3-hover-orange w3-mobile"},"Other Household Items"))),i.a.createElement(f.b,{to:"/",className:"w3-bar-item w3-button w3-text-grey w3-hover-orange w3-mobile"}," Stats"),i.a.createElement(f.b,{to:"#",className:"icon",onClick:function(){console.log("Comes thru here"),function(){var e=document.getElementById("myTopnav");console.log(e),"w3-bar w3-dark-grey w3-green topnav"===e.className?e.className+=" responsive":e.className="w3-bar w3-dark-grey w3-green topnav"}()}},i.a.createElement("i",{className:"fa fa-bars"}))),i.a.createElement(g.Typeahead,{options:this.meals,placeholder:"Find Meals (and Ingredients) here..",id:"typeahead"}),i.a.createElement(v.c,null,i.a.createElement(v.a,{exact:!0,path:"/",render:function(e){return i.a.createElement("div",null,i.a.createElement("div",{id:"title"},i.a.createElement("b",null,"Meals")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},t)))}}),i.a.createElement(v.a,{path:"/v1",render:function(t){return i.a.createElement("div",{className:"container"},i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("b",null,"Meals"),i.a.createElement(T,{recipes:e.state.recipes,showIngredients:e.showIngredients,selectedMeal:e.state.selectedMeal}),i.a.createElement("span",null,"+"),i.a.createElement("input",{placeholder:"Suggest Meal"}),"\xa0",i.a.createElement("button",null,"Submit ",i.a.createElement("span",{id:"Popover1",onMouseOver:e.suggestMealToggle,onMouseOut:e.suggestMealToggle},i.a.createElement("img",{src:"/images/info_icon.png",alt:"info",style:{width:"13px",height:"13px"}})," "))),i.a.createElement("div",{className:"col-sm"},i.a.createElement("b",null,"Recipe Contents"),i.a.createElement(S,{selectedMeal:e.state.selectedMeal})),i.a.createElement("div",{className:"col-sm"},i.a.createElement("b",null,"Ingredients"),i.a.createElement(P,{selectedMealIngredients:e.state.selectedMealIngredients,selectedMeal:e.state.selectedMeal})),i.a.createElement(h.a,{placement:"auto",isOpen:e.state.suggestMealPopOver,target:"Popover1",toggle:e.suggestMealToggle},i.a.createElement(b.a,null,i.a.createElement("div",{className:"payback-disclaimer"},"Suggestions by Guest Users are recorded, but do not change the publicly displayed Meals.")))))}}),i.a.createElement(v.a,{path:"/v2",render:function(e){return i.a.createElement("div",null,i.a.createElement("div",{id:"title"},i.a.createElement("b",null,"Meals")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},t)))}}),i.a.createElement(v.a,{path:"/grocery",render:function(e){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("b",null,"Your Grocery List")),i.a.createElement("div",{className:"fb-login-button","data-width":"","data-size":"large","data-button-type":"continue_with","data-auto-logout-link":"false","data-use-continue-as":"false"}))}}),i.a.createElement(v.a,{path:"/products",render:function(e){return i.a.createElement(G,null)}})))}}]),t}(n.Component),L={display:"inline-block",width:"100%",height:"100%"},z={maxWidth:"100vw",maxHeight:"100vh",overflow:"scroll"},W=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(f.a,null,i.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,1,2]]]);
//# sourceMappingURL=main.3363dace.chunk.js.map