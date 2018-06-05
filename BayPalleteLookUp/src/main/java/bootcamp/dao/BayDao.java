package bootcamp.dao;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import bootcamp.model.Bay;

@Component
public class BayDao {

	private final String GET_BAY_BY_ID = "SELECT * FROM baymanagement.Bay WHERE id = ?;";
	private final String ADD_BAY = "INSERT INTO Bay (id, width, length, height, dep, bayClass, category, masterbay, palette) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";	
	private final String EDIT_BAY =  "UPDATE Bay SET width=?, length=?, height=?, dep=?, bayClass=?, category=?, masterbay=?, palette=? WHERE id = ?;";
	private final String DELETE_BAY ="DELETE FROM Bay where id=?;";


	
	@Autowired
	JdbcTemplate jdbctemplate;
	
	public Bay getBayById(String id) {
		java.lang.Object[] args = {id};
		List<Bay> bay = jdbctemplate.query(GET_BAY_BY_ID, args, new BeanPropertyRowMapper<>(Bay.class));
		return bay.get(0);
	}
	
	public void addBay(Bay bay) {
		java.lang.Object[] args = {bay.getId(), bay.getWidth(), bay.getLength(), bay.getHeight(), bay.getDep(), bay.getBayClass(), bay.getCategory(), bay.getMasterbay(), bay.getPalette()};
		jdbctemplate.update(ADD_BAY, args);
	}
	
	public void editBay(Bay bay) {
		java.lang.Object[] args = {bay.getWidth(), bay.getLength(), bay.getHeight(), bay.getDep(), bay.getBayClass(), bay.getCategory(), bay.getMasterbay(), bay.getPalette(), bay.getId()};
		jdbctemplate.update(EDIT_BAY, args);		
	}
	
	public void deleteBay(String id) {
		Object[] args = {id};
		jdbctemplate.update(DELETE_BAY,args);
	}
	

}
