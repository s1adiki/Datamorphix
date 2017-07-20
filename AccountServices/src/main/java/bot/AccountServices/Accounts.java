package bot.AccountServices;

import java.util.List;

public class Accounts {

	private long customerID;
	private String FirstName;
	private String LastName;
	private String address;
	private String ContactNumber;
	private List<AccountInfo> info;

	public Accounts() {
		super();
	}

	public long getCustomerID() {
		return customerID;
	}

	public String getFirstName() {
		return FirstName;
	}

	public String getLastName() {
		return LastName;
	}

	public String getAddress() {
		return address;
	}

	public String getContactNumber() {
		return ContactNumber;
	}

	public List<AccountInfo> getInfo() {
		return info;
	}

	public void setCustomerID(long customerID) {
		this.customerID = customerID;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setContactNumber(String contactNumber) {
		ContactNumber = contactNumber;
	}

	public void setInfo(List<AccountInfo> info) {
		this.info = info;
	}

	public Accounts(long customerID, String firstName, String lastName, String address, String contactNumber,
			List<AccountInfo> info) {
		super();
		this.customerID = customerID;
		FirstName = firstName;
		LastName = lastName;
		this.address = address;
		ContactNumber = contactNumber;
		this.info = info;
	}

}
