package com.itinglight.javaee_demo.entity;

public class Product {
    //    商品id kind  名称 图片路径 描述 价格 库存 销量
//    商品(product_id,product_name,kind_id,img_url,desc,prise,stock,sales_volume)
    private String product_id;
    private String product_name;
    private String kind_id;
    private String img_url;
    private String desc;
    private String prise;
    private String stock;
    private String sales_volume;

    public String getinsetUrl(){
        String sql="insert into product (name, kind_id, img_url, `desc`, prise, stock, sales_volume) VALUES (\""+
                getProduct_name()+"\",\""+
                getKind_id()+"\",\""+
                getImg_url()+"\",\""+
                getDesc()+"\",\""+
                getPrise()+"\",\""+
                getStock()+"\",\""+
                getSales_volume()+"\");";

        return sql;
    }
    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getKind_id() {
        return kind_id;
    }

    public void setKind_id(String kind_id) {
        this.kind_id = kind_id;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getPrise() {
        return prise;
    }

    public void setPrise(String prise) {
        this.prise = prise;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }

    public String getSales_volume() {
        return sales_volume;
    }

    public void setSales_volume(String sales_volume) {
        this.sales_volume = sales_volume;
    }
}