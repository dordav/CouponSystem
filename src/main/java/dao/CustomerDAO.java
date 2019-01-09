package dao;


import java.util.Collection;

import beans.Coupon;
import beans.Customer;
import exceptions.CouponSystemException;
/**
 * in the Dao layer you get only the headlines of the methods.
 * the rest is written in the Dao.Db layer.
 *
 */
public interface CustomerDAO {

	void create(Customer customer) throws CouponSystemException, CouponSystemException;
	
	void remove (Customer customer)throws CouponSystemException, CouponSystemException;

	void update(Customer customer)throws CouponSystemException, CouponSystemException;
	
	Customer getCustomer(long id) throws CouponSystemException, CouponSystemException;
	
	Collection<Customer> getAllCustomers()throws CouponSystemException, CouponSystemException;

	boolean logIn(String companyName,String password) throws CouponSystemException, CouponSystemException;

	Collection<Coupon> getCoupons(long customerId) throws CouponSystemException, CouponSystemException;
}
