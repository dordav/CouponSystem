package beans;
/**
 * 
 * there is a join table (CompanyCoupon) in the data base with
 * those rows . 
 * we don't use this object.
 *
 */
public class CompanyCoupon {
	private long compId;
	private long couponId;
	public long getCompId() {
		return compId;
	}
	public void setCompId(long compId) {
		this.compId = compId;
	}
	public long getCouponId() {
		return couponId;
	}
	public void setCouponId(long couponId) {
		this.couponId = couponId;
	}
}
