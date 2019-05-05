import React, { Component } from 'react';
import Popup from "reactjs-popup";

class ProductSection extends Component {

    storeCollection = [
    {
        store_name: "Lizy Gidy",
        store_image: '/images/store_pics/lizy_gidy.jpg',
        products:[{
            product_name: "Garri",
            product_image: '/images/products/garri.jpg',
            product_price: 8.99,
            variations:["Ijebu Garri", "Ghana Garri","Yellow Garri"],
            sizes:["50lbs"]
        },{
        product_name:"Palm Oil",
        product_image: '/images/products/ola_ola_palm_oil.jpg',
        product_price: 8.99,
        sizes:["64 oz","32 oz","17.6 choleterol free", "35.2","105.60"],
        respective_prices:[ 19.99,10.99,7.99,13.99,29.00]
        },{
        product_name:"Beans",
        product_image: '/images/products/beans.jpeg',
        product_price: 12.00,
        variations:["Brown Beans","Honey Beans"],
        sizes:["2 lbs"],
        price_per_ounce: 3.2
        }
    ]},
    {
        store_name:"African Carribean Market",
        store_image: '/images/store_pics/african_carribean_storefront_people.jpg',
        products:[{
            product_name:"Palm Oil",
            product_image: '/images/products/ola_ola_palm_oil.jpg',
            product_price: 8.99,
            variations:["Ola-Ola Palm Oil","Omni Red Palm Oil 100% unrefined"],
            sizes:["1.32 Gallons","0.9 Gallons","50lbs" ],
            price_per_gallon: 3.00,
            price_per_pound: 0.30

        },{
            product_name:"Beans",
            product_image: '/images/products/beans.jpg',
            product_price: 2.25,
            variations:[ "Black Eyes Peas","Whole Green Peas","Pinto Beans","Red Kidney Beans","Large Lime Beans"],
            sizes: "0.5 L"       
        },{
            product_name:"Egusi",
            product_image: '/images/products/egusi.jpg',
            product_price: 9.95,
            sizes:"5 Lbs"
        },{
        product_name:"Garri",
        product_image: '/images/products/garri.jpg',
        product_price: 8.99,
        variations:["Ijebu Garri","Ghana Garri","Yellow Garri"],
        sizes:"50lbs"
        }]
    }     
]

        render() {
            var store_products = []
            for (const  [index, value] of this.storeCollection.entries()){
                var productsMenu = []
                // console.log(index);
                // console.log(value);

                for (const [storeProductsIndex, productValue] of value.products.entries()) {
                    // console.log("Inner for loop");
                    //const element = array[index];
                    // console.log(storeProductsIndex);
                    // console.log(productValue.product_name);
                    //productsMenu.push(productValue.product_name)
                    // check for if product has variations

                    //productsMenu.push(productValue.product_name)
                    var key = value.store_name+productValue.product_name
                    productsMenu.push(
                        <div className="col-sm-12 col-md-6 col-lg-4 mealContainer"  key = {key} >
                            <div>
                                <div style={containerStyle}>
                                    
                                       
                                        <Popup 
                    trigger={
                        <div id = {productValue.id} style={containerStyle}>
                        <img src={productValue.product_image} className="images" style={{width:"100%"}} alt={productValue.id}></img>
                                    <div id="textbox">
                                        <p className="alignleft">{productValue.product_name}</p>
                                        <p className="alignright"  style={{color: "green"}}>${productValue.product_price}</p>
                                    </div>
                        {/* <button style={{backgroundColor: "orange" }}>View Steps</button>   */}
 
                        </div> 
                    } modal closeOnDocumentClick contentStyle={contentStyle}>
                    {/* Inside Pop - up */}
                    <div>
                    {productValue.product_name}
                    <br></br>
                    Availability
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6"><b>
                            <img src={productValue.product_image} alt='info' style={{ width:"100%", height:"100%", align:"center"}}></img>
                                {/* <div className="col"></div> */}
                                </b>
                            </div> 
                            <div className="col-sm-6"><b>
                                {/* <div className="col">{productValue.product_price}</div> */}
                                {/* <div className="col">{productValue.sizes}</div> */}
                                Availabile<br></br>
                                Variations:<br></br>
                                Price:
                                </b>
                            </div> 
                        </div>
                    </div>

                    <span>View Product</span>&nbsp;|&nbsp;<span>Update Product</span>&nbsp;|&nbsp;<span>Add To Cart..</span>
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
                                    </div>
                                </div>
                            </div>
                    )

                }

                store_products.push(
                    <div key={value.store_name}>
                        <hr></hr>
                        <img src={value.store_image} className="images" style={{width:"10%"}} alt={value.id}></img>
                        <b>{value.store_name}</b>

                            <br></br>
                        <div className="container">
                            
                           <div className="row ">
                           {productsMenu}
                           </div>
                       </div>
                        <hr></hr>
                    </div>
                )


            }



            return (
                <div>                    
                    <div id="title"><b>Our Products</b></div>
                    {store_products}
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



export default ProductSection;