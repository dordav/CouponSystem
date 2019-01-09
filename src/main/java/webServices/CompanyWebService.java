package webServices;

import java.sql.Date;

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
import exceptions.CouponSystemException1;
import facade.CompanyFacade;

@RestController
/**
 * In this class there is all the Methods ("CRUD" operations) that a company account can get access to
 * by request over http protocol from the cleintSide.
 * this class making use by "Http servlet request"
 * 
 */
public class CompanyWebService {
	private CompanyFacade getFacade(HttpServletRequest request) {
		CompanyFacade cf = (CompanyFacade) request.getSession().getAttribute("companyFacade");
		return cf;
	}

	/**
	 * Method handling HTTP POST requests, This method is used to get a request
	 * with coupon object from the client over HTTP protocol, apply the method
	 * "createCoupon", and sends a response's entity inside the body, over HTTP
	 * protocol.
	 * 
	 * @param coupon{Coupon}
	 * @param request{HttpServletRequest}
	 * 
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/company/createcoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCoupon(@RequestBody Coupon coupon, HttpServletRequest request)
			throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			cf.createCoupon(coupon);
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body("Coupon: " + coupon.getMassage() + " created!");

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP PUT requests, This method is used to get a request
	 * with coupon object from the client over HTTP protocol, apply the method
	 * "updateCoupon" and sends a response's entity inside the body, over HTTP
	 * protocol.
	 * 
	 * @param request{HttpServletRequest}
	 * @param coupon{Coupon}
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/company/updatecoupon", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCoupon(@RequestBody Coupon coupon, HttpServletRequest request)
			throws CouponSystemException, CouponSystemException1 {
		CompanyFacade cf = (CompanyFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			cf.updateCoupon(coupon);

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body("Coupon by ID " + coupon.getId() + "updated!");

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests, This method is used to get a request
	 * with variable from the client over HTTP protocol, and sends a response's
	 * entity and an Object inside the body.
	 * 
	 * @param request{HttpServletRequest}
	 * @param id{long}
	 * @return coup {Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/company/getcoupon/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCoupon(@PathVariable("id") long id, HttpServletRequest request)
			throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			Coupon coup = cf.getCoupon(id);

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8).body(coup);

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP DELETE requests. This method is used to get a
	 * request with variable from the client over HTTP protocol, apply a method
	 * removeCoupon within the variable from the client. and sends a response's
	 * entity inside the body.
	 * 
	 * @param request{HttpServletRequest}
	 * @param id{long}
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/company/deletecoupon/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> deleteCoupon(@PathVariable("id") long id, HttpServletRequest request)
			throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			Coupon coupon = cf.getCoupon(id);
			cf.removeCoupon(coupon);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body("Coupon by title: " + coupon.getTitle() + " removed");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client over HTTP protocol, and sends a response's entity and an
	 * collection of all the coupons, inside the body
	 * 
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/company/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCoupons(HttpServletRequest request) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) getFacade(request);
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
	 * from the client with a variable of "type" over HTTP protocol, and sends a response's entity and an
	 * collection of all the coupons according the "type", inside the body, 
	 * 
	 * @param type{CouponType}
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/company/getallcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCouponsByType(@PathVariable("type") CouponType type,
			HttpServletRequest request) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getCouponByType(type));
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
	@RequestMapping(value = "/company/getallcouponsbyprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCouponsByPrice(@PathVariable("price") double price,
			HttpServletRequest request) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getCouponByPrice(price));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client with a variable of "date" over HTTP protocol, and sends a response's entity and an
	 * collection of all the coupons according the "date", inside the body
	 * 
	 * @param date{Date}
	 * @param request{HttpServletRequest}
	 * @return Collection{Coupon} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/company/getallcouponsbydate/{date}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCouponsByDate(@PathVariable("date") Date date,
			HttpServletRequest request) throws CouponSystemException {
		CompanyFacade cf = (CompanyFacade) getFacade(request);
		if (cf==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(cf.getCouponByEndDate(date));
		} catch (CouponSystemException e) {
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
	@RequestMapping(value = "/company/logout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
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
