package bootcamp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import bootcamp.model.Bay;

@Component
public class MasterBayDao {
	
	@Autowired
	JdbcTemplate jdbctemplate;

	private final String GET_MASTERBAY_LIST = "SELECT DISTINCT masterbay FROM baymanagement.bay";
	
	public List<Bay> getMasterBayList() {
		return jdbctemplate.query(GET_MASTERBAY_LIST, new BeanPropertyRowMapper<>(Bay.class));
	}
	
}
