package bot.ProductFeatures;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan
@EnableAutoConfiguration
public class ProductApplication extends SpringBootServletInitializer {
	public static void main(String[] args) {
		SpringApplication.run(ProductApplication.class, args);
	}
}
