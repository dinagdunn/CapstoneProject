package bootcamp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import bootcamp.model.Palette;

@Component
public class PaletteDao {

	private final String ADD_PALETTE= "INSERT INTO palette (width, length, height, dep, paletteClass, category) VALUES (?, ?, ?, ?, ? ,?);";
	private final String GET_PALETTE_BY_ID = "SELECT * FROM palette WHERE id = ?;";
	private final String EDIT_PALETTE = "UPDATE palette SET width=?, length=?, height=?, dep=?, paletteClass=?, category=?, bay=? WHERE id = ?;";
	private final String DELETE_PALETTE = "DELETE FROM palette where id=?;";
	private final String UNLINK_PALETTE = "UPDATE palette SET bay = 0 WHERE ID = ?";
	
	@Autowired
	JdbcTemplate jdbctemplate;
	
	public void addPalette(Palette palette) {
		Object[] args = {palette.getWidth(), palette.getLength(), palette.getHeight(), palette.getDep(), palette.getPaletteClass(), palette.getCategory()};
		jdbctemplate.update(ADD_PALETTE, args);
	}
	
	public Palette getPaletteById(int id) {
		Object[] args = {id};
		List<Palette> palettes = jdbctemplate.query(GET_PALETTE_BY_ID, args, new BeanPropertyRowMapper<>(Palette.class));
		if(palettes.isEmpty()) {
			return new Palette();
		}
		return palettes.get(0);
	}
	
	public boolean editPalette(Palette palette) {
		Object[] args = { palette.getWidth(), palette.getLength(), palette.getHeight(), palette.getDep(), palette.getPaletteClass(), palette.getCategory(), palette.getBay(), palette.getId()};
		int rows = jdbctemplate.update(EDIT_PALETTE,args);
		if(rows==0) {
			return false;
		}
		return true;
	}
	
	public void deletePalette(int id) {
		Object[] args = {id};
		jdbctemplate.update(DELETE_PALETTE,args);
	}
	
	public void unlinkPlatte(int id) {
		Object[] args = {id};
		jdbctemplate.update(UNLINK_PALETTE,args);
		
	}
	

	
}
