package create.db;
/**
 * 
 * this was used in the beginning to create the tables in the data base.
 *
 */
public class CreateTabels {
		
		String url = "jdbc:derby:coupon;create=true";

		
		String sqlA = "CREATE TABLE Company(Company_id BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1) ,name VARCHAR(40),password VARCHAR(40),email VARCHAR(40),CONSTRAINT primary_key1 PRIMARY KEY (Company_id))";
		
		String sqlB = "CREATE TABLE Customer(Customer_id BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),name VARCHAR(40),password VARCHAR(40),CONSTRAINT primary_key2 PRIMARY KEY (Customer_id))";
		
		String sqlC = "CREATE TABLE Coupon(Coupon_id BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1), title VARCHAR(40), start_date DATE, end_date DATE, amount INTEGER, couponType VARCHAR(40), massage VARCHAR(225), price FLOAT, image VARCHAR(225), CONSTRAINT primary_key3 PRIMARY KEY (Coupon_id))";
		
		String sqlD = "CREATE TABLE CustomerCoupon(Customer_id BIGINT, Coupon_id BIGINT, PRIMARY KEY(Customer_id, Coupon_id))";
		
		String sqlE = "CREATE TABLE CompanyCoupon(Company_id BIGINT, Coupon_id BIGINT, PRIMARY KEY(Company_id, Coupon_id))";


}
