           // <div class="product_card">
            //     <img src="./img/product-1.jpeg">
            //     <br></br>
            //     <span>遥控开关</span>
            //     <br>
            //     <span>价格:</span>
            //     <span>99</span>
            //     <span>¥</span>
            //     <br>
            //     <span>销量:</span>
            //     <span>199</span>
            //     <br>
            //     <span>库存:</span>
            //     <span>499</span>
            //     <br>
            //     <button>加入购物车</button>
            // </div>"
    
            function addnewcard(card_id){
                // alert("hello");
            
                // var text=document.createElement("big"); 
                // text.innerHTML="";
                var text="<div class='product_card newcard'></div>";
                $(".img_main").append(text);
                $(".newcard").attr("class","product_card "+"card"+card_id)
                return card_id;
    
               
            }
            function addProduct1(card_id){
                // 添加卡片
                addnewcard(card_id);
                //添加内容
                var text1="<img>";
                var text2="<br>";
                var text3="<span>遥控开关</span>";
                var text4="<br>";
                var text5="<span>价格:</span>";
                var text6="<span>99</span>";
                var text7="<span>¥</span>";
                var text8="<br>";
                var text9="<span>销量:</span>";
                var text10="<span>199</span>";
                var text11="<br>";
                var text12="<span>库存:</span>";
                var text13="<span>499</span>";
                var text14="<br>";
                var text15="<button>加入购物车</button>";
                $(".card"+card_id).append(text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15);
                $(".card"+card_id+" img").attr("src","./img/product-1.jpeg")
            }
            function addProduct(card_id,img_url,product_name,prise,stock,sales_volume){
                // 添加卡片
                addnewcard(card_id);
                //添加内容
                var text1="<img>";
                var text2="<br>";
                var text3="<span>"+product_name+"</span>";
                var text4="<br>";
                var text5="<span>价格:</span>";
                var text6="<span>"+prise+"</span>";
                var text7="<span>¥</span>";
                var text8="<br>";
                var text9="<span>销量:</span>";
                var text10="<span>"+sales_volume+"</span>";
                var text11="<br>";
                var text12="<span>库存:</span>";
                var text13="<span>"+stock+"</span>";
                var text14="<br>";
                var text15="<button>加入购物车</button>";
                $(".card"+card_id).append(text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15);
                $(".card"+card_id+" img").attr("src",img_url)
            }
    
            function show_product(number){
    
                for (var i=0;i<number;i++)
                { 
                    console.log(i);
                    addProduct1(i);
                }
            
    
            }
    
            $(function(){
                var title=$(".second_title").text();
                switch(title){
                    case "时下流行":
                    show_product(1);
                }
            });
           
            // var elements = "<div><img><br></br><span>遥控开关</span><br><span>价格:</span><span>99</span><span>¥</span><br><span>销量:</span><span>199</span><br><span>库存:</span><span>499</span><br><button>加入购物车</button></div>";
            //     function create() {
            //     return $(elements);
            //     }
            //     $(".newcard").prepend(create());
                    
     
            $(".in_aside a").click(
    
            function(){
            $(".second_title").text($(".in_aside a:hover").text())
            
            }
            );