(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(283)},119:function(e,t,a){},280:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),r=a.n(l),s=(a(119),a(32)),o=a(14),c=a(15),d=a(18),m=a(16),u=a(17),p=a(2),g=a(110),h=a(286),b=a(285),y=a(27),v=a(20),E=a(26),f=(a(280),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.selectedMeal.instructions.map(function(e){return i.a.createElement("li",{key:e}," ",e," ")});return i.a.createElement("div",null,i.a.createElement("div",null,this.props.selectedMeal.label," "),i.a.createElement("div",null,i.a.createElement("img",{src:this.props.selectedMeal.imageSrc,alt:"info",style:{width:"350px",height:"350px"}})),i.a.createElement("div",null,this.props.selectedMeal.readTime," "),i.a.createElement("div",null," ",this.props.selectedMeal.cookTime),i.a.createElement(y.a,{trigger:i.a.createElement("u",null,"Click here to read steps"),modal:!0,contentStyle:k},function(a){return i.a.createElement("div",null,i.a.createElement("a",{className:"close",onClick:a},"\xd7"),i.a.createElement("div",{className:"container",style:w,id:"bigContainer"},i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("img",{src:e.props.selectedMeal.imageSrc,alt:"info",style:{width:"35%",height:"35%"}}),i.a.createElement("div",{className:"col-sm"},i.a.createElement("ol",{style:O},t))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"}," ",i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"}))))))}))}}]),t}(n.Component)),w={display:"inline-block",width:"100%",height:"100%"},k={maxWidth:"100%",maxHeight:"100%"},O={},_=f,j=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t={backgroundColor:"#fd8953"},a=this.props.recipes.map(function(a){return a===e.props.selectedMeal?i.a.createElement("li",{key:a.id,onClick:e.props.showIngredients}," ",i.a.createElement("span",{style:t},i.a.createElement("b",null,a.label))," "):i.a.createElement("li",{key:a.id,onClick:e.props.showIngredients}," ",a.label," ")});return i.a.createElement("div",null,i.a.createElement("ol",null," ",a," "))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).number=3,a.ingredientPopOver=!0,a.stored_ingredients=[{Garri:{availability:["Lizy Gidy"]},Water:{availability:["Lizy Gidy"]},Sugar:{availability:["Lizy Gidy"]},"Rice- 3 Cups":{availability:["Lizy Gidy"]},"Tomatoes x 6":{availability:["Lizy Gidy"]},"Onion x 2":{availability:["Lizy Gidy"]},"Palm Oil- 2 Cups":{availability:["Lizy Gidy"]},"Black Eyed Beans x 1 bag(350mL)":{availability:["Lizy Gidy"]},"Onions x 2":{availability:["Lizy Gidy"]},"Potatoes - 8":{availability:["Lizy Gidy"]},"Garlic- 6 cloves":{availability:["Lizy Gidy"]},Thyme:{availability:["Lizy Gidy"]},Oregano:{availability:["Lizy Gidy"]},Basil:{availability:["Lizy Gidy"]},"Parmesan Cheese":{availability:["Lizy Gidy"]},Oil:{availability:["Lizy Gidy"]},Butter:{availability:["Lizy Gidy"]}}],a.IngredientInfoToggle=a.IngredientInfoToggle.bind(Object(p.a)(Object(p.a)(a))),a.state={ingredientPopOver:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"IngredientInfoToggle",value:function(e){console.log("toggled by:"+e.target),console.log()}},{key:"render",value:function(){var e,t=this,a=this.props.selectedMeal.ingredients.length,n=this.props.selectedMeal.ingredients.map(function(e){return i.a.createElement("li",{key:e}," ",e," \xa0",i.a.createElement("span",{id:e,onMouseOver:t.IngredientInfoToggle,onMouseOut:t.IngredientInfoToggle},i.a.createElement("img",{src:"/images/info_icon.png",alt:"Product details not found",style:{width:"13px",height:"13px"}})))});for(e=0;e<a;e++)i.a.createElement(h.a,{placement:"auto",isOpen:this.ingredientPopOver,target:this.props.selectedMeal.ingredients[e],toggle:this.IngredientInfoToggle},i.a.createElement(b.a,null,i.a.createElement("div",{className:"payback-disclaimer"},"In Stock in ",this.stored_ingredients," store(s)",i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("button",null,"Add to WishList"),i.a.createElement("br",null),i.a.createElement("button",null,"Add to Cart ")," ",i.a.createElement("br",null))));return i.a.createElement("div",null,i.a.createElement("ul",null," ",n," "))}}]),t}(i.a.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).stores=[{store_name:"Lizy Gidy",store_image:"/images/store_pics/lizy_gidy.jpg",products:[{product_name:"Garri",product_image:"/images/products/garri.jpg",product_price:8.99,variations:{"Ijebu Garri":{sizes:{"50lbs":8.99}},"Ghana Garri":{sizes:{"50lbs":8.99}},"Yellow Garri":{sizes:{"50lbs":8.99}}}},{product_name:"Palm Oil",product_image:"/images/products/ola_ola_palm_oil.jpg",product_price:8.99,sizes:{"64 oz":19.99,"32 oz":10.99,"17.6 choleterol free":7.99,35.2:13.99,"105.60":29}},{product_name:"Beans",product_image:"/images/products/beans.jpeg",product_price:12,variations:{"Brown Beans":{sizes:{"2 lbs":12}},"Honey Beans":{sizes:{"2 lbs":12}}}}]},{store_name:"African Carribean Market",store_image:"/images/store_pics/african_carribean_storefront_people.jpg",products:[{product_name:"Palm Oil",product_image:"/images/products/ola_ola_palm_oil.jpg",product_price:8.99,variations:{"Ola-Ola Palm Oil":{sizes:{"1.32 Gallons":8.99,"0.9 Gallons":5.99}},"Omni Red Palm Oil 100% unrefined":{sizes:{"50lbs":8.99}}}},{product_name:"Beans",product_image:"/images/products/beans.jpg",product_price:2.25,variations:{"Black Eyes Peas":{sizes:{"0.5 L":2.25}},"Whole Green Peas":{sizes:{"0.5 L":2.25}},"Pinto Beans":{sizes:{"0.5 L":2.25}},"Red Kidney Beans":{sizes:{"0.5 L":2.25}},"Large Lime Beans":{sizes:{"0.5 L":2.25}}}},{product_name:"Egusi",product_image:"/images/products/egusi.jpg",product_price:9.95,sizes:{"5 Lbs":9.95}},{product_name:"Garri",product_image:"/images/products/garri.jpg",product_price:8.99,variations:{"Ijebu Garri":{sizes:{"50lbs":8.99}},"Ghana Garri":{sizes:{"50lbs":8.99}},"Yellow Garri":{sizes:{"50lbs":8.99}}}}]}],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var l,r=this.stores.entries()[Symbol.iterator]();!(t=(l=r.next()).done);t=!0){var o=l.value,c=Object(s.a)(o,2),d=c[0],m=c[1],u=[];console.log(d),console.log(m);var p=!0,g=!1,h=void 0;try{for(var b,v=m.products.entries()[Symbol.iterator]();!(p=(b=v.next()).done);p=!0){var E=b.value,f=Object(s.a)(E,2),w=f[0],k=f[1];console.log("Inner for loop"),console.log(w),console.log(k.product_name);var O=m.store_name+k.product_name;u.push(i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 mealContainer",key:O},i.a.createElement("div",null,i.a.createElement("div",{style:I},i.a.createElement(y.a,{trigger:i.a.createElement("div",{id:k.id,style:I},i.a.createElement("img",{src:k.product_image,className:"images",style:{width:"100%"},alt:k.id}),i.a.createElement("div",{id:"textbox"},i.a.createElement("p",{className:"alignleft"},k.product_name),i.a.createElement("p",{className:"alignright",style:{color:"green"}},"$",k.product_price))),modal:!0,closeOnDocumentClick:!0,contentStyle:x},i.a.createElement("div",null,k.product_name,i.a.createElement("br",null),"Availability"),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("b",null,i.a.createElement("img",{src:k.product_image,alt:"info",style:{width:"100%",height:"100%",align:"center"}}))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("b",null,"Availabile",i.a.createElement("br",null),"Variations:",i.a.createElement("br",null),"Price:")))),i.a.createElement("span",null,"View Product"),"\xa0|\xa0",i.a.createElement("span",null,"Update Product"),"\xa0|\xa0",i.a.createElement("span",null,"Add To Cart.."),i.a.createElement("hr",null))))))}}catch(_){g=!0,h=_}finally{try{p||null==v.return||v.return()}finally{if(g)throw h}}e.push(i.a.createElement("div",{key:m.store_name},i.a.createElement("hr",null),i.a.createElement("img",{src:m.store_image,className:"images",style:{width:"10%"},alt:m.id}),i.a.createElement("b",null,m.store_name),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row "},u)),i.a.createElement("hr",null)))}}catch(_){a=!0,n=_}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}return i.a.createElement("div",null,i.a.createElement("div",{id:"title"},i.a.createElement("b",null,"Our Products")),e)}}]),t}(n.Component),I={display:"inline-block",width:"100%",height:"100%"},x={maxWidth:"100vw",maxHeight:"100vh",overflow:"scroll"},P=N,T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).meals=[{id:1,label:"Garri",imageSrc:"/images/meal_pics/Garri.jpg",readTime:"2 mins read",cookTime:"2 mins to prepare",intro:"Garri (African cereal) is a populous snack-meal in Western African region. It is made from cassava and can be drink by soaking in cold water or eaten as meal by soaking in hot water till its solid.",ingredients:["Garri","Water","Sugar"],new_ingredient:{Garri:{servings:{quantitiy:1,measurements:"Cup(s)"}},Water:{servings:{quantitiy:1,measurements:"Cup(s)"}},Sugar:{servings:{quantitiy:1,measurements:"Spoon(s)"}}},products:["Garri ","Sugar ","Water "],quantity:[1,2,1],measurements:["Cup(s)","Cup(s)","Spoon(s)"],instructions:["Mix Garri and Sugar in a bowl","Add ice, water and groundnuts as preffered","Enjoy!"],servings:1,display:!1},{id:2,label:"Puff Puff",imageSrc:"/images/meal_pics/puff_puff.jpg",readTime:"4 mins read",cookTime:"80  mins to prepare",intro:" Puff Puff -- A very popular West African street food that's quick and easy to make with different variations. Dangerously delicious and addicting!",ingredients:["Water- 2 Cups","Yeast - 2 and 1/4 teaspoons(1 packet)","Flour- 3 and 1/2 Cups","Sugar- 3/4 Cup"],new_ingredient:{Garri:{servings:{quantitiy:1,measurements:"Cup(s)"}},Water:{servings:{quantitiy:1,measurements:"Cup(s)"}},Sugar:{servings:{quantitiy:1,measurements:"Spoon(s)"}}},products:["Flour ","Sugar ","Yeast ","Water "],quantity:[1,2,1],measurements:["Cup(s)","Cup(s)","Spoon(s)"],instructions:["Mix salt, sugar, water, and yeast . Set aside for 5 minutes.","Add flour and mix.","Let the mixture rise for approximately 1- 2 hours","In a large,sauce pan pour vegetable oil into a pot, until it is at least 3 inches (or about 5 centimeters) high (too little will result in flatter balls), and place on low heat.","Test to make sure the oil is hot enough by putting a \u2018drop\u2019 of batter into the oil. If it is not hot enough, the batter will stay at the bottom of the pot rather than rising to the top.","Using your hands grab a little bit of mixture at time and drop in the oil.","When the oil is hot enough, use a spoon to dish up the batter, and another spoon or spatula to drop it in the oil, sort of in the shape of a ball.","Fry for a few minutes until the bottom side is golden brown.","Turn the ball over and fry for a few more minutes until the other side is golden brown.","Use a large spoon or something like that to take it out of the oil. I usually place them on napkins right away to soak up some of the excess oil.","If desired, you can roll the finished product in table sugar or powdered sugar to make it sweeter"],servings:4,display:!1},{id:3,label:"Jollof Rice",imageSrc:"/images/meal_pics/Jollof.jpg",readTime:"4 mins read",cookTime:"45 mins to prepare",intro:"Jollof rice is a common delicacy that is enjoyed in the Western Africa region.Jollof rice a.k.a \u201cOne pot\u201d in Benachin, is a delicious delicacy that can be enjoyed without the need of a side-dish.  Jollof rice is a good source for carbohydrate, starch, fibers and traces of protein depending on the in the ingredients. Cooking jollof rice is often considered as a work of art due to the many styles and techniques and taste as good as next day left-over. Chop-Chow guarantees one of the best methods in Cooking Jollof rice. Chow!",ingredients:["Rice- 3 Cups","Tomatoes x 6","Onion x 2"],products:["Rice ","Tomatoes ","Onions "],instructions:["Tomato , Onion Tatashe, Rodo Blended in Blender","Vegetable Oil + Palm Oil, Low Heat in Pan","Add onions to Pan","Add Tomato Paste","Add Powdered Ginger, Garlic and Curry","Add Blended Tomatoes mix (If too thick, add water)","Add seasoning, Maggi (Chicken Flavor), Salt","For Jollof Rice, add Bay Leaves."],display:!0},{id:4,label:"Fried Beans",imageSrc:"/images/meal_pics/FriedBeans.jpg",readTime:"4 mins read",cookTime:"60 mins to prepare",intro:"Fried beans is a delicious meal rich in protein, vitamins and fiber. It can serves as alternative for those trying to reduce the intake of meat and animal protein.",ingredients:["Black Eyed Beans x 1 bag(350mL)","Onions x 2","Palm Oil- 2 Cups"],products:["Black Eyed Beans ","Onions ","Palm Oil "],instructions:["Soak beans in water overnight","The next day, chop 1 onion into thin slices, cut the other one into 4 big chunks then pound/grind the pepper.","Rinse the beans and put in a sizeable pot. I rinse it twice.","Pre-cook the sliced onions with a few drops of water to soften them a bit.","When the beans is done, add salt, leave to dry up all the water and transfer the beans to another container.","Now, set a dry clean pot on the stove, pour the palm oil and heat it up till the oil melts (if congealed). Note that you should only heat it up, not bleach the oil. You will know it is hot enough when a piece of onion dropped into the oil sizzles.","Add the precooked onions and stir for a bit.","Add the ground Habanero pepper and stir till everything is heated up very well, at most 2 minutes.","Add the beans and stir for about 2 minutes. Add salt if necessary.","Cover and leave to simmer for about 2 minutes and it's done."],display:!0},{id:5,label:"Roasted Potatoes",imageSrc:"/images/meal_pics/roasted_potatoes.jpg",readTime:"3 mins read",cookTime:"90 mins to prepare",intro:"Delicious Red Roasted Potatoes. Popular in European dishes",ingredients:["Potatoes - 8","Garlic- 6 cloves","Thyme","Oregano","Basil","Parmesan Cheese","Oil","Butter"],products:["Red Potatoes ","Parmesan Cheese ","Thyme ","Oregano ","Basil ","Vegetable Oil ","Butter "],instructions:["Adjust oven rack to lowest position and heat oven to 450 degrees. ","Cut potatoes into quarter chunks","Toss potatoes with oil, salt and pepper chopped garlic, Thyme, Oregano, Basil and then Parmesan Cheese","Arrange, cut side down, on a large lipped cookie sheet or jellyroll pan.","Roast until tender and golden brown, or until desired crispiness about 30-45 minutes","Add butter in between roasting for a savory taste, Transfer to a serving dish when ready."],display:!0}],a.meal_popups=[],a.showIngredients=function(e){var t,n=e.target.innerText;for(t in a.meals)if(a.meals[t].label===n){a.setState({selectedMealIngredients:a.meals[t].ingredients}),a.setState({selectedMeal:a.meals[t]});break}},a.suggestMealToggle=a.suggestMealToggle.bind(Object(p.a)(Object(p.a)(a))),a.updateInstructionsDisplayBaseIndex=a.updateInstructionsDisplayBaseIndex.bind(Object(p.a)(Object(p.a)(a))),a.state={suggestMealPopOver:!1,mealsListed:!1,mealSelected:!1,IngredientsListed:!1,recipes:a.meals,selectedMealIngredients:a.meals[0].new_ingredients,selectedMeal:a.meals[0],showIngredients:{hidden:!0},showProducts:{hidden:!0},mealsLength:a.meals.length,base_index:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"suggestMealToggle",value:function(){this.setState({suggestMealPopOver:!this.state.suggestMealPopOver})}},{key:"showIngredient",value:function(e){console.log("updating popup boolean"),this.meal_popups[e]=!this.meal_popups[e]}},{key:"updateInstructionsDisplayBaseIndex",value:function(e){var t=e.target.innerText,a=(t.match("/^w+[ ]/d  $/"),t.slice(6,7)),n=Number(a);this.setState({base_index:3*n})}},{key:"render",value:function(){var e=this,t=[],a=!0,n=!1,l=void 0;try{for(var r,o=function(){var a=r.value,n=(d=Object(s.a)(a,2))[0],l=d[1];0;var o=l.instructions.map(function(e){return i.a.createElement("li",{key:e}," ",e," ")});m=[];var c=l.instructions.length,p=l.ingredients.map(function(e){return i.a.createElement("li",{key:e}," ",e," ")});for(u=0;u<c/3;u++)m.push(i.a.createElement("button",{key:u,onClick:e.updateInstructionsDisplayBaseIndex},"Slide ",u,"  "));e.meal_popups.push(!1),t.push(i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 mealContainer",key:l.id},i.a.createElement("div",null,i.a.createElement("div",{style:G,onClick:function(){e.meal_popups[n]=!e.meal_popups[n];var t=document.getElementById(l.id),a=document.getElementById(l.id+"products");e.meal_popups[n]?(t.style.display="block",a.style.display="block"):(t.style.display="none",a.style.display="none")}},i.a.createElement("img",{src:l.imageSrc,className:"images",style:{width:"100%"},alt:l.id}),i.a.createElement("div",{style:{color:"black"}}," ",i.a.createElement("b",null," ",l.label," | ",l.cookTime,"  "),"| ",i.a.createElement("span",{style:{color:"grey"}}," View Details")))),i.a.createElement(y.a,{trigger:i.a.createElement("div",{id:l.id,style:{display:"none"}},l.intro,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{style:{backgroundColor:"orange"}},"View Steps"),i.a.createElement("br",null)),modal:!0,closeOnDocumentClick:!0,contentStyle:M},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",null,i.a.createElement("b",null,"Ingredients")),i.a.createElement("div",{className:"col align-items-center"},i.a.createElement("ol",null,p))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("b",null,i.a.createElement("div",{className:"col"},l.readTime,i.a.createElement("br",null),l.cookTime))),i.a.createElement("div",{id:"mealPrepChunk"},o[e.state.base_index+0],o[e.state.base_index+1],o[e.state.base_index+2])),i.a.createElement("br",null)),i.a.createElement("hr",null),i.a.createElement("span",null,"Overview"),"\xa0|\xa0",i.a.createElement("span",null,"Kitchen accessories for this meal"),"\xa0|\xa0",i.a.createElement("span",null,"Add To Cart.."),i.a.createElement("br",null),m,i.a.createElement("img",{src:l.imageSrc,alt:"info",style:{width:"100%",height:"100%",align:"center"}}),i.a.createElement("hr",null)),i.a.createElement("div",{id:l.id+"products",style:{display:"none"}},i.a.createElement("b",null,"Ingredients"),i.a.createElement("br",null),l.products)))},c=this.meals.entries()[Symbol.iterator]();!(a=(r=c.next()).done);a=!0){var d,m,u;o()}}catch(p){n=!0,l=p}finally{try{a||null==c.return||c.return()}finally{if(n)throw l}}return i.a.createElement("div",null,i.a.createElement("div",{className:"w3-bar w3-dark-grey w3-green "},i.a.createElement(v.b,{to:"/v2",className:"w3-bar-item w3-button w3-text-orange w3-hover-orange w3-mobile"},"CC"),i.a.createElement(v.b,{to:"/v2",className:"w3-bar-item w3-button w3-hover-orange w3-mobile"},"Recipes"),i.a.createElement(v.b,{to:"/grocery",className:"w3-bar-item w3-button w3-hover-orange w3-mobile"},"Grocery List"),i.a.createElement("div",{className:"w3-dropdown-hover w3-mobile"},i.a.createElement("button",{className:"w3-button w3-hover-orange w3-mobile"}," Shop ",i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{className:"w3-dropdown-content w3-bar-block w3-card-4 "},i.a.createElement(v.b,{to:"/products",className:"w3-bar-item w3-button w3-hover-orange w3-mobile"},"Food Products"),i.a.createElement(v.b,{to:"/products",className:"w3-bar-item w3-button w3-hover-orange w3-mobile"},"Kitchen Products"),i.a.createElement(v.b,{to:"/products",className:"w3-bar-item w3-button w3-hover-orange w3-mobile"},"Other Household Items"))),i.a.createElement("span",{className:"w3-bar-item w3-button w3-text-grey w3-hover-orange w3-mobile"}," Stats")),i.a.createElement(g.Typeahead,{options:this.meals,placeholder:"Find Meals (and Ingredients) here..",id:"typeahead"}),i.a.createElement(E.c,null,i.a.createElement(E.a,{exact:!0,path:"/",render:function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row "},t))}}),i.a.createElement(E.a,{path:"/v1",render:function(t){return i.a.createElement("div",{className:"container"},i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("b",null,"Meals"),i.a.createElement(j,{recipes:e.state.recipes,showIngredients:e.showIngredients,selectedMeal:e.state.selectedMeal}),i.a.createElement("span",null,"+"),i.a.createElement("input",{placeholder:"Suggest Meal"}),"\xa0",i.a.createElement("button",null,"Submit ",i.a.createElement("span",{id:"Popover1",onMouseOver:e.suggestMealToggle,onMouseOut:e.suggestMealToggle},i.a.createElement("img",{src:"/images/info_icon.png",alt:"info",style:{width:"13px",height:"13px"}})," "))),i.a.createElement("div",{className:"col-sm"},i.a.createElement("b",null,"Recipe Contents"),i.a.createElement(_,{selectedMeal:e.state.selectedMeal})),i.a.createElement("div",{className:"col-sm"},i.a.createElement("b",null,"Ingredients"),i.a.createElement(C,{selectedMealIngredients:e.state.selectedMealIngredients,selectedMeal:e.state.selectedMeal})),i.a.createElement(h.a,{placement:"auto",isOpen:e.state.suggestMealPopOver,target:"Popover1",toggle:e.suggestMealToggle},i.a.createElement(b.a,null,i.a.createElement("div",{className:"payback-disclaimer"},"Suggestions by Guest Users are recorded, but do not change the publicly displayed Meals.")))))}}),i.a.createElement(E.a,{path:"/v2",render:function(e){return i.a.createElement("div",null,i.a.createElement("div",{id:"title"},i.a.createElement("b",null,"Meals")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row "},t)))}}),i.a.createElement(E.a,{path:"/grocery",render:function(e){return i.a.createElement("span",null,i.a.createElement("b",null,"Your Grocery List"))}}),i.a.createElement(E.a,{path:"/products",render:function(e){return i.a.createElement(P,null)}})))}}]),t}(n.Component),G={display:"inline-block",width:"100%",height:"100%"},M={maxWidth:"100vw",maxHeight:"100vh",overflow:"scroll"},S=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v.a,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.dd58efb4.chunk.js.map