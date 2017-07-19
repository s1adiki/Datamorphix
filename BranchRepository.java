package bot.Branches;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BranchRepository {
	 List<Map<Long, Branch>> byZip = new ArrayList<Map<Long, Branch>>();
	 List<Map<Long, Branch>> byId = new ArrayList<Map<Long, Branch>>();
	public BranchRepository() {
		
		Branch b1 = new Branch("ICICI", 500018, "MotiNagar",2541);
		Branch b2 = new Branch("SBI", 500021, "Dilsukhnagar",1456);
		Branch b3 = new Branch("ICICI", 500031, "Kukatpally",7852);
		Branch b4 = new Branch("ICICI", 500018, "Kukatpally",2014);

		Map<Long, Branch> item1 = new HashMap<Long, Branch>();
		Map<Long, Branch> item2 = new HashMap<Long, Branch>();
		Map<Long, Branch> item3 = new HashMap<Long, Branch>();
		Map<Long, Branch> item4 = new HashMap<Long, Branch>();

		item1.put(b1.getZipcode(), b1);
		item2.put(b2.getZipcode(), b2);
		item3.put(b3.getZipcode(), b3);
		item4.put(b4.getZipcode(), b4);

		byZip.add(item1);
		byZip.add(item2);
		byZip.add(item3);
		byZip.add(item4);
		
		Map<Long, Branch> id1 = new HashMap<Long, Branch>();
		Map<Long, Branch> id2 = new HashMap<Long, Branch>();
		Map<Long, Branch> id3 = new HashMap<Long, Branch>();
		Map<Long, Branch> id4 = new HashMap<Long, Branch>();

		id1.put(b1.getBranchID(), b1);
		id2.put(b2.getBranchID(), b2);
		id3.put(b3.getBranchID(), b3);
		id4.put(b4.getBranchID(), b4);
		
		byId.add(id1);
		byId.add(id2);
		byId.add(id3);
		byId.add(id4);
	}

	public List getBranchByZipcode(Long zipcode) {
		Branch b = null;
		List<Branch> finallist=new ArrayList<>();
		//System.out.println(zipcode);
	//	System.out.println("=============");
		for (int i = 0; i < byZip.size(); i++) {
			long key = 0;
			for (Map.Entry<Long, Branch> entry : byZip.get(i).entrySet()) {
				//System.out.println(entry.getKey());
				if (zipcode.equals(entry.getKey())) {
					b = entry.getValue();
					finallist.add(b);
				}
			}
			//System.out.println(finallist);
		}

		return finallist;
	}

	public List getallBranches(){
		return byZip;
	}
	
	public List getBranchByBranchId(long branchID) {
		System.out.println("In method");
		Branch b1 = null;
		List<Branch> newlist=new ArrayList<>();
		for (int i = 0; i < byId.size(); i++) {
			System.out.println("in for");
			long key = 0;
			for (Map.Entry<Long, Branch> entry : byId.get(i).entrySet()) {
				System.out.println("in inner for");
				if (branchID==entry.getKey()) {
					System.out.println("in if");
					b1 = entry.getValue();
					newlist.add(b1);
				}
			}
		}

		return newlist;
	}
}
