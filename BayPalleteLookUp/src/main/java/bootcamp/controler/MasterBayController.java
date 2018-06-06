package bootcamp.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import bootcamp.dao.MasterBayDao;
import bootcamp.model.Bay;
import bootcamp.model.MasterBay;

@RestController
public class MasterBayController {
	
	@Autowired
	MasterBayDao masterBayDao;
	
  @RequestMapping("/getMasterBayList")
  public List<MasterBay> getMasterBayList() {
  	return masterBayDao.getMasterBayList();
  }
  
  //given masterbay ID return a masterbay object with it's dimentions and all the subbays listed.
  @RequestMapping(value = "/getMasterbayById", method = RequestMethod.GET   )
  public MasterBay getMasterbayById(@RequestParam("id") String id) {
	  return masterBayDao.getMasterbayById(id);
  }

}
