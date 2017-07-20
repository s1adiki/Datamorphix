package bot.Branches;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/Branch")

@RestController
public class BranchController {
	private BranchRepository repository;

	public BranchController() {
		repository = new BranchRepository();
	}

	@RequestMapping(value = "/getBranchByZipcode", method = RequestMethod.GET)
	public List getBranchByZipcode(@RequestParam(value = "zipcode", required = true) Long zipcode) {
		return repository.getBranchByZipcode(zipcode);
	}
	@RequestMapping("/getallBranches")
	public List getallBranches(){
		return repository.getallBranches();
	}
	@RequestMapping(value = "/getBranchByBranchId", method = RequestMethod.GET)
	public List getBranchByBranchId(@RequestParam(value = "branchID", required = true) long branchID) {
		return repository.getBranchByBranchId(branchID);
	}
	
}
