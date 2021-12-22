package com.itinglight.javaee_demo.Webmapping;

import com.itinglight.javaee_demo.tools.UserController;
import com.itinglight.javaee_demo.entity.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/register")
public class Register extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        req.setCharacterEncoding("UTF-8");
        User user = new User();

            user.setId(req.getParameter("account"));
            user.setPassword(req.getParameter("password"));
            user.setName(req.getParameter("name"));
            user.setPhone(req.getParameter("phone"));
            System.out.println(user.toString());

        try {

            UserController.saveUser(user);

        } catch (SQLException e) {
            e.printStackTrace();
        }


    }
}
