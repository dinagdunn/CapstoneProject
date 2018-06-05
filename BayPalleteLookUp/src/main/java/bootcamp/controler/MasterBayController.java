package bootcamp.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bootcamp.dao.MasterBayDao;
import bootcamp.model.Bay;

@RestController
public class MasterBayController {
	
	@Autowired
	MasterBayDao masterBayDao;
	
  @RequestMapping("/getMasterBayList")
  public List<Bay> getMasterBayList() {
  	return masterBayDao.getMasterBayList();
  }

}
