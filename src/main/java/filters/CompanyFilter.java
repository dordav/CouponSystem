package filters;

import java.io.IOException;
/**
* <h1>CompanyFilter</h1>
* Inside the CompanyFilter there is a method called "doFilter",
* in this method wrote the definitions of actions sequence  that the filter performs
*/

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import facade.CompanyFacade;
/**
* <h1>CompanyFilter</h1>
* Inside the CompanyFilter there is a method called "doFilter",
* in this method wrote the definitions of actions sequence  that the filter performs
*/
public class CompanyFilter implements Filter{

	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		
		if (req.getSession().getAttribute("companyFacade")==null) {
			res.sendRedirect("https://coupon-system-by-dor.herokuapp.com/login.html");
		} else if(!(req.getSession().getAttribute("companyFacade") instanceof CompanyFacade)){
			res.sendRedirect("https://coupon-system-by-dor.herokuapp.com/login.html");
		}else {
			chain.doFilter(request, response);
		}
		
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}
}
