package exceptions;
/**
 * this is the exception for the couponSystem all the other exceptions will extend
 * this exception .
 *
 */
public class CouponSystemException extends Exception {

	private static final long serialVersionUID = 1L;

	public CouponSystemException() {
		super();
	}

	public CouponSystemException(String arg0, Throwable arg1, boolean arg2, boolean arg3) {
		super(arg0, arg1, arg2, arg3);
	}

	public CouponSystemException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

	public CouponSystemException(String arg0) {
		super(arg0);
	}

	public CouponSystemException(Throwable arg0) {
		super(arg0);
	}

	public CouponSystemException(String msg, Exception e) {
		super(msg, e);
	}


	
	

}
