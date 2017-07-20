package bot.Products;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductRepository {
	List<Map<String, Products>> productsByCategory = new ArrayList<Map<String, Products>>();
	List<Map<Integer, Products>> productsByStatus = new ArrayList<Map<Integer, Products>>();

	public ProductRepository() {

		Products p1 = new Products("Category1", 1, "product1");
		Products p2 = new Products("Category1", 0, "product2");
		Products p3 = new Products("Category1", 1, "product3");
		Products p4 = new Products("Category2", 0, "product4");
		Products p5 = new Products("Category3", 0, "product5");
		Products p6 = new Products("Category3", 1, "product6");
		Products p7 = new Products("Category2", 1, "product7");

		Map<String, Products> pc1 = new HashMap<String, Products>();
		Map<String, Products> pc2 = new HashMap<String, Products>();
		Map<String, Products> pc3 = new HashMap<String, Products>();
		Map<String, Products> pc4 = new HashMap<String, Products>();
		Map<String, Products> pc5 = new HashMap<String, Products>();
		Map<String, Products> pc6 = new HashMap<String, Products>();
		Map<String, Products> pc7 = new HashMap<String, Products>();

		pc1.put(p1.getCategory(), p1);
		pc2.put(p2.getCategory(), p2);
		pc3.put(p3.getCategory(), p3);
		pc4.put(p4.getCategory(), p4);
		pc5.put(p5.getCategory(), p5);
		pc6.put(p6.getCategory(), p6);
		pc7.put(p7.getCategory(), p7);

		productsByCategory.add(pc1);
		productsByCategory.add(pc2);
		productsByCategory.add(pc3);
		productsByCategory.add(pc4);
		productsByCategory.add(pc5);
		productsByCategory.add(pc6);
		productsByCategory.add(pc7);

		Map<Integer, Products> ps1 = new HashMap<Integer, Products>();
		Map<Integer, Products> ps2 = new HashMap<Integer, Products>();
		Map<Integer, Products> ps3 = new HashMap<Integer, Products>();
		Map<Integer, Products> ps4 = new HashMap<Integer, Products>();
		Map<Integer, Products> ps5 = new HashMap<Integer, Products>();
		Map<Integer, Products> ps6 = new HashMap<Integer, Products>();
		Map<Integer, Products> ps7 = new HashMap<Integer, Products>();

		ps1.put(p1.getStatus(), p1);
		ps2.put(p2.getStatus(), p2);
		ps3.put(p3.getStatus(), p3);
		ps4.put(p4.getStatus(), p4);
		ps5.put(p5.getStatus(), p5);
		ps6.put(p6.getStatus(), p6);
		ps7.put(p7.getStatus(), p7);

		productsByStatus.add(ps1);
		productsByStatus.add(ps2);
		productsByStatus.add(ps3);
		productsByStatus.add(ps4);
		productsByStatus.add(ps5);
		productsByStatus.add(ps6);
		productsByStatus.add(ps7);

	}

	public List getProductByCategory(String category) {
		Products p = null;
		List<Products> list1 = new ArrayList<>();
		for (int i = 0; i < productsByCategory.size(); i++) {
			long key = 0;
			for (Map.Entry<String, Products> entry : productsByCategory.get(i).entrySet()) {
				if (category.equals(entry.getKey())) {
					p = entry.getValue();
					list1.add(p);
				}
			}
		}
		return list1;
	}

	public List getProductByStatus(int status) {
		Products p = null;
		List<Products> list2 = new ArrayList<>();
		for (int i = 0; i < productsByStatus.size(); i++) {
			long key = 0;
			for (Map.Entry<Integer, Products> entry : productsByStatus.get(i).entrySet()) {
			///	System.out.println("In for loop");
				if (status==(entry.getKey())) {
			//		System.out.println("in if");
					p = entry.getValue();
					list2.add(p);
				}
			}
		}
		//System.out.println("in the method");
		return list2;
	}

}
