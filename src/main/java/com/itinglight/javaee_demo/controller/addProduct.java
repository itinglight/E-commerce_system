package com.itinglight.javaee_demo.controller;

import com.itinglight.javaee_demo.entity.Product;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;

@WebServlet("/addProduct")
public class addProduct extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        System.out.println("addproduct");
        Product product = new Product();
        product.setProduct_id("100");
        product.setProduct_name(req.getParameter("product_name"));
        product.setKind_id(req.getParameter("kinds"));
        product.setImg_url(req.getParameter("img_url"));
        product.setDesc(req.getParameter("desc"));
        product.setPrise(req.getParameter("prise"));
        product.setStock(req.getParameter("stock"));
        product.setSales_volume("99");


        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url="jdbc:mysql://localhost:3306/shopping";
            String user="root";
            String password="123";
            Connection connection = DriverManager.getConnection(url,user,password);
//            String sql = "insert into product  VALUES (?,?,?,?,?,?,?);";
//            String sql="insert into product (name, kind_id, img_url, `desc`, prise, stock, sales_volume) VALUES (\"小米充电宝\",\"2\",\".img/name.jpg\",\"小米到一款充电宝\",\"49\",\"99\",\"32\");";
            String sql=product.getinsetUrl();
            System.out.println(sql);

            PreparedStatement preparedStatement = connection.prepareStatement(sql);
//            preparedStatement.setString(1, product.getProduct_name());
//            preparedStatement.setString(2, product.getKind_id());
//            preparedStatement.setString(3,product.getImg_url());
//            preparedStatement.setString(4,product.getDesc());
//            preparedStatement.setString(5,product.getPrise());
//            preparedStatement.setString(6,product.getStock());
//            preparedStatement.setString(7, product.getSales_volume());
            preparedStatement.execute(sql);
            System.out.println(product.getProduct_name()+"插入成功");

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }



    }
}
