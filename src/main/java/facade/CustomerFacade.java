package facade;

import java.sql.Date;
import java.util.Collection;
import java.util.HashSet;


import beans.Coupon;
import beans.CouponType;
import dao.db.CouponDaoDb;
import dao.db.CustomerDaoDb;
import exceptions.CouponSystemException;
import exceptions.CouponSystemException1;

/**
 * the customer facade is more complicated methods that use the methods from the
 * dao.db layer in a way that separate the access to the database from the
 * client .
 *
 */
public class CustomerFacade implements CouponClientFacade {

	private CouponDaoDb couponDb;
	private CustomerDaoDb customerDb;
	private long customer_id;

	public CustomerFacade() {
		super();
		couponDb = new CouponDaoDb();
		customerDb = new CustomerDaoDb();
	}

	/**
	 * a customer can purchase coupon after the checking that the customer
	 * didn't bought this coupon all-ready and if there coupons left and that
	 * the date isn't expired;
	 * 
	 * the method will decrease the amount of coupon from the company balance
	 * after the customer purchase one
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void purchaseCoupon(Coupon coupon) throws CouponSystemException {

		long couponId = couponDb.getCouponId(coupon.getTitle());
		Coupon companyCoupon = couponDb.getCoupon(couponId);
		System.out.println(companyCoupon);
		Date today = new Date(System.currentTimeMillis());
		customerDb.isCouponExistByTitle(coupon.getId(), customer_id);
		try {
			if (companyCoupon.getAmount() > 0) {
				if ((companyCoupon.getEnd_date()).after(today)) {
					// if everything is OK we can buy this.
					customerDb.addCustomerCoupon(coupon.getId(), customer_id);
					companyCoupon.setAmount((companyCoupon.getAmount()) - 1);
					couponDb.update(companyCoupon);
				} else {
					throw new CouponSystemException1();
				}
			} else {
				throw new CouponSystemException();
			}

		} catch (CouponSystemException | CouponSystemException1 e) {
			if (e instanceof CouponSystemException1) {
				throw new CouponSystemException("Coupon: " + coupon.getTitle() + " date expaired!", e);
			} else {
				throw new CouponSystemException("Coupon: " + coupon.getTitle() + " out of stock!", e);
			}
		}
	}

	/**
	 * this method allow the customer to get all the coupons that he bought.
	 * 
	 * @param customer_id
	 * @return Collection{Coupon}
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchesedCoupons() throws CouponSystemException {
		HashSet<Coupon> allCoupons;

			allCoupons = (HashSet<Coupon>) customerDb.getCoupons(customer_id);


		return allCoupons;

	}

	/**
	 * This method get all the coupons that the user bought, and by "type" variable from the user, 
	 * it's make a filtering.
	 * it's returns all the coupons that have the same type as chosen by the user.
	 * 
	 * @param type{CouponType}
	 * @return  Collection{Coupon}
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchesedCouponsByType(CouponType type) throws CouponSystemException {
		HashSet<Coupon> allCouponsByType = new HashSet<>();
		try {
			HashSet<Coupon> allCoupons = (HashSet<Coupon>) customerDb.getCoupons(customer_id);
			for (Coupon c : allCoupons) {
				if (c.getType().equals(type)) {
					allCouponsByType.add(c);
				}
			}
			if (allCouponsByType.isEmpty()) {
				throw new CouponSystemException1();
			}
		} catch (CouponSystemException | CouponSystemException1 e) {
			if (e instanceof CouponSystemException1) {
				throw new CouponSystemException("There is no coupons by this type");
			} else {
				throw new CouponSystemException("Something went wrong!");
			}
		}
		return allCouponsByType;

	}

	/**
	 * user can get all the coupon that he or she bought with lower or equal to
	 * the price he gave .
	 * 
	 * @param price{double}
	 * @return Collection{Coupon}
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchesedCouponsByPrice(double price) throws CouponSystemException {
		HashSet<Coupon> allCouponsByPrice = new HashSet<>();
		try {
			HashSet<Coupon> allCoupons = (HashSet<Coupon>) customerDb.getCoupons(customer_id);
			for (Coupon c : allCoupons) {
				if (c.getPrice() <= price) {
					allCouponsByPrice.add(c);
				}
			}
			if (allCouponsByPrice.isEmpty()) {
				throw new CouponSystemException1();
			}
		} catch (CouponSystemException | CouponSystemException1 e) {
			if (e instanceof CouponSystemException1) {
				throw new CouponSystemException("There is no coupons under this price");
			} else {
				throw new CouponSystemException("Something went wrong!");
			}
		}

		return allCouponsByPrice;

	}

	/**
	 * This boolean method gets name and password and make a validation in front the database 
	 * 
	 * @param name{String}
	 * @param password{String}
	 * @return boolean 
	 * @throws CouponSystemException
	 */
	@Override
	public boolean logIn(String name, String password) throws CouponSystemException {
		try {
			if (customerDb.logIn(name, password)) {
				customer_id = customerDb.restoreId(name, password);
				return true;
			}
			return false;
		} catch (CouponSystemException e) {
			throw new CouponSystemException("logIn failed in facade");
		}
	}

	/**
	 * This method get all the coupons, and return them to the user as a collection
	 *  
	 * @param type{CouponType}
	 * @return  Collection{Coupon}
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		HashSet<Coupon> allCoupons;
			allCoupons = (HashSet<Coupon>) couponDb.getAllCoupon();
		return allCoupons;
	}

	/**
	 * This method get all the coupons, and by "type" variable from the user, 
	 * it's make a filtering.
	 * it's returns all the coupons that have the same type as chosen by the user.
	 * 
	 * @param type{CouponType}
	 * @return  Collection{Coupon}
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllCouponsByType(CouponType type) throws CouponSystemException {
		HashSet<Coupon> allCoupons;

			allCoupons = (HashSet<Coupon>) couponDb.getCouponByType(type);	
		return allCoupons;
	}

	/**
	 * This method get all the coupons, and by "price" variable from the user, 
	 * it's make a filtering.
	 * it's returns all the coupons that have low price then the price that chosen by the user.
	 * 
	 * @param price{double}
	 * @return  Collection{Coupon}
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCouponByPrice(double price) throws CouponSystemException {
		HashSet<Coupon> allCoupons;
		HashSet<Coupon> CouponByPrice = new HashSet<>();

			allCoupons = (HashSet<Coupon>) couponDb.getAllCoupon();
			for (Coupon c : allCoupons) {
				if (c.getPrice() <= price) {
					CouponByPrice.add(c);
				}
			
		}
		return CouponByPrice;
	}

	/**
	 * This method get all the coupons, and by "Date" variable from the user, 
	 * it's make a filtering.
	 * it's returns all the coupons before the date that chosen by the user.
	 * 
	 * @param date{Date}
	 * @return  Collection{Coupon}
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCouponByEndDate(Date date) throws CouponSystemException {
		HashSet<Coupon> allCoupons;
		HashSet<Coupon> CouponByEndDate = new HashSet<>();

			allCoupons = (HashSet<Coupon>) couponDb.getAllCoupon();
			for (Coupon c : allCoupons) {
				if (c.getEnd_date().compareTo(date) <= 0) {
					CouponByEndDate.add(c);
				}

			}

		return CouponByEndDate;
	}

}
