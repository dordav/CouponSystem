package dao.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Collection;
import java.util.HashSet;


import beans.Coupon;
import beans.CouponType;
import beans.Customer;
import connectionPool.ConnectionPool;
import dao.CustomerDAO;
import exceptions.CouponSystemException;

/**
 * there is no business logic in this layer. only CRUD (create,read,update and
 * delete) methods and simple methods that will be in use in the facade layer
 * according to the customer needs.
 * 
 *
 */
public class CustomerDaoDb implements CustomerDAO {
	/**
	 * every customer get a unique id from the sql table in the database the
	 * generated key(id) will be embedded in the customer.
	 */
	@Override
	public void create(Customer customer) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String sql = "INSERT INTO Customer(name, password) VALUES (?, ?);";
		try (PreparedStatement psmt = con1.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);) {

			psmt.setString(1, customer.getName());
			psmt.setString(2, customer.getPassword());
			psmt.executeUpdate();

			ResultSet res = psmt.getGeneratedKeys();
			if (res.next()) {
				customer.setId(res.getLong(1));
			}
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);

		}
	}

	/**
	 * removing customer from the system .
	 */
	@Override
	public void remove(Customer customer) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String sql = "DELETE FROM Customer WHERE Customer_id=" + customer.getId()+";";
		try {

			PreparedStatement psmt = con1.prepareStatement(sql);
			psmt.executeUpdate();
			System.out.println("customer removed");
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
	}

	/**
	 * the update method can update only the name and the password.
	 */
	@Override
	public void update(Customer customer) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String sql = "UPDATE Customer SET name=?,password=? WHERE Customer_id=" + customer.getId()+";";
		try (PreparedStatement psmt = con1.prepareStatement(sql);) {

			psmt.setString(1, customer.getName());
			psmt.setString(2, customer.getPassword());

			psmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
	}

	/**
	 * user give an id and get the customer as an object.
	 */
	@Override
	public Customer getCustomer(long id) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		try {
			Statement stmt = con1.createStatement();
			ResultSet res = stmt.executeQuery("SELECT * FROM Customer WHERE Customer_id=" + id+";");
			if (res.next()) {
				Customer customer = new Customer(res.getLong(1), res.getString(2), res.getString(3));
				return customer;
			} else {
				throw new CouponSystemException("The id didnt match any customer");
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}

	}

	/**
	 * this method will give the user all the customers in the system
	 */
	@Override
	public Collection<Customer> getAllCustomers() throws CouponSystemException {
		Collection<Customer> allCustomers = new HashSet<>();
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		try {

			Statement stmt = con1.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT * FROM Customer;");
			while (rs.next()) {
				allCustomers.add(new Customer(rs.getLong(1), rs.getString(2), rs.getString(3)));

			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
		return allCustomers;
	}

	/**
	 * in the logIn if there any result from the database its true because a
	 * customer returned from the table.
	 * 
	 */
	@Override
	public boolean logIn(String customerName, String password) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String details = "SELECT * FROM Customer WHERE name='" + customerName + "'" + "AND password='" + password + "';";
		try {
			Statement st = con1.createStatement();
			ResultSet res = st.executeQuery(details);
			if (res.next()) {
				return true;
			}
			return false;

		} catch (SQLException e) {
			throw new CouponSystemException("logIn in CustomerDaoDB faild ", e);
		} finally {
			cp.returnConnection(con1);
		}

	}

	/**
	 * this method give the user all the coupons in the system .
	 */
	@Override
	public Collection<Coupon> getCoupons(long customerId) throws CouponSystemException {

		Collection<Coupon> couponsList = new HashSet<>();
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String sql = " SELECT * FROM CustomerCoupon INNER JOIN Coupon ON Coupon.Coupon_id=CustomerCoupon.Coupon_id WHERE Customer_id="
				+ customerId+";";

		try {
			Statement st = con1.createStatement();
			ResultSet res = st.executeQuery(sql);
			if (res.next() == false) {
				return null;
			} else {
				do {
					couponsList.add(new Coupon(res.getLong(3), res.getString(4), res.getDate(5), res.getDate(6),
							res.getInt(7), CouponType.valueOf(res.getString(8)), res.getString(9), res.getDouble(10),
							res.getString(11)));
				} while (res.next());
				return couponsList;
			}
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
	}

	/**
	 * from this method on this is additional methods all those 3 methods are
	 * handling the join tabels.
	 * 
	 * @param customerId
	 * @param couponId
	 * @throws CouponSystemException
	 */

	public void customerCouponUpdate(long customerId, long couponId) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String sql = "INSERT INTO CustomerCoupon (Custumer_id,Coupon_id) VALUES(?, ?);";
		try {
			PreparedStatement psmt = con1.prepareStatement(sql);
			psmt.setLong(1, customerId);
			psmt.setLong(2, couponId);
			psmt.executeUpdate();
			System.out.println("customer coupon updated");
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
	}

	/**
	 * removing the coupons that the customer bought.
	 */
	public void removeCustomerCoupons(long couponId) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String sql = "DELETE FROM CustomerCoupon WHERE Coupon_id=" + couponId+";";
		try {
			con1.createStatement().executeUpdate(sql);

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
	}

	/**
	 * when a customer buy coupon it will be save in a table in the database
	 * for him to use .
	 */
	public void addCustomerCoupon(long couponId, long customerId) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
	
		String sql = "INSERT INTO CustomerCoupon (Customer_id,Coupon_id) VALUES (" + customerId + ", " + couponId + ");";
		try {
			con1.prepareStatement(sql).executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
	}

	/**
	 * this will help customers get the customet_id if they lost it or
	 * something.
	 * 
	 * @param name
	 * @param password
	 * @return
	 * @throws CouponSystemException
	 */

	public long restoreId(String name, String password) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		try {
			long customerId = 0;
			Statement stmt = con1.createStatement();
			ResultSet res = stmt.executeQuery("select customer.customer_id from customer where name='" + name
					+ "' and password='" + password + "';");
			if (res.next()) {
				customerId = res.getLong(1);
			}
			return customerId;
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}

	}

	/**
	 * with this method we can check if a coupon title is already exist so every
	 * coupon will be unique .
	 * 
	 * @param customer_id
	 */
	public void isCouponExistByTitle(long coupon_id, long customer_id) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String sql = "SELECT * FROM CustomerCoupon WHERE Coupon_id="+coupon_id+";";
		try {
			Statement stmt = con1.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				System.out.println(rs.getInt(1));
				System.out.println(rs.getInt(2));
				System.out.println(customer_id);
				if (rs.getInt(1) == customer_id) {
					System.out.println(rs.getInt(1));
					throw new CouponSystemException();
				}
			}
		} catch (SQLException | CouponSystemException e) {
			if(e instanceof CouponSystemException){
				
			throw new CouponSystemException("You've already bought this coupon!", e);
		}else{
			throw new CouponSystemException("Something went wrong!", e);
			}
		}
		
	}
}