package webServices;

/**
* <h1>FilterRegistration</h1>
* The FilterRegistration's class designed to define custom filters by Beans
* <p>
* Inside the Beans there are defined Filters and the Invocation Order
* */


import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import filters.AdminFilter;
import filters.CompanyFilter;
import filters.CustomerFilter;

@Configuration
public class FilterRegistration {
	
	@Bean
	public FilterRegistrationBean<AdminFilter> FilterRegistrationAdmin(){
	    FilterRegistrationBean<AdminFilter> registrationBean 
	      = new FilterRegistrationBean<>();
	         
	    registrationBean.setFilter(new AdminFilter());
	    registrationBean.addUrlPatterns("/admin/*");
	         
	    return registrationBean;    
	}
	
	@Bean
	public FilterRegistrationBean<CompanyFilter> FilterRegistrationCompany(){
	    FilterRegistrationBean<CompanyFilter> registrationBean 
	      = new FilterRegistrationBean<>();
	         
	    registrationBean.setFilter(new CompanyFilter());
	    registrationBean.addUrlPatterns("/company/*");
	         
	    return registrationBean;    
	}

	@Bean
	public FilterRegistrationBean<CustomerFilter> FilterRegistrationCusomer(){
	    FilterRegistrationBean<CustomerFilter> registrationBean 
	      = new FilterRegistrationBean<>();
	         
	    registrationBean.setFilter(new CustomerFilter());
	    registrationBean.addUrlPatterns("/customer/*");
	         
	    return registrationBean;    
	}


}
