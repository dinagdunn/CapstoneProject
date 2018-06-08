package bootcamp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import bootcamp.dao.BayDao;
import bootcamp.dao.PaletteDao;
import bootcamp.model.Bay;
import bootcamp.model.DimensionMatch;
import bootcamp.model.Palette;

@Component
public class PaletteService {

	@Autowired
	PaletteDao paletteDao;
	
	@Autowired 
	BayDao bayDao;
		
    public void addPalette(Palette palette) {
    	paletteDao.addPalette(palette);
    }
    
    public Palette getPaletteById(int id) {
    	return paletteDao.getPaletteById(id);
    }
    
    public DimensionMatch editPalette(Palette palette) {
    	boolean dimensionMatch = paletteDao.editPalette(palette);
    	Bay bay = bayDao.getBayById(palette.getBay());
    	if(bay.getWidth()<palette.getWidth() || bay.getHeight()<palette.getHeight() || bay.getLength() < palette.getLength()) {
    		dimensionMatch = false;
    	}
    	return new DimensionMatch(dimensionMatch);
    }
    
    public void deletePalette(int id) {
    	Palette palette = paletteDao.getPaletteById(id);
    	if(palette.getBay() > 0){
    		//remove the palette from bay table
    		bayDao.unlinkPalette(palette.getBay());
    	}
    	paletteDao.deletePalette(id);
    	
    }

	
}