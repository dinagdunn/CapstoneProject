package bootcamp.dao;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import bootcamp.model.Bay;

@Component
public class BayDao {

	private final String GET_BAY_BY_ID = "SELECT * FROM baymanagement.bay WHERE id = ?;";
	private final String ADD_BAY = "INSERT INTO bay (id, dep, masterbay) VALUES (?, ?, ?);";	
	private final String EDIT_BAY =  "UPDATE bay SET masterbay =?,dep=? WHERE id = ?;";
	private final String DELETE_BAY ="DELETE FROM bay where id=?;";


	
	@Autowired
	JdbcTemplate jdbctemplate;
	
	public Bay getBayById(int id) {
		java.lang.Object[] args = {id};
		List<Bay> bay = jdbctemplate.query(GET_BAY_BY_ID, args, new BeanPropertyRowMapper<>(Bay.class));
		return bay.get(0);
	}
	
	public void addBay(Bay bay) {
		java.lang.Object[] args = {bay.getId(), bay.getDep(), bay.getMasterbay()};
		jdbctemplate.update(ADD_BAY, args);
	}
	
	public void editBay(Bay bay) {
		java.lang.Object[] args = {bay.getMasterbay(), bay.getDep(), bay.getId()};
		jdbctemplate.update(EDIT_BAY, args);		
	}
	
	public void deleteBay(int id) {
		Object[] args = {id};
		jdbctemplate.update(DELETE_BAY,args);
	}
	

}
