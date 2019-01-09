package beans;
/**
 * 
 * there is a join table (CustomerCoupon) with those rows in the data base 
 * we don't use this object .
 *
 */
public class CustomerCoupon {

private long customerId;
private long couponId;
public long getCustomerId() {
	return customerId;
}
public void setCustId(long custId) {
	this.customerId = custId;
}
public long getCouponId() {
	return couponId;
}
public void setCouponId(long couponId) {
	this.couponId = couponId;
}

}
