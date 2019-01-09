package singleton;




import beans.ClientType;
import cleanerTask.TheCleanerTask;
import connectionPool.ConnectionPool;
import exceptions.CouponSystemException;
import facade.AdminFacade;
import facade.CompanyFacade;
import facade.CouponClientFacade;
import facade.CustomerFacade;

/**
 * the CouponSystem is a singleton that give access to the rest of the system
 * and start and finish the cleaner thread that remove all the expired coupons .
 *
 */
public class CouponSystem {

	TheCleanerTask task = new TheCleanerTask();
	Thread cleaner = new Thread(task);

	// singleton ;
//	private CouponSystem() {
//		
//		cleaner.start();
//	}

	private static CouponSystem instance;
/**
 * user cannot create a new coupon System only to use an instance of the only one . 
 * @return
 */
	public static synchronized CouponSystem getInstance() {
		if (instance == null) {
			instance = new CouponSystem();
		}
		return instance;
	}

	/**
	 * user can get facade access to his user according to his client Type . (if he
	 * has the right user name and password)
	 * 
	 * the logIn method (from the facade) will save the id of the user that logged in
	 * for the for the other methods . 
	 * @param userName
	 * @param passwors
	 * @param type
	 * @return
	 * @throws CouponSystemException
	 */
	public CouponClientFacade Login(String userName, String password, ClientType type) {


		try {
			if (type == ClientType.admin) {
				AdminFacade adminFacade = new AdminFacade();
				adminFacade.logIn(userName, password);
				if (adminFacade.logIn(userName, password)) {
					return adminFacade;
				}
			}
			if (type == ClientType.company) {
				CompanyFacade companyFacade = new CompanyFacade();
				companyFacade.logIn(userName, password);
				if (companyFacade.logIn(userName, password)) {
					return companyFacade;
				}
			}
			if (type == ClientType.customer) {
				CustomerFacade customerFacade = new CustomerFacade();
				customerFacade.logIn(userName, password);
				if (customerFacade.logIn(userName, password)) {
					return customerFacade;
				}
			}

		} catch (CouponSystemException e) {
			e.printStackTrace();
		}
		return null;

	}
/**
 * the shutdown method will close all the open connection and stop the cleaner task.
 * @throws CouponSystemException
 */
	public void shutDown() throws CouponSystemException {
		task.setQuit();
		try {
			ConnectionPool.getInstance().closeAllConnection();
			System.out.println("system shut down complete");
		} catch (Exception e) {
			throw new CouponSystemException("connectionpool shutdown failed", e);
		}
	}
}
