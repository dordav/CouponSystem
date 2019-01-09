package exceptions;

/**
 * 
 * this is the only RunTimeException in the system
 * i throw it when user is trying to get coupons with the wrong details . 
 *(the only place i throw it is in the "getAllCouponsByType" method in CustomerFacade)
 */
public class WrongDetailsException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public WrongDetailsException() {
		super();
	}
	 public WrongDetailsException(String msg,Throwable throwable) {
		 super(msg,throwable);
	 }
	 
	 public WrongDetailsException(String msg) {
		 super(msg);
	 }
	 
	 public WrongDetailsException(Throwable throwable) {
		 super(throwable);
	 }
	 
	 
}
