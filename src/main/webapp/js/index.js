
    
        //添加商品卡片
        function addnewcard(card_id){

            var text="<div class='product_card newcard'></div>";
            $(".img_main").append(text);
            $(".newcard").attr("class","product_card "+"card"+card_id)
            return card_id;

           
        }
        //  //在卡片里面添加数据
        // function addProduct(card_id){
        //     // 添加卡片
        //     addnewcard(card_id);
           
        //     var text1="<img>";
        //     var text2="<br>";
        //     var text3="<span>遥控开关</span>";
        //     var text4="<br>";
        //     var text5="<span>价格:</span>";
        //     var text6="<span>99</span>";
        //     var text7="<span>¥</span>";
        //     var text8="<br>";
        //     var text9="<span>销量:</span>";
        //     var text10="<span>199</span>";
        //     var text11="<br>";
        //     var text12="<span>库存:</span>";
        //     var text13="<span>499</span>";
        //     var text14="<br>";
        //     var text15="<button>加入购物车</button>";
        //     $(".card"+card_id).prepend(text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15);
        //     $(".card"+card_id+" img").attr("src","./img/product-1.jpeg")
        // }
        //  //在卡片里面添加 并且改变
        // function addProduct1(card_id,img_url,product_name,prise,stock,sales_volume){
        //     // 添加卡片
        //     addnewcard(card_id);
        //     //添加内容
        //     var text1="<img>";
        //     var text2="<br>";
        //     var text3="<span>"+product_name+"</span>";
        //     var text4="<br>";
        //     var text5="<span>价格:</span>";
        //     var text6="<span>"+prise+"</span>";
        //     var text7="<span>¥</span>";
        //     var text8="<br>";
        //     var text9="<span>销量:</span>";
        //     var text10="<span>"+sales_volume+"</span>";
        //     var text11="<br>";
        //     var text12="<span>库存:</span>";
        //     var text13="<span>"+stock+"</span>";
        //     var text14="<br>";
        //     var text15="<button>加入购物车</button>";
        //     $(".card"+card_id).prepend(text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15);
        //     $(".card"+card_id+" img").attr("src",img_url)
        // }

 

        

        //更剧json数组动态展示商品
        function addProduct3(card_id,img_url,product_name,prise,stock,sales_volume){
            // card_id,img_url,product_name,prise,stock,sales_volume
            // $.ajax({
            //         url: "./findallProduct",
            //         method:"get"
            //         }).done(function(data) {
            //             console.log(data);
            //         })
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
            $(".card"+card_id).prepend(text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15);
            $(".card"+card_id+" img").attr("src",img_url)
            var onclick="addtoCars("+card_id+")";
            $(".card"+card_id+" button").attr("onclick",onclick);
        }

        //添加到购物车执行的函数
        function addtoCars(product_id){
             // console.log("产品ID: "+product_id);
            $(localStorage)
            if(false){
                alert("您还没有登录，请登录后在将商品加入购物车哦！");
                $(location).attr("href","./pages/login.html")
            }else{
                console.log("产品ID: "+product_id);
                alert("商品已加入购物车～")
                addtoCarOnServes(product_id,user_phone);
            }

        }

        function addtoCarOnServes(product_id,user_phone){
            $.ajax({
                url:"",
                type:"post",
                success:function(){
                    alert("商品已加入购物车～")
                }
            })

        }
        //根据分类展示商品
        function show_product(kinds){

                $.ajax({
                        url: "http://localhost:8080/findallProduct?kinds="+kinds,
                        dataType: 'json',
                        type:"get",
                        async : true,
                        success:function(data){
                            for(var i=0;i<=data.length;i++){
                            addProduct3(data[i].product_id,data[i].img_url,data[i].product_name,data[i].prise,data[i].stock,data[i].sales_volume);
                            }
                        }
                        
                    });


        }
        //根据二级标题内容展示商品
        function show_product_list(){
                    //根据二级标题内容展示商品
                    var title=$(".second_title").text();
                    var kinds;
                        switch(title){
                            case "时下流行":
                                kinds=1;break;
                            case "时尚服装":
                                kinds=2;break;
                            case "休闲食品":
                                kinds=3;break;
                            case "数码产品":
                                kinds=4;break;
                            case "运动产品":
                                kinds=5;break;
                            default:
                                kinds=6;break;
                        }
                    show_product(kinds)
        }

            //切换二级标题展示商品
            $(".in_aside a").click(
                function(){  //动态 根据二级标题内容展示商品
                    $(".second_title").text($(".in_aside a:hover").text())
                    $(".img_main").empty();
                    show_product_list()
                }
            );

            // //添加到购物车

            // $(".img_main").on("click",".addtoCar",
            //     function(){

            //         alert("hello")

            //     }
            // )
            


            //显示or隐藏购物车
            function showCar(){
                        
                if($(".carBorder").css("visibility")=="hidden"){
                    $(".carBorder").css('visibility',"visible")
                }else{
                    $(".carBorder").css('visibility',"hidden")
                }
    
            }

            function loadCar(data){
                  //根据登陆用户开始加载购物车商品
                  //先清空购物车中旧的内容 
                  $(".add_node").empty();

                  //添加表格标题
                  var title="<tr><th>图片</th><th>产品名称</th><th>价格</th><th>数量</th><th><input type='radio' onclick='select_All()'></th></tr>"
                    $(".add_node").append(title)

                  for(var i=0;i<data.length;i++){
                    var car_desc="<tr class='newloadCar'><td><img src='"+data[i].img_url+"'></td><td>"+data[i].product_name+"</td><td>"+data[i].product_name+"</td><td>"+1+"</td><td><input type='radio'></td></tr>";
                    $(".add_node").append(car_desc)
                  }
                     
            }
                

            //用户点击car logo 执行showCar  
            $("#car").click(
                function(){
                    //加载购物车中的商品
                    var data=[{"desc":"哇哈哈AD钙","img_url":"./img/product-adg.jpg","kind_id":"3","prise":"8","product_id":"14","product_name":"哇哈哈AD钙","sales_volume":"1","stock":"200"},{"desc":"小米公司的一款充电宝","img_url":"./img/product-xmcdb.jpg","kind_id":"4","prise":"49","product_id":"1","product_name":"小米充电宝","sales_volume":"0","stock":"99"},{"desc":"苹果公司2020手机","img_url":"./img/product-iphone12.jpg","kind_id":"4","prise":"5999","product_id":"2","product_name":"iPhone12","sales_volume":"0","stock":"66"},{"img_url":"./img/product-kappa.jpg","kind_id":"2","prise":"399","product_id":"3","product_name":"Kapaa服装","sales_volume":"0"},{"desc":"饮料","img_url":"./img/product-3.jpeg","kind_id":"3","prise":"5","product_id":"4","product_name":"旺仔牛奶","sales_volume":"0","stock":"1999"},{"desc":"小米到一款充电宝","img_url":"./img/product-xmcdb.jpg","kind_id":"4","prise":"49","product_id":"8","product_name":"MageSage磁性充电宝","sales_volume":"0","stock":"99"},{"desc":"饮料","img_url":"./img/product-yykx.jpg","kind_id":"3","prise":"4","product_id":"12","product_name":"营养快线","sales_volume":"0","stock":"200"},{"desc":"饮料","img_url":"./img/product-yykx.jpg","kind_id":"3","prise":"12","product_id":"13","product_name":"大瓶营养快线","sales_volume":"0","stock":"200"},{"desc":"剪指甲","img_url":"./img/product-jzj.jpg","kind_id":"6","prise":"5","product_id":"15","product_name":"剪指甲","sales_volume":"0","stock":"200"},{"desc":"有尼克斯","img_url":"./img/product-ymq.jpg","kind_id":"5","prise":"99","product_id":"17","product_name":"羽毛球","sales_volume":"0","stock":"199"}];
                    loadCar(data)

                    //展示购物车
                    showCar();
                }
            )


            // 清空购物车
            function clear_Car(){
                $(".add_node").empty();

                //将服务器端购物车数据清除
            }
            //选中全部商品
            function select_All(){
                if($(".add_node input").attr("checked")){
                    $(".add_node input").attr("checked",false)
                    
                }else{
                    $(".add_node input").attr("checked",true)
                }
                
            }
                //页面初始化时 根据二级标题内容展示商品
            $(function(){
            
                $.ajax({
                    url: "http://localhost:8080/findallProduct",
                    dataType: 'json',
                    type:"get",
                    async : true,
                    success:function(data){
                        console.log(data);
                        for(var i=0;i<=data.length;i++){
                        addProduct3(data[i].product_id,data[i].img_url,data[i].product_name,data[i].prise,data[i].stock,data[i].sales_volume);
                            
                        }
                    }
                    
                });

                var loginStatus=true;

                if(loginStatus){
                    $(".notlogin").hide();
                }else{  
                    $(".islogin").hide();
                }

                $(".exit").click(

                   function(){
                       loginStatus=false;
                        if(loginStatus){
                        $(".notlogin").hide();
                        $(".islogin").show();
                    }else{  
                        $(".islogin").hide();
                        $(".notlogin").show();
                    }
                   }
                )

                

        
            });


          

       