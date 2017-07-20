package bot.Products;

public class Products {

		private String category=null;
		private int status=0;
		private String ProductName=null;
		
		public String getCategory() {
			return category;
		}
		public int getStatus() {
			return status;
		}
		public String getProductName() {
			return ProductName;
		}
		public void setCategory(String category) {
			this.category = category;
		}
		public void setStatus(int status) {
			this.status = status;
		}
		public void setProductName(String productName) {
			ProductName = productName;
		}
		public Products(String category, int status, String productName) {
			super();
			this.category = category;
			this.status = status;
			ProductName = productName;
		}
		
}
