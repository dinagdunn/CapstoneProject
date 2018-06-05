package bootcamp.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bootcamp.dao.BayDao;
import bootcamp.model.Bay;
import bootcamp.model.MasterBay;


@RestController
public class BayController {
	
	@Autowired
	BayDao bayDao;

    
    @RequestMapping("/addBay")
    public void addBay() {
    	bayDao.addBay(new Bay(6,"D06"));
    }
    
    @RequestMapping("/getBayById")
    public void getBayById() {
    	bayDao.getBayById(5);
    }
    

    
}
