package bootcamp.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bootcamp.dao.BayDao;


@RestController
public class BayController {
	
	@Autowired
	BayDao bayDao;

    
    @RequestMapping("/getBay")
    public void insertBay() {
    	bayDao.getMasterBays();
    }
}
