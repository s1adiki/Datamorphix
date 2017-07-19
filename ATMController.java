package bot.ATM;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/ATM")

@RestController
public class ATMController {
	private ATMRepo repository;

	public ATMController() {
		repository = new ATMRepo();
	}

	@RequestMapping(value = "/getATMbyZipcode", method = RequestMethod.GET)
	public List getATM(@RequestParam(value = "zipcode", required = true) Long zipcode) {
		return repository.getATM(zipcode);
	}
	@RequestMapping("/getallATMs")
	public List getallATMs(){
		return repository.getallATMs();
	}

}
