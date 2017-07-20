package bot.AccountServices;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AccountRepo {
	private static List<Accounts> accounts = new ArrayList<>();

	public AccountRepo() {

		AccountInfo info1 = new AccountInfo("40000001", "Savings");
		AccountInfo info2 = new AccountInfo("40000002", "Loan");
		AccountInfo info3 = new AccountInfo("40000003", "Savings");
		AccountInfo info4 = new AccountInfo("40000004", "Loan");
		AccountInfo info5 = new AccountInfo("40000005", "Loan");
		AccountInfo info6 = new AccountInfo("40000006", "Savings");

		Accounts a1 = new Accounts(10001, "F1", "l1", "Add1", "8516324500",
				new ArrayList<>(Arrays.asList(info1, info2)));
		Accounts a2 = new Accounts(10002, "F2", "l2", "Add2", "9846378100",
				new ArrayList<>(Arrays.asList(info3, info4)));
		accounts.add(a1);
		accounts.add(a2);

	}

	public Accounts retrieveAccount(long custID) {
		for (Accounts a : accounts) {
			if (a.getCustomerID() == (custID)) {
				return a;
			}
		}
		return null;
	}

	public AccountInfo retrieveAccountInfo(long custID, String AccNumber) {
		Accounts account = retrieveAccount(custID);

		if (account == null) {
			return null;
		}

		for (AccountInfo info : account.getInfo()) {
			if (info.getAccountNumber().equals(AccNumber)) {
				return info;
			}
		}

		return null;
	}

	/*public AccountInfo addAccount(long customerID, AccountInfo info) {
		Accounts a = retrieveAccount(customerID);

		if (a == null) {
			return null;
		}

		String randomId = new BigInteger(130, random).toString(32);
		course.setId(randomId);

		student.getCourses().add(course);

		return course;
	}*/
	

}
