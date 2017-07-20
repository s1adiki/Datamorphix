package bot.AccountServices;

public class AccountInfo {
	private String AccountNumber;
	private String AccountType;
	
	public String getAccountNumber() {
		return AccountNumber;
	}
	public String getAccountType() {
		return AccountType;
	}
	public void setAccountNumber(String accountNumber) {
		AccountNumber = accountNumber;
	}
	public void setAccountType(String accountType) {
		AccountType = accountType;
	}
	public AccountInfo(String accountNumber, String accountType) {
		super();
		AccountNumber = accountNumber;
		AccountType = accountType;
	}

}
