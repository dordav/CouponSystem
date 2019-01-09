
package dao;

import java.util.Collection;

import beans.Company;
import beans.Coupon;
import exceptions.CouponSystemException;
/**
 * in the Dao layer you get only the headlines of the methods.
 * the rest is written in the Dao.Db layer.
 *
 */
public interface CompanyDAO {

	void create(Company company) throws CouponSystemException, CouponSystemException;

	void remove(Company company) throws CouponSystemException, CouponSystemException;

	void update(Company company) throws CouponSystemException, CouponSystemException;

	Company getCompany(long id) throws CouponSystemException, CouponSystemException;

	Collection<Company> getAllCompanies() throws CouponSystemException, CouponSystemException;

	Collection<Coupon> getCoupons(long companyId) throws CouponSystemException, CouponSystemException;

	boolean logIn(String compName, String password) throws CouponSystemException, CouponSystemException;

}