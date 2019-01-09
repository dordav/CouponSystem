package facade;

import java.sql.Date;
import java.util.Collection;
import java.util.HashSet;


import beans.Company;
import beans.Coupon;
import beans.CouponType;
import dao.db.CompanyDaoDb;
import dao.db.CouponDaoDb;
import dao.db.CustomerDaoDb;
import exceptions.CouponSystemException;
import exceptions.CouponSystemException1;

/**
 * here all the methods from the dao.db will be used in order to create an easy
 * access to the system for the companies who use the system . this is the layer
 * for the business logic .
 * 
 */
public class CompanyFacade implements CouponClientFacade {

	private CouponDaoDb couponDb;
	private CompanyDaoDb companyDb;
	private CustomerDaoDb customerDb;
	private long company_id;

	public CompanyFacade() {
		super();
		couponDb = new CouponDaoDb();
		companyDb = new CompanyDaoDb();
		customerDb = new CustomerDaoDb();
	}

	/**
	 * we are checking that the coupon title is unique before we let the company
	 * create the coupon.
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void createCoupon(Coupon coupon) throws CouponSystemException {
		try {
			boolean unique = true;
			HashSet<Coupon> allTheCoupons = new HashSet<>();
			allTheCoupons.addAll(couponDb.getAllCoupon());
			for (Coupon c : allTheCoupons) {
				if (c.getTitle().equals(coupon.getTitle())) {
					unique = false;

				}

			}
			if (unique) {
				couponDb.create(coupon);
				long couponId = coupon.getId();
				companyDb.addCompanyCoupon(couponId, company_id);
				System.out.println("coupon created secssesfully");
				System.out.println("your couponId is " + couponId);
			} else {
				throw new CouponSystemException();
			}
		} catch (CouponSystemException e) {
			throw new CouponSystemException("There is already coupon with the same title ", e);
		}
	}

	/**
	 * When a coupon is being removed its removed from the customers purchased
	 * coupons and from the table of the company coupons
	 * 
	 * @param coupon{Coupon}
	 * @throws CouponSystemException
	 */
	public void removeCoupon(Coupon coupon) throws CouponSystemException {
		try {
			Coupon coup = coupon;
			boolean flag = false;
			long id = coupon.getId();
			loop: for (Coupon c : (companyDb.getCoupons(company_id))) {
				if (c.getId() == coupon.getId()) {
					flag = true;
					break loop;
				}
			}
				if (flag == true) {
					couponDb.remove(coup);
					companyDb.removeCompanyCoupons(id);
					customerDb.removeCustomerCoupons(id);
					System.out.println("coupon removed");
					
				} else {
					throw new CouponSystemException();
				}
		} catch (CouponSystemException e) {
			throw new CouponSystemException("Can't update other company's coupon");
		}
	}

	/**
	 * a company can only update the expiration date and the price of the
	 * coupon.
	 * 
	 * @param coupon{Coupon}
	 * @throws CouponSystemException
	 */
	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		try {
			boolean flag = false;
			long id = coupon.getId();
			Coupon coupon2 = couponDb.getCoupon(id);
			loop: for (Coupon c : (companyDb.getCoupons(company_id))) {
				if (c.getId() == coupon.getId()) {
					flag = true;
					break loop;
				}
			}
			if (flag == true) {
				if (coupon.getEnd_date() != null && coupon.getEnd_date().after(coupon2.getStart_date())) {
					coupon2.setEnd_date(coupon.getEnd_date());
				}
				if (coupon.getPrice() > 0) {
					coupon2.setPrice(coupon.getPrice());
				}
				couponDb.update(coupon2);
				System.out.println("The coupon" + coupon.getTitle() + " updated");
			} else {
				throw new CouponSystemException1();
			}
		} catch (CouponSystemException | CouponSystemException1 e) {
			if (e instanceof CouponSystemException1) {
				throw new CouponSystemException("Can't update other company's coupon");
			}
			throw new CouponSystemException("Something went wrong!");
		}
	}

	/**
	 * get coupon object by id.
	 * 
	 * @param id{long}
	 * @return coupon{Coupon}
	 * @throws CouponSystemException
	 */
	public Coupon getCoupon(long id) throws CouponSystemException {
		Coupon coupon;
		coupon = couponDb.getCoupon(id);

		return coupon;

	}
	/**
	 * get company object by id.
	 * 
	 * @param id{long}
	 * @return company{Company}
	 * @throws CouponSystemException
	 */
	public Company getCompany(long id) throws CouponSystemException {
		Company company;
		try {
			company = companyDb.getCompany(id);
		} catch (CouponSystemException e) {
			throw new CouponSystemException("Something went wrong!");
		}
		return company;
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

		allCoupons = (HashSet<Coupon>) companyDb.getCoupons(company_id);

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
	public Collection<Coupon> getCouponByType(CouponType type) throws CouponSystemException {
		CouponType wantedType = type;
		HashSet<Coupon> allCoupons;
		HashSet<Coupon> allCouponsByType = new HashSet<>();

		allCoupons = (HashSet<Coupon>) companyDb.getCoupons(company_id);
		for (Coupon c : allCoupons) {
			if (c.getType() == wantedType) {
				allCouponsByType.add(c);
			}
		}
		return allCouponsByType;
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

		allCoupons = (HashSet<Coupon>) companyDb.getCoupons(company_id);
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

		allCoupons = (HashSet<Coupon>) companyDb.getCoupons(company_id);
		for (Coupon c : allCoupons) {
			if (c.getEnd_date().compareTo(date) <= 0) {
				CouponByEndDate.add(c);
			}
		}
		return CouponByEndDate;
	}

	/**
	 * This boolean method gets name and password and make a validation in front the database 
	 * 
	 * @param name
	 * @param password
	 * @return boolean 
	 * @throws CouponSystemException
	 */
	@Override
	public boolean logIn(String name, String password) throws CouponSystemException {
		boolean logInWorked;
		try {
			if (companyDb.logIn(name, password)) {
				this.company_id = companyDb.restorCompanyId(name, password);

				logInWorked = true;
			} else {
				logInWorked = false;
			}
		} catch (CouponSystemException e) {
			throw new CouponSystemException("Something went wrong!");
		}
		return logInWorked;
	}

}