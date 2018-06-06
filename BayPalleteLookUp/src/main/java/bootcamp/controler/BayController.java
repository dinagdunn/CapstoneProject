package bootcamp.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import bootcamp.dao.BayDao;
import bootcamp.model.Bay;


@RestController
public class BayController {
	
	@Autowired
	BayDao bayDao;

    
    @RequestMapping(value = "/addBay", method = RequestMethod.POST)
    public void addBay(@RequestBody Bay bay) {
    	bayDao.addBay(bay);
    }
    
    @RequestMapping(value ="/getBayById", method = RequestMethod.GET)
    public Bay getBayById(@RequestParam("id") String id) {
    	return bayDao.getBayById(id);
    }
    
    @RequestMapping(value ="/editBay", method = RequestMethod.POST)
    public void editBay(@RequestBody Bay bay) {
    	bayDao.editBay(bay);
    }
    
    @RequestMapping(value ="/deleteBay", method = RequestMethod.DELETE) 
    public void deleteBay(@RequestParam("id") String id) {
    	bayDao.deleteBay(id);
    }
    
// A sample bay object in json:    
// {"id": "B1", "width": 34, "height": 34, "length": 34, "dep": "D1", "bayClass": "C1", "category": "CAT1", "masterbay": "MB1", "palette": "P1"}
    
}
