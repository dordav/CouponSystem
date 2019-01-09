package dao.db;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Collection;
import java.util.HashSet;


import beans.Coupon;
import beans.CouponType;
import connectionPool.ConnectionPool;
import dao.CouponDAO;
import exceptions.CouponSystemException;

/**
 * there is no business logic in this layer. only CRUD (create,read,update and
 * delete) methods and simple methods that will be in use in the facade layer
 * according to the user needs.
 * 
 */

public class CouponDaoDb implements CouponDAO {

	/**
	 * every coupon get a unique id from the sql table in the database the
	 * generated key(id) will be embedded in the coupon.
	 */
	@Override
	public void create(Coupon coupon) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		String sql1 = "INSERT INTO Coupon(title, start_date, end_date, amount, couponType, massage, price, image) VALUES(?, ?, ?, ?, ?, ?, ?, ?);";
		Connection con1 = cp.getConnection();
		try (PreparedStatement pstm = con1.prepareStatement(sql1, PreparedStatement.RETURN_GENERATED_KEYS);) {

			pstm.setString(1, coupon.getTitle());
			pstm.setDate(2, (Date) coupon.getStart_date());
			pstm.setDate(3, (Date) coupon.getEnd_date());
			pstm.setInt(4, coupon.getAmount());
			pstm.setString(5, coupon.getType().name());
			pstm.setString(6, coupon.getMassage());
			pstm.setDouble(7, coupon.getPrice());
			pstm.setString(8, coupon.getImage());
			pstm.executeUpdate();

			ResultSet res = pstm.getGeneratedKeys();
			res.next();
			coupon.setId(res.getLong(1));
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong! ", e);
		} finally {
			cp.returnConnection(con1);
		}

	}

	/**
	 * method to remove a coupon.
	 */
	@Override
	public void remove(Coupon coupon) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		long couponId = coupon.getId();
		try {
			con1.prepareStatement("DELETE FROM Coupon WHERE Coupon_id=" + couponId+";").executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
	}

	/**
	 * user cannot update id
	 */
	@Override
	public void update(Coupon coupon) throws CouponSystemException {
		ConnectionPool cp;
		cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		long couponId = coupon.getId();
		String sql = "UPDATE Coupon SET title=?, start_date=?, end_date=?, amount=?, couponType=?, massage=?, price=?, image=? "
				+ "WHERE Coupon_id=" + couponId+";";
		try {
			PreparedStatement psmt = con1.prepareStatement(sql);
			psmt.setString(1, coupon.getTitle());
			psmt.setDate(2, (Date) coupon.getStart_date());
			psmt.setDate(3, (Date) coupon.getEnd_date());
			psmt.setInt(4, coupon.getAmount());
			psmt.setString(5, coupon.getType().name());
			psmt.setString(6, coupon.getMassage());
			psmt.setDouble(7, coupon.getPrice());
			psmt.setString(8, coupon.getImage());
			psmt.executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong! ", e);
		} finally {
			cp.returnConnection(con1);

		}
	}

	/**
	 * user can get a coupon by giving the id ( no user will give id in the
	 * system it will happened automatically in the facade (after logging in ).
	 * 
	 * @param id{long}
	 * @return
	 */
	@Override
	public Coupon getCoupon(long id) throws CouponSystemException {
		Coupon coup = null;
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		try {
			Statement stmt = con1.createStatement();
			ResultSet res = stmt.executeQuery("SELECT * FROM Coupon WHERE Coupon_id=" + id+";");
			if (res.next()) {
				coup = new Coupon(res.getLong(1), res.getString(2), res.getDate(3), res.getDate(4), res.getInt(5),
						CouponType.valueOf(res.getString(6)), res.getString(7), res.getDouble(8), res.getString(9));
				return coup;
			} else {
				throw new CouponSystemException("The id didnt match any coupon");
			}
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);

		}

	}

	/**
	 * this method get all the coupons from the DB and returns them as a
	 * collection
	 * 
	 * @return collection{Coupon}
	 * @throws CouponSystemException
	 */
	@Override
	public Collection<Coupon> getAllCoupon() throws CouponSystemException {
		Collection<Coupon> allCoupons = new HashSet<>();
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		try {
			Statement stmt = con1.createStatement();
			ResultSet res = stmt.executeQuery("SELECT * FROM Coupon;");
			while (res.next()) {
				allCoupons.add(new Coupon(res.getLong(1), res.getString(2), res.getDate(3), res.getDate(4),
						res.getInt(5), CouponType.valueOf(res.getString(6)), res.getString(7), res.getDouble(8),
						res.getString(9)));
			}
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);
		} finally {
			cp.returnConnection(con1);
		}
		return allCoupons;
	}

	/**
	 * This method gets a "coupontype" variable from the user, and get all the
	 * coupons from the DB with the same type as chosen by the user, and returns
	 * them as a collection
	 * 
	 * @return collection{Coupon}
	 * @throws CouponSystemException
	 */
	@Override
	public Collection<Coupon> getCouponByType(CouponType couponType) throws CouponSystemException {
		ConnectionPool cp;
		Collection<Coupon> allCouponsByType = new HashSet<>();
		cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		try {
			Statement stmt = con1.createStatement();
			ResultSet res = stmt.executeQuery("SELECT * FROM coupon WHERE couponType='" + couponType.name() + "';");

			while (res.next()) {
				allCouponsByType.add(new Coupon(res.getLong(1), res.getString(2), res.getDate(3), res.getDate(4),
						res.getInt(5), CouponType.valueOf(res.getString(6)), res.getString(7), res.getDouble(8),
						res.getString(9)));
			}
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong!", e);

		} finally {
			cp.returnConnection(con1);

		}
		return allCouponsByType;
	}

	/**
	 * this is additional methods that help user restore the coupon id .
	 * 
	 * @param title
	 * @return
	 * @throws CouponSystemException
	 */
	public long getCouponId(String title) throws CouponSystemException {
		ConnectionPool cp = ConnectionPool.getInstance();
		Connection con1 = cp.getConnection();
		String sql = "select Coupon.Coupon_id from Coupon where title='" + title + "';";
		long id = 0;
		try {
			Statement stmt = con1.createStatement();
			ResultSet res = stmt.executeQuery(sql);
			if (res.next()) {
				id = res.getLong(1);
			}
		} catch (SQLException e) {
			throw new CouponSystemException("getCouponId faild", e);
		}
		return id;

	}

}
