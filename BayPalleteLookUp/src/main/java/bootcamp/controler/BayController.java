package bootcamp.controler;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bootcamp.dao.BayDao;


@RestController
public class BayController {
	BayDao bayDao = new BayDao();

    
    @RequestMapping("/getBay")
    public void insertBay() {
    	bayDao.getBays();
    }
}
