package bot.ProductFeatures;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/ProductFeatures")

@RestController
public class ProductController {
	private ProductRepository repository;

	public ProductController() {
		repository = new ProductRepository();
	}

	@RequestMapping(value = "/getFeatureByName", method = RequestMethod.GET)
	public List getFeatureByName(@RequestParam(value = "category", required = true) String service) {
		return repository.getFeatureByName(service);
	}

	@RequestMapping(value = "/getFeatureByDeposit", method = RequestMethod.GET)
	public List getFeatureByDeposit(@RequestParam(value = "status", required = true) String deposit) {
		return repository.getFeatureByDeposit(deposit);
	}

	@RequestMapping(value = "/getFeatureByInterest", method = RequestMethod.GET)
	public List getFeatureByInterest(@RequestParam(value = "status", required = true) double rate) {
		return repository.getFeatureByInterest(rate);
	}

	@RequestMapping(value = "/getFeatureByForex", method = RequestMethod.GET)
	public List getFeatureByForex(@RequestParam(value = "status", required = true) double forex) {
		return repository.getFeatureByForex(forex);
	}
}
