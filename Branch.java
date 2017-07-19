package bot.Branches;

public class Branch {

		private  String bank_name="";
		private long zipcode=0;
		private  String city_name="";
		private long branchID=0;
		public String getBank_name() {
			return bank_name;
		}
		public long getZipcode() {
			return zipcode;
		}
		public String getCity_name() {
			return city_name;
		}
		public long getBranchID() {
			return branchID;
		}
		public void setBank_name(String bank_name) {
			this.bank_name = bank_name;
		}
		public void setZipcode(long zipcode) {
			this.zipcode = zipcode;
		}
		public void setCity_name(String city_name) {
			this.city_name = city_name;
		}
		public void setBranchID(long branchID) {
			this.branchID = branchID;
		}
		
		public Branch(String bank_name, long zipcode, String city_name, long branchID) {
			super();
			this.bank_name = bank_name;
			this.zipcode = zipcode;
			this.city_name = city_name;
			this.branchID = branchID;
		}
		@Override
		public String toString() {
			return "Branch [bank_name=" + bank_name + ", zipcode=" + zipcode + ", city_name=" + city_name
					+ ", branchID=" + branchID + "]";
		}
	
		
		 
}
