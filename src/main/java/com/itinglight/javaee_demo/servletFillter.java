package com.itinglight.javaee_demo;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;


@WebFilter("/login")
public class servletFillter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        servletRequest.setCharacterEncoding("UTF-8");
        System.out.println("loginFilter");


        filterChain.doFilter(servletRequest,servletResponse);
    }
}
