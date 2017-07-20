package bot.ProductFeatures;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductRepository {
	List<Map<Double, Product>> featuresByForex = new ArrayList<Map<Double, Product>>();
	List<Map<String, Product>> featuresByDeposit = new ArrayList<Map<String, Product>>();
	List<Map<Double, Product>> featuresByRate = new ArrayList<Map<Double, Product>>();
	List<Map<String, Product>> featuresByName = new ArrayList<Map<String, Product>>();

	public ProductRepository() {

		Product p1 = new Product(10.9, "Product1", "Fixed", 65.47);
		Product p2 = new Product(11.9, "Product2", "Recurring", 65.47);
		Product p3 = new Product(9.0, "Product3", "Recurring", 65.47);
		Product p4 = new Product(10.9, "Product4", "Fixed", 65.47);

		// features by Name of the service or product
		Map<String, Product> pn1 = new HashMap<String, Product>();
		Map<String, Product> pn2 = new HashMap<String, Product>();
		Map<String, Product> pn3 = new HashMap<String, Product>();
		Map<String, Product> pn4 = new HashMap<String, Product>();

		pn1.put(p1.getProductName(), p1);
		pn2.put(p2.getProductName(), p2);
		pn3.put(p3.getProductName(), p3);
		pn4.put(p4.getProductName(), p4);

		featuresByName.add(pn1);
		featuresByName.add(pn2);
		featuresByName.add(pn3);
		featuresByName.add(pn4);
		// features by deposit type
		Map<String, Product> pd1 = new HashMap<String, Product>();
		Map<String, Product> pd2 = new HashMap<String, Product>();
		Map<String, Product> pd3 = new HashMap<String, Product>();
		Map<String, Product> pd4 = new HashMap<String, Product>();

		pd1.put(p1.getDeposit(), p1);
		pd2.put(p2.getDeposit(), p2);
		pd3.put(p3.getDeposit(), p3);
		pd4.put(p4.getDeposit(), p4);

		featuresByDeposit.add(pd1);
		featuresByDeposit.add(pd2);
		featuresByDeposit.add(pd3);
		featuresByDeposit.add(pd4);

		// features by rate of interest
		Map<Double, Product> i1 = new HashMap<Double, Product>();
		Map<Double, Product> i2 = new HashMap<Double, Product>();
		Map<Double, Product> i3 = new HashMap<Double, Product>();
		Map<Double, Product> i4 = new HashMap<Double, Product>();

		i1.put(p1.getRateOfInterest(), p1);
		i2.put(p2.getRateOfInterest(), p2);
		i3.put(p3.getRateOfInterest(), p3);
		i4.put(p4.getRateOfInterest(), p4);

		featuresByRate.add(i1);
		featuresByRate.add(i2);
		featuresByRate.add(i3);
		featuresByRate.add(i4);

		// features by Forex rate

		Map<Double, Product> r1 = new HashMap<Double, Product>();
		Map<Double, Product> r2 = new HashMap<Double, Product>();
		Map<Double, Product> r3 = new HashMap<Double, Product>();
		Map<Double, Product> r4 = new HashMap<Double, Product>();

		r1.put(p1.getRateOfInterest(), p1);
		r2.put(p2.getRateOfInterest(), p2);
		r3.put(p3.getRateOfInterest(), p3);
		r4.put(p4.getRateOfInterest(), p4);

		featuresByForex.add(r1);
		featuresByForex.add(r2);
		featuresByForex.add(r3);
		featuresByForex.add(r4);
	}


	public List getFeatureByName(String service) {
		Product p = null;
		List<Product> list1 = new ArrayList<>();
		for (int i = 0; i < featuresByName.size(); i++) {
			long key = 0;
			for (Map.Entry<String, Product> entry : featuresByName.get(i).entrySet()) {
				if (service.equals(entry.getKey())) {
					p = entry.getValue();
					list1.add(p);
				}
			}
		}
		return list1;
	}

	public List getFeatureByDeposit(String deposit) {
		Product p = null;
		List<Product> list1 = new ArrayList<>();
		for (int i = 0; i < featuresByDeposit.size(); i++) {
			long key = 0;
			for (Map.Entry<String, Product> entry : featuresByDeposit.get(i).entrySet()) {
				if (deposit.equals(entry.getKey())) {
					p = entry.getValue();
					list1.add(p);
				}
			}
		}
		return list1;
	}

	public List getFeatureByInterest(double rate) {
		Product p = null;
		List<Product> list1 = new ArrayList<>();
		for (int i = 0; i < featuresByRate.size(); i++) {
			long key = 0;
			for (Map.Entry<Double, Product> entry : featuresByRate.get(i).entrySet()) {
				if (rate==(entry.getKey())) {
					p = entry.getValue();
					list1.add(p);
				}
			}
		}
		return list1;
	}

	public List getFeatureByForex(double forex) {
		Product p = null;
		List<Product> list1 = new ArrayList<>();
		for (int i = 0; i < featuresByForex.size(); i++) {
			long key = 0;
			for (Map.Entry<Double, Product> entry : featuresByForex.get(i).entrySet()) {
				if (forex==(entry.getKey())) {
					p = entry.getValue();
					list1.add(p);
				}
			}
		}
		return list1;
	}

}
