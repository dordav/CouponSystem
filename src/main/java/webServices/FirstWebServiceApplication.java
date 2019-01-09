package webServices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * this is the main class,
 * here the app get start by using the 
 * @author Dorda
 *
 */
@SpringBootApplication
public class FirstWebServiceApplication extends SpringBootServletInitializer{

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(FirstWebServiceApplication.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(FirstWebServiceApplication.class, args);

	}
}
