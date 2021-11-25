$(document).ready(function(){

    console.log("Loading JS functionality for main product page");

    var variantidServ;
    var variantidProd;
    var servQuant;
    var prodQuant;
    var lineitem;
    var price;
    var totalprice;
    var variantidGiftCard;
    var giftcardThreshold;
    var gftFlag=false;

    variantidServ= $('#services').val();
    $('#services').change(function(){
      variantidServ= $('#services option:selected').val();
      return variantidServ;
    });
    servQuant = $("#associatedServicesQuantity").on("change paste keyup", function() {
    servQuant=($(this).val()); 
    return servQuant;
    });
    if(String(servQuant)=="[object Object]"){
    servQuant = $('#associatedServicesQuantity').val();
    }

    variantidProd=  $("#addtocart").val();
    prodQuant=$("#prodQuantity").on("change paste keyup", function() {
      prodQuant=($(this).val()); 
      return prodQuant;
    });
    if(String(prodQuant)=="[object Object]"){
      prodQuant = $('#prodQuantity').val();
    }

    //fetching data from line item field
    lineitem=$("#engraving").on("change paste keyup", function() {
    lineitem=($(this).val()); 
    return lineitem;
    });
    if(String(lineitem)=="[object Object]"){
    lineitem = $('#engraving').val();
    }

    //Getting gft card data
    price=$('#productPrice').text().replace("Rs.","").replace(",","").replace(".00","").replace("value=","").replace(" ","");
    variantidGiftCard=$('#gftcardvariantid').text();
    giftcardThreshold=$('#gftcardvariantlimit').text();
    


    $('#checkid').click(function(){
        console.log(variantidProd);
        console.log(variantidServ);
        console.log(lineitem);  
      });



      $('#addtocartproduct').click(function(){
        console.log(variantidProd);
        if(variantidGiftCard!="")
        {
          totalprice=parseInt(prodQuant)*parseInt(price);
          if(totalprice >= giftcardThreshold){
          gftFlag=true;
          }
          console.log  (gftFlag);  
        }
        else
        {
          gftFlag=false;
        }
        if(gftFlag)
        {
            if(variantidServ==0)
            {
              fetch('/cart/add.js', {
              method: "post",
              headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
  
                    items: [
                          {
                            id: variantidGiftCard,
                            quantity: '1'
                            
                            },
  
                            {
                            id: variantidProd,
                            quantity: prodQuant,
                            properties: {
                              'Engraving ': lineitem
                            }
                          
                            
                        }
                    ]
                }),
                success: alert(prodQuant + " Product Added" + "\n" +"0 Service Added" )
              })
              .then(response => {
                console.log(response.json()) ;
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            }
            else
            {
              fetch('/cart/add.js', {
              method: "post",
              headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
  
                    items: [
                        {
                            id: variantidGiftCard,
                            quantity: '1'
                            
                            },
                        {
                            id: variantidServ,
                            quantity: servQuant
                            
                        },
                        {
                            id: variantidProd,
                            quantity: prodQuant,
                            properties: {
                              'Engraving': lineitem
                            }
                        }
                    ]
                }),
                success: alert(prodQuant + " Product Added" + "\n" +servQuant +" Service Added" )
              })
              .then(response => {
                console.log(response.json()) ;
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            }
        }
        else
        {
          if(variantidServ==0)
            {
              fetch('/cart/add.js', {
              method: "post",
              headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
  
                    items: [
                            {
                            id: variantidProd,
                            quantity: prodQuant,
                            properties: {
                              'Engraving ': lineitem
                            }
                          
                            
                        }
                    ]
                }),
                success: alert(prodQuant + " Product Added" + "\n" +"0 Service Added" )
              })
              .then(response => {
                console.log(response.json()) ;
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            }
            else
            {
              fetch('/cart/add.js', {
              method: "post",
              headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
  
                    items: [
                        {
                            id: variantidServ,
                            quantity: servQuant
                            
                        },
                        {
                            id: variantidProd,
                            quantity: prodQuant,
                            properties: {
                              'Engraving': lineitem
                            }
                        }
                    ]
                }),
                success: alert(prodQuant + " Product Added" + "\n" +servQuant +" Service Added" )
              })
              .then(response => {
                console.log(response.json()) ;
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            }
        }
        
       });


    console.log("mainproduct finished")

});





