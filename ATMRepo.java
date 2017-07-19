package bot.ATM;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ATMRepo {
	 List<Map<Long, ATM>> Items = new ArrayList<Map<Long, ATM>>();
	public ATMRepo() {
		
		ATM a1 = new ATM("ICICI", 500018, "MotiNagar");
		ATM a2 = new ATM("SBI", 500021, "Dilsukhnagar");
		ATM a3 = new ATM("ICICI", 500031, "Kukatpally");
		ATM a4 = new ATM("ICICI", 500018, "Kukatpally");

		Map<Long, ATM> item1 = new HashMap<Long, ATM>();
		Map<Long, ATM> item2 = new HashMap<Long, ATM>();
		Map<Long, ATM> item3 = new HashMap<Long, ATM>();
		Map<Long, ATM> item4 = new HashMap<Long, ATM>();

		item1.put(a1.getZipcode(), a1);
		item2.put(a2.getZipcode(), a2);
		item3.put(a3.getZipcode(), a3);
		item4.put(a4.getZipcode(), a4);

		Items.add(item1);
		Items.add(item2);
		Items.add(item3);
		Items.add(item4);
	}

	public List getATM(Long zipcode) {
		ATM a = null;
		List<ATM> finallist=new ArrayList<>();
		for (int i = 0; i < Items.size(); i++) {
			long key = 0;
			for (Map.Entry<Long, ATM> entry : Items.get(i).entrySet()) {
				if (zipcode.equals(entry.getKey())) {
					a = entry.getValue();
					finallist.add(a);
				}
			}
		}

		return finallist;
	}

	public List getallATMs(){
		return Items;
	}
}
