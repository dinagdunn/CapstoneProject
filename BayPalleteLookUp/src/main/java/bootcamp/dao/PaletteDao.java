package bootcamp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import bootcamp.model.Palette;

@Component
public class PaletteDao {

	private final String ADD_PALETTE= "INSERT INTO palette (id, width, length, height, dep, paletteClass, category, bay) VALUES (?, ?, ?, ?, ?, ? ,?, ?);";
	private final String GET_PALETTE_BY_ID = "SELECT * FROM palette WHERE id = ?;";
	private final String EDIT_PALETTE = "UPDATE palette SET width=?, length=?, height=?, dep=?, paletteClass=?, category=?, bay=? WHERE id = ?;";
	private final String DELETE_PALETTE = "DELETE FROM palette where id=?;";
	
	@Autowired
	JdbcTemplate jdbctemplate;
	
	public void addPalette(Palette palette) {
		Object[] args = {palette.getId(), palette.getWidth(), palette.getLength(), palette.getHeight(), palette.getDep(), palette.getPaletteClass(), palette.getCategory(), palette.getBay()};
		jdbctemplate.update(ADD_PALETTE, args);
	}
	
	public Palette getPaletteById(String id) {
		Object[] args = {id};
		List<Palette> palettes = jdbctemplate.query(GET_PALETTE_BY_ID, args, new BeanPropertyRowMapper<>(Palette.class));
		return palettes.get(0);
	}
	
	public void editPalette(Palette palette) {
		Object[] args = { palette.getWidth(), palette.getLength(), palette.getHeight(), palette.getDep(), palette.getPaletteClass(), palette.getCategory(), palette.getBay(), palette.getId()};
		jdbctemplate.update(EDIT_PALETTE,args);
	}
	
	public void deletePalette(String id) {
		Object[] args = {id};
		jdbctemplate.update(DELETE_PALETTE,args);
	}
	
}
