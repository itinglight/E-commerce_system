package com.itinglight.javaee_demo.controller;
import com.alibaba.fastjson.JSON;
import com.itinglight.javaee_demo.entity.Product;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/findallProduct")
public class queryProduct extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json;charset=utf-8");
        /* 允许跨域的主机地址 */
        resp.setHeader("Access-Control-Allow-Origin", "*");
        /* 允许跨域的请求方法GET, POST, HEAD 等 */
        resp.setHeader("Access-Control-Allow-Methods", "*");
        /* 重新预检验跨域的缓存时间 (s) */
        resp.setHeader("Access-Control-Max-Age", "4200");
        /* 允许跨域的请求头 */
        resp.setHeader("Access-Control-Allow-Headers", "*");
        /* 是否携带cookie */
        resp.setHeader("Access-Control-Allow-Credentials", "true");




        String kinds=req.getParameter("kinds");
        String sql="select * from product where product.kind_id="+kinds+";";
        if(kinds==null){
            sql="select * from product order by sales_volume DESC ;";
        }


        System.out.println(kinds);

        List<Product> productList = new ArrayList<Product>();

//        Product product = new Product();
//        product.setProduct_id("1");
//        product.setProduct_name("旺仔牛奶");
//        product.setPrise("5");
//        product.setImg_url("./img/product-3.jpeg");
//        product.setKind_id("2");
//        product.setStock("200");
//        product.setSales_volume("99");
//        productList.add(product);
//
//        Product product1 = new Product();
//        product1.setProduct_id("2");
//        product1.setProduct_name("哇哈哈");
//        product1.setPrise("5");
//        product1.setImg_url("./img/product-2.jpeg");
//        product1.setKind_id("2");
//        product1.setStock("200");
//        product1.setSales_volume("199");
//        productList.add(product1);

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url="jdbc:mysql://localhost:3306/shopping";
            String user="root";
            String password="123";
            Connection connection = DriverManager.getConnection(url,user,password);


            System.out.println(sql);
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                Product product = new Product();
                product.setProduct_id(resultSet.getString(1));
                product.setProduct_name(resultSet.getString(2));
                product.setKind_id(resultSet.getString(3));
                product.setImg_url(resultSet.getString(4));
                product.setDesc(resultSet.getString(5));
                product.setPrise(resultSet.getString(6));
                product.setStock(resultSet.getString(7));
                product.setSales_volume(resultSet.getString(8));
                productList.add(product);
            }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }


        String json = JSON.toJSONString(productList);
        System.out.println(json);
        OutputStream outputStream = resp.getOutputStream();
        outputStream.write(json.getBytes(StandardCharsets.UTF_8));

    }
}