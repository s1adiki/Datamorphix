package bot.ServiceRequests;

import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/Services")

@RestController
public class ServiceController {
	private ServiceRepository repository;

	public ServiceController() {
		repository = new ServiceRepository();
	}

	@RequestMapping(value = "/getServiceById", method = RequestMethod.GET)
	public List getServiceById(@RequestParam(value = "ServiceId", required = true) long ServiceId) {
		return repository.getServiceById(ServiceId);
	}

	@RequestMapping(value = "/getServiceByDate", method = RequestMethod.GET)
	public List getServiceByDate(@RequestParam(value = "date", required = true) String date) {
		return repository.getServiceByDate(date);
	}

	@RequestMapping(value = "/getServiceByProduct", method = RequestMethod.GET)
	public List getServiceByProduct(@RequestParam(value = "product", required = true) String product) {
		return repository.getServiceByProduct(product);
	}

	@RequestMapping(value = "/getServiceByAccountNumber", method = RequestMethod.GET)
	public List getServiceByAccountNumber(
			@RequestParam(value = "AccountNumber", required = true) String AccountNumber) {
		return repository.getServiceByAccountNumber(AccountNumber);
	}
}
