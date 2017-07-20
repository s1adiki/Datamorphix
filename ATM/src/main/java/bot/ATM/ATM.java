package bot.ATM;

public class ATM {

		private  String atm_name="";
		private long zipcode=0;
		private  String city_name="";
	
		
		 public ATM(String atm_name, long zipcode, String city_name) {
			super();
			this.atm_name = atm_name;
			this.zipcode = zipcode;
			this.city_name = city_name;
		}


		public String getAtm_name() {
			return atm_name;
		}


		public long getZipcode() {
			return zipcode;
		}


		public String getCity_name() {
			return city_name;
		}


		public void setAtm_name(String atm_name) {
			this.atm_name = atm_name;
		}


		public void setZipcode(long zipcode) {
			this.zipcode = zipcode;
		}


		public void setCity_name(String city_name) {
			this.city_name = city_name;
		}


		@Override
		    public String toString() {
		        return String.format(
		                "ATM[zipcode=%d, atm_name='%s', city_name='%s']",
		                zipcode, atm_name, city_name);
		    }

}
