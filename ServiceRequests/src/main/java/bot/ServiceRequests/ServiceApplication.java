package bot.ServiceRequests;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan
@EnableAutoConfiguration
public class ServiceApplication extends SpringBootServletInitializer {
	public static void main(String[] args) {
		SpringApplication.run(ServiceApplication.class, args);
	}
}
