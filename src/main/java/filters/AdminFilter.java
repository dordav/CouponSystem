package filters;


import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import facade.AdminFacade;
/**
* <h1>AdminFilter</h1>
* Inside the AdminFilter there is a method called "doFilter",
* in this method wrote the definitions of actions sequence  that the filter performs
*/

public class AdminFilter implements Filter{


	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		
		if (req.getSession().getAttribute("adminFacade")==null) {
		
			res.sendRedirect("http://localhost:8080/login.html");
		} else if(!(req.getSession().getAttribute("adminFacade") instanceof AdminFacade)){
			
			res.sendRedirect("http://localhost:8080/login.html");
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
