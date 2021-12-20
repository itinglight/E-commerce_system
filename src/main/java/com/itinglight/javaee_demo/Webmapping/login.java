package com.itinglight.javaee_demo.Webmapping;

import com.itinglight.javaee_demo.entity.User;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;

@WebServlet("/pages/login")
public class login extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String account=req.getParameter("account");
        String password=req.getParameter("password");

        User user =new User();
        user.setId(account);
        user.setPassword(password);


        try {
            Class.forName("com.mysql.jdbc.Driver");

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping", "root", "123");
            String sql="select * from User where account=? and password=?";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1,account);
            preparedStatement.setString(2,password);
            ResultSet resultSet = preparedStatement.executeQuery();
            int count=0;
//            while (resultSet.next()){
//                count++;
//            }
            if(resultSet.next()){
                System.out.println("登陆成功");
                resp.sendRedirect("/index.html");
                System.out.println(user.getId()+"\n"+user.getPassword());
                Cookie cookie = new Cookie("user", user.getId());
                cookie.setPath ("/");
                resp.addCookie(cookie);


            }else{
                System.out.println("登陆失败");

                resp.sendRedirect("/pages/login.html");
            }

            System.out.println(count);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req,resp);
    }
}
