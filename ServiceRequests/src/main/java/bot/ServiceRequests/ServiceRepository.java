package bot.ServiceRequests;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ServiceRepository {
	List<Map<Long, ServiceRequests>> servicesById = new ArrayList<Map<Long, ServiceRequests>>();
	List<Map<String, ServiceRequests>> servicesByDate = new ArrayList<Map<String, ServiceRequests>>();
	List<Map<String, ServiceRequests>> servicesByProduct = new ArrayList<Map<String, ServiceRequests>>();
	List<Map<String, ServiceRequests>> servicesByAccountNumber = new ArrayList<Map<String, ServiceRequests>>();


	public ServiceRepository() {
		ServiceRequests s1= new ServiceRequests(101,"10-JAN-2016","Product1","4000002142");
		ServiceRequests s2= new ServiceRequests(102,"06-OCT-2016","Product2","4000002142");
		ServiceRequests s3= new ServiceRequests(103,"25-NOV-2016","Product1","4000002144");
		ServiceRequests s4= new ServiceRequests(104,"18-SEP-2016","Product1","4000002144");
		ServiceRequests s5= new ServiceRequests(105,"10-JAN-2016","Product2","4000002146");
		//Service Requests by Date
		Map<String, ServiceRequests> sr1 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sr2 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sr3 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sr4 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sr5 = new HashMap<String, ServiceRequests>();
		
		sr1.put(s1.getDate(), s1);
		sr2.put(s2.getDate(), s2);
		sr3.put(s3.getDate(), s3);
		sr4.put(s4.getDate(), s4);
		sr5.put(s5.getDate(), s5);

		servicesByDate.add(sr1);
		servicesByDate.add(sr2);
		servicesByDate.add(sr3);
		servicesByDate.add(sr4);
		servicesByDate.add(sr5);
		//Service Requests by Service ID
		Map<Long, ServiceRequests> r1 = new HashMap<Long, ServiceRequests>();
		Map<Long, ServiceRequests> r2 = new HashMap<Long, ServiceRequests>();
		Map<Long, ServiceRequests> r3 = new HashMap<Long, ServiceRequests>();
		Map<Long, ServiceRequests> r4 = new HashMap<Long, ServiceRequests>();
		Map<Long, ServiceRequests> r5 = new HashMap<Long, ServiceRequests>();

		r1.put(s1.getServiceId(), s1);
		r2.put(s2.getServiceId(), s2);
		r3.put(s3.getServiceId(), s3);
		r4.put(s4.getServiceId(), s4);
		r5.put(s5.getServiceId(), s5);
		servicesById.add(r1);
		servicesById.add(r2);
		servicesById.add(r3);
		servicesById.add(r4);
		servicesById.add(r5);

		//Services by Product
		Map<String, ServiceRequests> sp1 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sp2 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sp3 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sp4 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sp5 = new HashMap<String, ServiceRequests>();
		
		sp1.put(s1.getProduct(), s1);
		sp2.put(s2.getProduct(), s2);
		sp3.put(s3.getProduct(), s3);
		sp4.put(s4.getProduct(), s4);
		sp5.put(s5.getProduct(), s5);
		
		servicesByProduct.add(sp1);
		servicesByProduct.add(sp2);
		servicesByProduct.add(sp3);
		servicesByProduct.add(sp4);
		servicesByProduct.add(sp5);
		
		//Services by AccountNumber
		
		Map<String, ServiceRequests> sn1 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sn2 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sn3 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sn4 = new HashMap<String, ServiceRequests>();
		Map<String, ServiceRequests> sn5 = new HashMap<String, ServiceRequests>();
		
		sn1.put(s1.getAccountNumber(), s1);
		sn2.put(s2.getAccountNumber(), s2);
		sn3.put(s3.getAccountNumber(), s3);
		sn4.put(s4.getAccountNumber(), s4);
		sn5.put(s5.getAccountNumber(), s5);
		
		servicesByAccountNumber.add(sn1);
		servicesByAccountNumber.add(sn2);
		servicesByAccountNumber.add(sn3);
		servicesByAccountNumber.add(sn4);
		servicesByAccountNumber.add(sn5);
		
	}

	public List getServiceByDate(String date) {
		ServiceRequests s = null;
		List<ServiceRequests> list= new ArrayList<>();
		for (int i = 0; i < servicesByDate.size(); i++) {
			long key = 0;
			for (Map.Entry<String, ServiceRequests> entry : servicesByDate.get(i).entrySet()) {
				if (date.equals(entry.getKey())) {
					s = entry.getValue();
					list.add(s);
				}
			}
		}
		return list;
	}

	public List getServiceById(long serviceId) {
		ServiceRequests s = null;
		List<ServiceRequests> list= new ArrayList<>();
		for (int i = 0; i < servicesById.size(); i++) {
			long key = 0;
			for (Map.Entry<Long, ServiceRequests> entry : servicesById.get(i).entrySet()) {
				if (serviceId==(entry.getKey())) {
					s = entry.getValue();
					list.add(s);
				}
			}
		}
		return list;
	}

	

	public List getServiceByAccountNumber(String accountNumber) {
		ServiceRequests s = null;
		List<ServiceRequests> list= new ArrayList<>();
		for (int i = 0; i < servicesByAccountNumber.size(); i++) {
			long key = 0;
			for (Map.Entry<String, ServiceRequests> entry : servicesByAccountNumber.get(i).entrySet()) {
				if (accountNumber.equals((entry.getKey()))) {
					s = entry.getValue();
					list.add(s);
				}
			}
		}
		return list;
	}

	public List getServiceByProduct(String product) {
		ServiceRequests s = null;
		List<ServiceRequests> list= new ArrayList<>();
		for (int i = 0; i < servicesByProduct.size(); i++) {
			long key = 0;
			for (Map.Entry<String, ServiceRequests> entry : servicesByProduct.get(i).entrySet()) {
				if (product.equals((entry.getKey()))) {
					s = entry.getValue();
					list.add(s);
				}
			}
		}
		return list;
	}

	
}
