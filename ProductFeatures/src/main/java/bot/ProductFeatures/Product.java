package bot.ProductFeatures;

public class Product {

	private double rateOfInterest = 0;
	private String ProductName = null;
	private String deposit = null;
	private double forexRate = 0;
	
		public double getRateOfInterest() {
			return rateOfInterest;
		}
		public String getProductName() {
			return ProductName;
		}
		public String getDeposit() {
			return deposit;
		}
		public double getForexRate() {
			return forexRate;
		}
		public void setRateOfInterest(float rateOfInterest) {
			this.rateOfInterest = rateOfInterest;
		}
		public void setProductName(String productName) {
			ProductName = productName;
		}
		public void setDeposit(String deposit) {
			this.deposit = deposit;
		}
		public void setForexRate(float forexRate) {
			this.forexRate = forexRate;
		}
		public Product(double rateOfInterest, String productName, String deposit, double forexRate) {
			super();
			this.rateOfInterest = rateOfInterest;
			ProductName = productName;
			this.deposit = deposit;
			this.forexRate = forexRate;
		}
		
		
}
