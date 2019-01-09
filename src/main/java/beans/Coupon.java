package beans;

import java.io.Serializable;
import java.sql.Date;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * this is the object for making coupons.
 *
 */
@SuppressWarnings("serial")
@XmlRootElement
public class Coupon implements Serializable{
private long id;
private String title;
private Date start_date;
private Date end_date;
private int amount;
private  CouponType type;
private String massage ;
private double price;
private String image;

public Coupon(){
	}

public Coupon(long id, String title, Date start_date, Date end_date, int amount,  CouponType couponType, String massage,
		double price, String image) {
	super();
	this.id = id;
	this.title = title;
	this.start_date = start_date;
	this.end_date = end_date;
	this.amount = amount;
	this.type = couponType;
	this.massage = massage;
	this.price = price;
	this.image = image;
}
public Coupon( String title, Date start_date, Date end_date, int amount,  CouponType couponType, String massage,
		double price, String image) {
	super();
	
	this.title = title;
	this.start_date = start_date;
	this.end_date = end_date;
	this.amount = amount;
	this.type = couponType;
	this.massage = massage;
	this.price = price;
	this.image = image;
}

//toString;
@Override
public String toString() {
	return "Coupon [id=" + id + ", title=" + title + ", start_date=" + start_date + ", end_date=" + end_date
			+ ", amount=" + amount + ", couponType=" + type + ", massage=" + massage + ", price=" + price
			+ ", image=" + image + "]";
}



//getters and setters;
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public Date getStart_date() {
	return start_date;
}
public void setStart_date(Date start_date) {
	this.start_date = start_date;
}
public Date getEnd_date() {
	return end_date;
}
public void setEnd_date(Date end_date) {
	this.end_date = end_date;
}
public int getAmount() {
	return amount;
}
public void setAmount(int amount) {
	this.amount = amount;
}

public String getMassage() {
	return massage;
}
public CouponType getType() {
	return type;
}

public void setType(CouponType type) {
	this.type = type;
}
public void setMassage(String massage) {
	this.massage = massage;
}
public double getPrice() {
	return price;
}
public void setPrice(double price) {
	this.price = price;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}


}


