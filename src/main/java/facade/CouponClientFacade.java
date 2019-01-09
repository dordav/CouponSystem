package facade;

import exceptions.CouponSystemException;
/**
 * we use this general interface in the log in in the coupon system singleton 
 * 
 */
public interface CouponClientFacade {
	
	boolean logIn(String name, String password) throws CouponSystemException ;



}
