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

import beans.Company;
import beans.Customer;
import exceptions.CouponSystemException;
import facade.AdminFacade;

@RestController

/**
 * In this class there is all the Methods ("CRUD" operations) that a admin
 * account can get access to by request over http protocol from the cleintSide.
 * this class making use by "Http servlet request"
 * 
 */
public class AdminWebServices {

	private AdminFacade getFacade(HttpServletRequest request) {

		
			AdminFacade af = (AdminFacade) request.getSession().getAttribute("adminFacade");
			return af;
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * with variable from the client over HTTP protocol, and sends a response's
	 * entity and an Object inside the body
	 * 
	 * @param request{HttpServletRequest}
	 * @param id{long}
	 * @return cust {Customer} (Object), {ResponseEntity}
	 */
	@RequestMapping(value = "/admin/getcustomer/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCustomer(@PathVariable("id") long id, HttpServletRequest request)
			throws CouponSystemException {

		AdminFacade af = (AdminFacade) getFacade(request);
		if (af==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		
		try {

			Customer cust = af.getCustomer(id);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8).body(cust);

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}

	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * with variable from the client over HTTP protocol, and sends a response's
	 * entity and an Object inside the body.
	 * 
	 * @param request{HttpServletRequest}
	 * @param id{long}
	 * @return comp {Company} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/admin/getcompany/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCompany(@PathVariable("id") long id, HttpServletRequest request)
			throws CouponSystemException {
		AdminFacade af = (AdminFacade) getFacade(request);
		if (af==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			Company comp = af.getCompany(id);

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8).body(comp);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP POST requests. This method is used to get a request
	 * with customer object from the client over HTTP protocol, apply the method
	 * "createCompany", and sends a response's entity inside the body, over HTTP
	 * protocol.
	 * 
	 * @param company{Company}
	 * @param request{HttpServletRequest}
	 * 
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/admin/createcompany", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCompany(@RequestBody Company company, HttpServletRequest request)
			throws CouponSystemException {
		AdminFacade af = (AdminFacade) getFacade(request);
		if (af==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			af.createCompany(company);
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_MARKDOWN)
					.body("Company:" + company.getName() + " created!");

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());

		}
	}

	/**
	 * Method handling HTTP POST requests. This method is used to get a request
	 * with customer object from the client over HTTP protocol, apply the method
	 * "creatCustomer", and sends a response's entity inside the body, over HTTP
	 * protocol.
	 * 
	 * @param customer{Customer}.
	 * @param request{HttpServletRequest}
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/admin/createcustomer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCustomer(@RequestBody Customer customer,
			HttpServletRequest request) throws CouponSystemException {
		AdminFacade af = (AdminFacade) getFacade(request);
		if (af==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			af.creatCustomer(customer);
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_MARKDOWN)
					.body("Customer:" + customer.getName() + " created!");

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());

		}

	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client over HTTP protocol, and sends a response's entity and an
	 * collection of all the customers, inside the body
	 * 
	 * @param request{HttpServletRequest}
	 * @return Collection{Customer} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/admin/getallcustomers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCustomers(HttpServletRequest request) throws CouponSystemException {
		try {
			AdminFacade af = (AdminFacade) getFacade(request);
			if (af==null) {
				ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
			}
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(af.getAllCustomers());

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client over HTTP protocol, and sends a response's entity and an
	 * collection of all the companies, inside the body
	 * 
	 * @param request{HttpServletRequest}
	 * @return Collection{Company} (Object), ResponseEntity.
	 */
	@RequestMapping(value = "/admin/getallcompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCompanies(HttpServletRequest request) throws CouponSystemException {
		try {
			AdminFacade af = (AdminFacade) getFacade(request);
			if (af==null) {
				ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
			}
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(af.getAllCompanies());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
					.body(e.getMessage());
		}

	}

	/**
	 * Method handling HTTP DELETE requests. This method is used to get a
	 * request with variable from the client over HTTP protocol, apply a method
	 * removeCompany within the variable from the client. and sends a response's
	 * entity inside the body.
	 * 
	 * @param id{long}
	 * @param request{HttpServletRequest}
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/admin/removecompany/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCompany(@PathVariable("id") long id, HttpServletRequest request)
			throws CouponSystemException {
		try {
			AdminFacade af = (AdminFacade) getFacade(request);
			if (af==null) {
				ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
			}
			Company company = af.getCompany(id);

			af.removeCompany(id);

			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body("The Company: " + company.getName() + " removed!");

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}

	}

	/**
	 * Method handling HTTP DELETE requests. This method is used to get a
	 * request with variable from the client over HTTP protocol, apply a method
	 * removeCustomer within the variable from the client. and sends a
	 * response's entity inside the body.
	 * 
	 * @param request{HttpServletRequest}
	 * @param id{long}
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/admin/removecustomer/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCustomer(@PathVariable("id") long id, HttpServletRequest request)
			throws CouponSystemException {
		try {
			AdminFacade af = (AdminFacade) getFacade(request);
			if (af==null) {
				ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
			}
			Customer customer = af.getCustomer(id);
			af.removeCustomer(customer);
			;
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body("The Customer: " + customer.getName() + " removed!");

		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}

	}

	/**
	 * Method handling HTTP PUT requests. This method is used to get a request
	 * with customer object from the client over HTTP protocol, apply the method
	 * "updateCustomer" and sends a response's entity inside the body, over HTTP
	 * protocol.
	 * 
	 * @param request{HttpServletRequest}
	 * @param customer{Customer}
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/admin/updatecustomer", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCustomer(@RequestBody Customer customer,
			HttpServletRequest request) throws CouponSystemException {
		AdminFacade af = (AdminFacade) getFacade(request);
		if (af==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			af.updateCustomer(customer);
			return ResponseEntity.status(HttpStatus.ACCEPTED).contentType(MediaType.APPLICATION_PROBLEM_JSON_UTF8)
					.body("Customer by ID: " + customer.getId() + " updated successfully");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP PUT requests. This method is used to get a request
	 * with company object from the client over HTTP protocol, apply the method
	 * "updateCompany" and sends a response's entity inside the body, over HTTP
	 * protocol.
	 * 
	 * @param request{HttpServletRequest}
	 * @param customer{Customer}
	 * @return ResponseEntity.
	 */
	@RequestMapping(value = "/admin/updatecompany", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCompany(@RequestBody Company company, HttpServletRequest request)
			throws CouponSystemException {
		AdminFacade af = (AdminFacade) getFacade(request);
		if (af==null) {
			ResponseEntity.status(HttpStatus.FORBIDDEN).body("Request timed out, please login!");
		}
		try {
			af.updateCompany(company);
			return ResponseEntity.status(HttpStatus.ACCEPTED).contentType(MediaType.APPLICATION_PROBLEM_JSON_UTF8)
					.body("Company by ID: " + company.getId() + " updated successfully");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.APPLICATION_JSON_UTF8)
					.body(e.getMessage());
		}
	}

	/**
	 * Method handling HTTP GET requests. This method is used to get a request
	 * from the client,it clears all the attributes that on the session
	 * (includes the cookies), and clear the facade.
	 * 
	 * @param request{HttpServletRequest}
	 */
	@RequestMapping(value = "/admin/logout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
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
