package bot.AccountServices;

import java.net.URI;

import javax.xml.ws.Response;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@RequestMapping("/Accounts")

@RestController
public class AccountsController {
	private AccountRepo repository;
	public AccountsController() {
		repository = new AccountRepo();
	}


	@RequestMapping(value = "/retrieveAccount", method = RequestMethod.GET)
	public Accounts retrieveAccount(@RequestParam(value = "custID", required = true) Long custID) {
		return repository.retrieveAccount(custID);
	}
//	@RequestMapping("/getallATMs")
//	public List getallATMs(){
//		return repository.getallATMs();
//	}
	@RequestMapping(value = "/retrieveAccountInfo", method = RequestMethod.GET)
	public AccountInfo retrieveAccountInfo(@RequestParam(value = "custID", required = true) Long custID, @RequestParam(value = "AccNum", required = true) String AccNum) {
		return repository.retrieveAccountInfo(custID,AccNum);
	}
	
	/*
		
	@RequestMapping(value="/createAccount", method=RequestMethod.POST)
	public ResponseEntity<?> createAccount(
			@PathVariable long customerID, @RequestBody AccountInfo newAccount) {

		AccountInfo info = repository.addAccount(customerID,newAccount);

		if (info != null){
			
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(info.getAccountNumber()).toUri();

		return ResponseEntity.created(location).build();
		} else
			return ResponseEntity.noContent().build();
	}

*/

}
