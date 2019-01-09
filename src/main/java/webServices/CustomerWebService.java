package webServices;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import beans.Coupon;
import beans.CouponType;
import exceptions.CouponSystemException;
import facade.CustomerFacade;

/**
 * In this class there is all the Methods ("CRUD" operations) that a customer account can get access to
 * by request over http protocol from the cleintSide.
 * this class making use by "Http servlet request"
 * 
 */
@RestController
public class CustomerWebService {
	private CustomerFacade getFacade(HttpServletRequest request) {
		CustomerFacade cf = (CustomerFacade) request.getSession().getAttribute("customerFacade");
		return cf;
	}

	
	/**
	 * Method handling HTTP POST requests, This method is used to get a request
	 * with a coupon object from the client over HTTP protocol, apply the method
	 * "purchaseCoupon", and sends a response's entity inside the body, over HTTP
	 * protocol.
	 * 
	 * @param coupon{Coupon}
	 * @param request{HttpServletRequest}
	 * 
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/customer/purchasecoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> PurchaseCoupon(@RequestBody Coupon coupon, HttpServletRequest request)
			throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			cf.purchaseCoupon(coupon);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body("Pruchase complete");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client over HTTP protocol, and sends a response's entity and an
	 * collection of all the coupons that the client purchased, inside the body.
	 * 
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/customer/purchasedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> PurchasedCoupons(HttpServletRequest request) throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getAllPurchesedCoupons());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client with a variable of "type" over HTTP protocol, and sends a response's entity and an
	 * collection of all the coupons that the client purchased, according the "type", inside the response's body. 
	 * 
	 * @param type{CouponType}
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/customer/purchasedcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> PurchasedCouponsByType(@PathVariable CouponType type,
			HttpServletRequest request) throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getAllPurchesedCouponsByType(type));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client with a variable of "price" over HTTP protocol, and sends a response's entity and an
	 * collection of all the coupons that the client purchased, according the "price", inside the response's body
	 * 
	 * @param price{double}
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/customer/purchasedcouponsbyprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> PurchasedCouponsByPrice(@PathVariable double price,
			HttpServletRequest request) throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getAllPurchesedCouponsByPrice(price));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client over HTTP protocol, and sends a response's entity and 
	 * collection of all the coupons, inside the response's body
	 * 
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/customer/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCoupons(HttpServletRequest request) throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getAllCoupons());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client with a variable of "price" over HTTP protocol, and sends a response's entity and an
	 * collection of all the coupons according the "price", inside the body
	 * 
	 * @param price{double}
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/customer/getallcouponsbyprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCouponsByPrice(@PathVariable double price, HttpServletRequest request)
			throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getCouponByPrice(price));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client with a variable of "type" over HTTP protocol, and sends a response's entity and an
	 * collection of all the coupons according the "type", inside the response's body, 
	 * 
	 * @param type{CouponType}
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/customer/getallcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCouponsByType(@PathVariable CouponType type,
			HttpServletRequest request) throws CouponSystemException {
		CustomerFacade cf = (CustomerFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getAllCouponsByType(type));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client,it clears all the attributes that on the session (includes the cookies), and clear the facade.
	 * 
	 * @param request{HttpServletRequest}
	 */
	@RequestMapping(value = "/customer/logout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody void logOut(HttpServletRequest request, HttpServletResponse response)
			throws CouponSystemException {
	
		HttpSession session = request.getSession(false);
		if (request.isRequestedSessionIdValid() && session != null) {
			session.invalidate();
			Cookie cookies[] = request.getCookies();
			for (Cookie cookie : cookies) {
				cookie.setMaxAge(0);
				cookie.setValue(null);
				cookie.setPath("/");
				response.addCookie(cookie);
			}		
			
		}

	}
}
