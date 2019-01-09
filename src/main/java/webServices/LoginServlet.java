package webServices;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import beans.ClientType;
import facade.AdminFacade;
import facade.CompanyFacade;
import facade.CouponClientFacade;
import facade.CustomerFacade;
import singleton.CouponSystem;

/**
 * <h1>LoginServlet</h1> The LoginServlet class meant creates an
 * HttpServletRequest object and passes it as an argument to the
 * RestController's service methods (doGet, doPost, etc).
 */
@Controller
public class LoginServlet {
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String doPostRedirect(

			@RequestParam(value = "name") String userName, @RequestParam(value = "pwd") String password,
			@RequestParam(value = "usertype") ClientType type, HttpServletRequest request) {

		CouponClientFacade cf = (new CouponSystem()).Login(userName, password, type); 
		if (cf == null) {
			return "redirect:https://coupon-system-by-dor.herokuapp.com/login.html";
		}

		request.getSession().setAttribute("facade", cf);

		switch (type) {
		case admin:
			AdminFacade adminFacade = (AdminFacade) cf;
			request.getSession().setAttribute("adminFacade", adminFacade);
			return "redirect:https://coupon-system-by-dor.herokuapp.com/admin/index.html";
		case company:
			CompanyFacade companyFacade = (CompanyFacade) cf;
			request.getSession().setAttribute("companyFacade", companyFacade);
			return "redirect:https://coupon-system-by-dor.herokuapp.com/company/index.html";
		case customer:
			CustomerFacade customerFacade = (CustomerFacade) cf;
			request.getSession().setAttribute("customerFacade", customerFacade);
			return "redirect:https://coupon-system-by-dor.herokuapp.com/customer/index.html";
		}

		return "redirect:https://coupon-system-by-dor.herokuapp.com/login.html";
	}

}
