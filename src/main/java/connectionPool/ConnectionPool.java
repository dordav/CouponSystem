package connectionPool;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;


import exceptions.CouponSystemException;
/**
 * the connectionPool have 10 connections , every method start with taking one connection
 * and finished with returning the connection .
 * its a singleton .
 *
 */
public class ConnectionPool {

//	private String url = "jdbc:derby:coupon;create=true";
	private String urlHeroku = "jdbc:postgresql://ec2-54-243-223-245.compute-1.amazonaws.com:5432/d267frh5dte10d";
	private String userName = "ttnsxjqbvyxwqs";
	private String password = "8d355696f6c5db47770f213fb3bf9554e63ea3a143506bbf1c2d50acca04968c";
	private Collection<Connection> connections;
	final static int con_min_size = 0;
	final static int con_max_size = 10;
	private int counter;
	
	public boolean closing;

	// singleton
	private ConnectionPool() throws CouponSystemException {
		connections = new HashSet<>();
		try {
			for (int i = 0; i < con_max_size; i++) {
				Class.forName("org.postgresql.Driver").newInstance();
				Connection con = DriverManager.getConnection(urlHeroku,userName,password );
				connections.add(con);
			}
		} catch (SQLException  | ClassNotFoundException | InstantiationException | IllegalAccessException  e) {
			throw new CouponSystemException("connection pool initialization failed ", e);
		}
	}
	

	private static ConnectionPool instance;
/**
 * user cannot create a new connection pool . only use an instance of the only one .
 * @return
 * @throws CouponSystemException
 */
	public static ConnectionPool getInstance() throws CouponSystemException {
		if (instance == null) {
			instance = new ConnectionPool();
			
		}
		return instance;
	}

	/**
	 * all the methods use connection that they get from this method . 
	 * @return
	 * @throws CouponSystemException
	 */
	public synchronized Connection getConnection() throws CouponSystemException {
		if (closing == true) {
			throw new CouponSystemException("we are clousing the progrem");

		}
		if (connections.size() == con_min_size) {
			try {
				wait();
			} catch (InterruptedException e) {
				throw new CouponSystemException("we have an interruption in getting a connection",e);
			}
		}
		Iterator<Connection> it = connections.iterator();
		Connection con = (Connection) it.next();
		connections.remove(con);
		return con;

	}
/**
 * every method in the dbdao finished by returning the connection they took . 
 * @param con
 */
	public synchronized void returnConnection(Connection con) {
		connections.add(con);
		notify();
	}
/**
 * in this method first the system will stop giving connections and wait 
 * for all the  connections to come back and than close them all .
 * @throws CouponSystemException
 */
	public synchronized void closeAllConnection() throws CouponSystemException {
		closing = true;
		while (connections.size() < con_max_size) {
			try {
				wait();
			} catch (InterruptedException e) {
				throw new CouponSystemException("we were interrupted", e);
			}
		}
		while (!(counter == con_max_size)) {
			Iterator<Connection> it = connections.iterator();
			it.next();
			it.remove();
			counter++;
		}

	}

}
