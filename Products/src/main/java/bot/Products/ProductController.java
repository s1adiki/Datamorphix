package bot.Products;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/Products")

@RestController
public class ProductController {
	private ProductRepository repository;

	public ProductController() {
		repository = new ProductRepository();
	}

	@RequestMapping(value = "/getProductByCategory", method = RequestMethod.GET)
	public List getProductByCategory(@RequestParam(value = "category", required = true) String category) {
		return repository.getProductByCategory(category);
	}
	
	@RequestMapping(value = "/getProductByStatus", method = RequestMethod.GET)
	public List getProductByStatus(@RequestParam(value = "status", required = true) int status) {
		return repository.getProductByStatus(status);
	}

}
