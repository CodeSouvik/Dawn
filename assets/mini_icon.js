var myArray = ["facebook","google","twitter","linkedin"];
console.log(["facebook","google","twitter","linkedin"]);let redirect_url = "";if(true){ const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const device = urlParams.get("device");
            if(urlParams.get("checkout_url")){
                redirect_url = urlParams.get("checkout_url");
            }else{
                redirect_url = urlParams.get("redirect_url");
            }
            const application = urlParams.get("application");
            console.log(device);
            if(device == "mobile" && application != null){
                window.location.href = "https://shop.miniorange.com/social-login/openidcallback/"+application+"?state="+device+"&shop=devecommercestore.myshopify.com&hosts="+window.location.host+"";
            } };

        window.addEventListener("load", (event) => { 

            if(document.getElementById("mo_openid_login")){
                document.getElementById("mo_openid_login").insertAdjacentHTML("beforebegin", "<div id=\"mo_openid_login\"></div>");
            }else if("beforebegin" == 1){

            }else if(document.getElementById("customer_login")){
                document.getElementById("customer_login").insertAdjacentHTML("beforebegin", "<center><div id=\"mo_openid_login\"></div></center>");
            }else if(document.getElementById("RegisterForm")){
                document.getElementById("RegisterForm").insertAdjacentHTML("beforebegin", "<center><div id=\"mo_openid_login\"></div></center>");
            }
                    var logout_redirect="";
                    var logout_redirect_enable="";
                    if(document.getElementById("customer_logout_link") && logout_redirect_enable==1){
                    document.getElementById("customer_logout_link").setAttribute("onClick", "mo_logout_redirect()");
                }
                    function mo_logout_redirect(){
                    var b=window.open("https://devecommercestore.myshopify.com"+logout_redirect);
                    wait(200);
                    var a=window.open("", "_self", "").close();
                }
                    function wait(ms){
                    var start = new Date().getTime();
                    var end = start;
                    while(end < start + ms) {
                        end = new Date().getTime();
                    }
                }

                document.head.insertAdjacentHTML("afterbegin","<link rel=\"stylesheet\" type=\"text/css\" href=\"https://shop.miniorange.com/social-login/css/bootstrap-social.css\">");
                document.head.insertAdjacentHTML("afterbegin","<link rel=\"stylesheet\" href=\"https://pro.fontawesome.com/releases/v5.10.0/css/all.css\" integrity=\"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p\" crossorigin=\"anonymous\"/>");
        

                    myArray.reverse().forEach(function (value) {
                        if(document.getElementById("mo_openid_login")){
                        document.getElementById("mo_openid_login").insertAdjacentHTML("afterbegin","<a href=\"https://shop.miniorange.com/social-login/openidcallback/"+value+"?shop=devecommercestore.myshopify.com&hosts="+window.location.host+"\" style=\"display: inline;\" ><img class=\"mo_login_icon_preview btn-"+value+"\" id=\"mo_login_icon_preview_"+value+"\" src=\"https://shop.miniorange.com/social-login/img/"+value+".png\" style=\"display: inline; margin-left: 0px; height: 35px; width: 35px; border-radius: 999px; margin-left: 4px; \"></a>");
                    }
                    });
 });