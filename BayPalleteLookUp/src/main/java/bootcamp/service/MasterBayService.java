package bootcamp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import bootcamp.dao.MasterBayDao;
import bootcamp.model.MasterBay;

@Component
public class MasterBayService {

	@Autowired
	MasterBayDao masterBayDao;
	

  public List<MasterBay> getMasterBayList() {
  	return masterBayDao.getMasterBayList();
  }
  
  public MasterBay getMasterbayById(int id) {
	  return masterBayDao.getMasterbayById(id);
  }
  
  public void addMasterBay(MasterBay masterBay) {
	  masterBayDao.addMasterBay(masterBay);
  }
  
  public void deleteMasterBay(String id) {
	  masterBayDao.deleteMasterBay(id);
  }
  
  public void editMasterBay(MasterBay masterBay) {
	  masterBayDao.editMasterBay(masterBay);
  }
	
}
