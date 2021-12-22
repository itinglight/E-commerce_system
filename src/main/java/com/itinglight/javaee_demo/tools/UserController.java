package com.itinglight.javaee_demo.controller;

import com.itinglight.javaee_demo.entity.User;

import javax.swing.plaf.nimbus.State;
import java.sql.*;

public class UserController {

    private static Connection connection =null;
    static{

        try {
            /*
            1.导入jar包
            2.注册驱动
            3.获取链接

            */
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping", "root", "123");

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }


    }

    public static void saveUser(User user) throws SQLException {


//        String sql="select * from User";
//
//        PreparedStatement preparedStatement = connection.prepareStatement(sql);
//        boolean execute = preparedStatement.execute();


        String sql="insert into User (account, name, phone, password) VALUES (?,?,?,?);";

        PreparedStatement statement = connection.prepareStatement(sql);
        statement.setString(1,user.getId());
        statement.setString(2, user.getName());
        statement.setString(3,user.getPhone());
        statement.setString(4,user.getPassword());
        statement.executeUpdate();

    }



}
