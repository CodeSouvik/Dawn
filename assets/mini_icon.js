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
        

                document.head.insertAdjacentHTML("afterbegin","<style> .btnL { display: inline-block; vertical-align: middle; cursor: pointer; border: 1px solid transparent; font-size: calc(((var(--font-size-base) - 2) / (var(--font-size-base))) * 1em); } </style>");
                    myArray.reverse().forEach(function (value) {
                        if(document.getElementById("mo_openid_login")){
                        if(value == "google"){
                            document.getElementById("mo_openid_login").insertAdjacentHTML("afterbegin","<a rel=\"nofollow\" href=\"https://shop.miniorange.com/social-login/openidcallback/"+value+"?shop=devecommercestore.myshopify.com&hosts="+window.location.host+"&redirect_url="+redirect_url+"\" style=\"display: -webkit-inline-box;text-decoration: none;background: rgb(255,255,255)!important; background:linear-gradient(90deg, rgba(255,255,255,1) 38px, rgb(79, 113, 232) 5%) !important;width: 200px !important;padding-top:6px !important;padding-bottom:6px !important;margin-bottom: 4px !important;border-radius: 4px !important;border-color: rgba(79, 113, 232, 1);border-bottom-width: thin;\" class=\"btnL btn-mo btn-block btn-social btn-google btn-custom-dec login-button\"> <i style=\"padding-top:6px !important;border-right:none;\" class=\"mofa\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 70 70\" style=\"padding-left: 8%;\"><defs><path id=\"a\" d=\"M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z\"></path></defs><clipPath id=\"b\"><use xlink:href=\"#a\" overflow=\"visible\"></use></clipPath><path clip-path=\"url(#b)\" fill=\"#FBBC05\" d=\"M0 37V11l17 13z\"></path><path clip-path=\"url(#b)\" fill=\"#EA4335\" d=\"M0 11l17 13 7-6.1L48 14V0H0z\"></path><path clip-path=\"url(#b)\" fill=\"#34A853\" d=\"M0 37l30-23 7.9 1L48 0v48H0z\"></path><path clip-path=\"url(#b)\" fill=\"#4285F4\" d=\"M48 48L17 24l-4-3 35-10z\"></path></svg></i><span style=\"color:#ffffff;\"> Sign In Google</span></a><br>")
                        }else if(value == "kakao" || value == "naver" || value == "yahoojapan"){
                            document.getElementById("mo_openid_login").insertAdjacentHTML("afterbegin","<a rel=\"nofollow\" href=\"https://shop.miniorange.com/social-login/openidcallback/"+value+"?shop=devecommercestore.myshopify.com&hosts="+window.location.host+"\" style=\"display: -webkit-inline-box;text-decoration: none;width: 200px !important;padding-top:6px !important;padding-bottom:6px !important;margin-bottom: 4px !important;border-radius: 4px !important;\" class=\"btnL btn-mo btn-block btn-social btn-"+value+" btn-custom-dec login-button\"> <img class=\"mo_login_button\" style=\"padding-top: 0px;\" src=\"https://shop.miniorange.com/social-login/img/"+value+"s.png\"> Sign In "+value[0].toUpperCase()+value.slice(1)+"</a><br>")
                        }else{
                            var icons = value;
                            var css_icon = value;
                                if(value == "wechat"){
                                    icons = "weixin";
                                    css_icon = "wechat";
                                }else if(value == "windowslive"){
                                    icons = "windows";
                                    css_icon = "microsoft";
                                }else if(value == "vkontakte"){
                                    icons = "vk";
                                    css_icon = "vk";
                                }else if(value == "amazon"){
                                    icons = "amazon";
                                    css_icon = "soundcloud";
                                }
                                document.getElementById("mo_openid_login").insertAdjacentHTML("afterbegin","<a rel=\"nofollow\" href=\"https://shop.miniorange.com/social-login/openidcallback/"+value+"?shop=devecommercestore.myshopify.com&hosts="+window.location.host+"&redirect_url="+redirect_url+"\" style=\"display: -webkit-inline-box;text-decoration: none;width: 200px !important;padding-top:6px !important;padding-bottom:6px !important;margin-bottom: 4px !important;border-radius: 4px !important;\" class=\"btnL btn-mo btn-block btn-social btn-"+css_icon+" btn-custom-dec login-button\"> <i style=\"padding-top:0px !important\" class=\"fab fa-"+icons+"\"></i> Sign In "+value[0].toUpperCase()+value.slice(1)+"</a><br>")
                            }
                        }
                        });
 });