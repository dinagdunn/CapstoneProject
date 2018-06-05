package bootcamp.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import bootcamp.dao.PaletteDao;
import bootcamp.model.Palette;

@RestController
public class PaletteController {
	
	@Autowired
	PaletteDao paletteDao;
	
    @RequestMapping(value = "/addPalette", method = RequestMethod.POST)
    public void addPalette(@RequestBody Palette palette) {
    	paletteDao.addPalette(palette);
    }
    
    @RequestMapping(value ="/getPaletteById", method = RequestMethod.GET)
    public Palette getPaletteById(@RequestParam("id") int id) {
    	return paletteDao.getPaletteById(id);
    }
    
    @RequestMapping(value ="/editPalette", method = RequestMethod.POST)
    public void editPalette(@RequestBody Palette palette) {
    	paletteDao.editPalette(palette);
    }
    
    @RequestMapping(value ="/deletePalette", method = RequestMethod.DELETE) 
    public void deletePalette(@RequestParam("id") int id) {
    	paletteDao.deletePalette(id);
    }

}
