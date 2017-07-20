package bot.AccountServices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan
@EnableAutoConfiguration
public class AccountsApplication {
	public static void main(String[] args) {
		System.out.println("11111111");
		SpringApplication.run(AccountsApplication.class, args);
		System.out.println("22222222222");
	}
}
