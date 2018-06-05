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

	private final String ADD_BAY = "INSERT INTO bay (id, dep) VALUES (?, ?);";	
	private final String GET_BAY_BY_ID = "SELECT * FROM baymanagement.bay WHERE id = ?;";


	
	@Autowired
	JdbcTemplate jdbctemplate;
	
	public void addBay(Bay bay) {
		java.lang.Object[] args = {bay.getId(), bay.getDep()};
		jdbctemplate.update(ADD_BAY, args);
	}
	
	public void getBayById(int id) {
		java.lang.Object[] args = {id};
		List<Bay> bay = jdbctemplate.query(GET_BAY_BY_ID, args, new BeanPropertyRowMapper<>(Bay.class));
	}
	

}
