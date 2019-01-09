package cleanerTask;

import java.util.Date;
import java.util.HashSet;

import beans.Coupon;
import dao.db.CompanyDaoDb;
import dao.db.CouponDaoDb;
import dao.db.CustomerDaoDb;
import exceptions.CouponSystemException;
/**
 * this task is stating inside a thread in the singleton of coupon system.
 * it will run ones a day and rest for 24 hours .
 * you can stop it by change the setQuit method (the singleton 
 * is doing it where he close). 
 * 
 *
 */
public class TheCleanerTask implements Runnable {

	private CouponDaoDb couponDb;
	private CustomerDaoDb customerDb;
	private CompanyDaoDb companyDb;

	private static boolean quit;

	public TheCleanerTask() {
		couponDb = new CouponDaoDb();
		customerDb = new CustomerDaoDb();
		companyDb = new CompanyDaoDb();
		quit = false;
	}
/**
 * run will not work is the setQuit method called (it called in the closing of
 * the program .
 */
	@Override
	public void run() {
		while (!quit) {
			try {
				HashSet<Coupon> allCoupons = (HashSet<Coupon>) couponDb.getAllCoupon();
				for (Coupon c : allCoupons) {
					if (c.getEnd_date().before(new Date(System.currentTimeMillis()))) {
						customerDb.removeCustomerCoupons(c.getId());
						companyDb.removeCompanyCoupons(c.getId());
						couponDb.remove(c);

					}
				}
				// sleep for 24 hours;
				Thread.sleep(1000 * 60 * 60 * 24);
			} catch (CouponSystemException | InterruptedException e) {
				System.out.println("the thread failed");
				e.printStackTrace();
			}

		}
	}
/**
 * in the closing of the program the shutdown method will use this method 
 * for stopping the cleaner Task (that delete the coupons the expired).
 */
	public void setQuit() {
		TheCleanerTask.quit = true;
	}

}
