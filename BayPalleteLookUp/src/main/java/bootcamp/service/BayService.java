package bootcamp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import bootcamp.dao.BayDao;
import bootcamp.dao.MasterBayDao;
import bootcamp.model.Bay;
import bootcamp.model.MasterBay;
import bootcamp.model.Message;

@Component
public class BayService {

	@Autowired
	BayDao bayDao;
	
	@Autowired
	MasterBayDao masterBayDao;
	
    
    public Message addBay(Bay bay) {
    	MasterBay masterBay = masterBayDao.getMasterbayById(bay.getMasterbay());
    	List<Bay> bayList = masterBay.getBayList();
    	int bayWidthSum=0;
    	for(Bay b: bayList) {
    		bayWidthSum += b.getWidth();
    	}
    	if(bayWidthSum > masterBay.getWidth()) {
    		return new Message("Bay widths are larger than masterbaybwidth");
    	}
    	bayDao.addBay(bay);
    	return new Message("Add successful");
    }
    
    public Bay getBayById(int id) {
    	return bayDao.getBayById(id);
    }
    
    public void editBay(Bay bay) {
    	bayDao.editBay(bay);
    }
     
    public void deleteBay(String id) {
    	bayDao.deleteBay(id);
    }
	
	}

