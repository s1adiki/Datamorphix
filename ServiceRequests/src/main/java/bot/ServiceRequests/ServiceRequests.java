package bot.ServiceRequests;

import java.util.Date;

public class ServiceRequests {

		private long ServiceId=0;
		private String date=null;
		private String product=null;
		private String AccountNumber=null;
		
		public long getServiceId() {
			return ServiceId;
		}
		public String getDate() {
			return date;
		}
		public String getProduct() {
			return product;
		}
		public String getAccountNumber() {
			return AccountNumber;
		}
		public void setServiceId(long serviceId) {
			ServiceId = serviceId;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public void setProduct(String product) {
			this.product = product;
		}
		public void setAccountNumber(String accountNumber) {
			AccountNumber = accountNumber;
		}
		public ServiceRequests(long serviceId, String date, String product, String accountNumber) {
			super();
			ServiceId = serviceId;
			this.date = date;
			this.product = product;
			AccountNumber = accountNumber;
		}
		
		
}
