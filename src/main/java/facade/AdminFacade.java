package facade;

import java.util.Collection;
import java.util.HashSet;


import beans.Company;
import beans.Coupon;
import beans.Customer;
import dao.db.CompanyDaoDb;
import dao.db.CouponDaoDb;
import dao.db.CustomerDaoDb;
import exceptions.CouponSystemException;
import exceptions.CouponSystemException1;

/**
 * 
 * this if the admin facade. with this facade the admin can create users
 * (companies,customers)
 * 
 *
 */
public class AdminFacade implements CouponClientFacade {
	private CompanyDaoDb companyDb;
	private CustomerDaoDb customerDb;
	private CouponDaoDb couponDb;

	public AdminFacade() {
		super();
		companyDb = new CompanyDaoDb();
		customerDb = new CustomerDaoDb();
		couponDb = new CouponDaoDb();
	}

	/**
	 * only the admin can create a company user . only if the name chosen for
	 * the company is unique and not empty
	 * 
	 * @param company{Company}
	 * @throws CouponSystemException
	 */
	public void createCompany(Company company) throws CouponSystemException {
		try {
			// checking there is not another company with the same name ;
			HashSet<Company> allCompany = (HashSet<Company>) companyDb.getAllCompanies();
			boolean unique = true;
			for (Company c : allCompany) {
				if (c.getName().equals(company.getName())) {
					unique = false;
				}
			}
			if (company.getName().length() == 0) {
				throw new CouponSystemException1();

			}
			if (unique) {
				companyDb.create(company);
				System.out.println("company created");
			} else {
				throw new CouponSystemException();
			}
		} catch (CouponSystemException | CouponSystemException1 e) {

			if (e instanceof CouponSystemException) {
				throw new CouponSystemException("company already exist", e);
			} else {
				throw new CouponSystemException("company's name wrong", e);
			}
		}
	}

	/**
	 * When this method is used the company and all her coupons that clients
	 * bought from her will be erased .
	 * 
	 * @param id{long}
	 * @throws CouponSystemException
	 */
	public void removeCompany(long id) throws CouponSystemException {
		try {
			Company company = companyDb.getCompany(id);

			HashSet<Coupon> allCoup = (HashSet<Coupon>) companyDb.getCoupons(company.getId());

			for (Coupon coup : allCoup) {
				long Coupid = coup.getId();
				couponDb.remove(coup);
				companyDb.removeCompanyCoupons(Coupid);
				customerDb.removeCustomerCoupons(Coupid);
			}
			companyDb.remove(company);

		} catch (CouponSystemException e) {
			throw new CouponSystemException("Something went wrong!", e);
		}
	}

	/**
	 * can update only the email and the password .
	 * 
	 * @param company{Company}
	 * @throws CouponSystemException
	 */
	public void updateCompany(Company company) throws CouponSystemException {
		Company comp;

			comp = companyDb.getCompany(company.getId());
			if (company.getPassword().length() != 0) {

				comp.setPassword(company.getPassword());
			}
			if (company.getEmail().length() != 0) {

				comp.setEmail(company.getEmail());
			}
			companyDb.update(comp);


		
	}

	/**
	 * get company object by id.
	 * 
	 * @param id{long}
	 * @return comp{Company}
	 * @throws CouponSystemException
	 */
	public Company getCompany(long id) throws CouponSystemException {

		Company comp = companyDb.getCompany(id);
		return comp;

	}

	/**
	 * user can get all the existing companies from this method.
	 * 
	 * @return Collection<Company>
	 * @throws CouponSystemException
	 */
	public Collection<Company> getAllCompanies() throws CouponSystemException {

			HashSet<Company> allCompanies = (HashSet<Company>) companyDb.getAllCompanies();
			return allCompanies;
		
	}

	/**
	 * This method create a new customer. only admin account can create a
	 * customer (if the customer name is unique and not empty) .
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 */
	public void creatCustomer(Customer customer) throws CouponSystemException {
		String name = customer.getName();
		try {
			HashSet<Customer> allCustomer = (HashSet<Customer>) customerDb.getAllCustomers();
			boolean unique = true;
			for (Customer cust : allCustomer) {
				if (cust.getName().equals(name) && name != null) {
					unique = false;
				}
			}
			if (customer.getName().length() == 0) {
				throw new CouponSystemException1();

			}
			if (unique) {
				customerDb.create(customer);
			} else {
				throw new CouponSystemException();
			}
		} catch (CouponSystemException | CouponSystemException1 e) {
			if (e instanceof CouponSystemException) {
				throw new CouponSystemException("Customer already exist", e);
			} else {
				throw new CouponSystemException("Customer's name wrong", e);
			}

		}
	}

	/**
	 * in this method the system removing a customer and all his coupons .
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 */
	public void removeCustomer(Customer customer) throws CouponSystemException {

		try {
		HashSet<Coupon> customerCoupon = (HashSet<Coupon>) customerDb.getCoupons(customer.getId());

			if (!(customerCoupon == null)) {
				for (Coupon coupon : customerCoupon) {
					couponDb.remove(coupon);
				}
			}
			customerDb.remove(customer);
		} catch (CouponSystemException e) {
			throw new CouponSystemException("Something went wrong!", e);

		}
	}

	/**
	 * this method can only update the customer password .
	 * 
	 * @param customer
	 * @throws CouponSystemException
	 */
	public void updateCustomer(Customer customer) throws CouponSystemException {
		Customer cust = customerDb.getCustomer(customer.getId());
		if (customer.getPassword().length() != 0) {

			cust.setPassword(customer.getPassword());
		}

		customerDb.update(cust);
		System.out.println("customer updated");

	}

	/**
	 * get customer object by id.
	 * 
	 * @param id{long}
	 * @return customer{Customer}
	 * @throws CouponSystemException
	 */
	public Customer getCustomer(long id) throws CouponSystemException {

		Customer customer = customerDb.getCustomer(id);
		return customer;

	}

	/**
	 * this method returns the user all the customers in the system .
	 * 
	 * @return Collection{Customer}
	 * @throws CouponSystemException
	 */
	public Collection<Customer> getAllCustomers() throws CouponSystemException {

		HashSet<Customer> allCustomers = (HashSet<Customer>) customerDb.getAllCustomers();
		return allCustomers;

	}

	/**
	 * This boolean method gets name and password and make a validation in front
	 * the database
	 * 
	 * @param name
	 * @param password
	 * @return boolean
	 * @throws CouponSystemException
	 */
	@Override
	public boolean logIn(String name, String password) throws CouponSystemException {
		if (name.contains("admin") && password.contains("1234")) {
			return true;
		}
		return false;
	}
}
