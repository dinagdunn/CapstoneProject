package bootcamp.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import bootcamp.model.Bay;

@Component
public class BayDao {

	private final String GET_ALL_Bays = "Insert INTO bay (id, dep)\r\n" + 
			"VALUES (3,\"D03\");";
	
	private final String getAllBays = "select * from bay";
	
	@Autowired
	JdbcTemplate jdbctemplate;
	
//	@Autowired
//	DataSource dataSource; 
	
	public void getBays() {
		
//		System.out.println(jdbctemplate);
//		System.out.println(dataSource);
		List<Bay> bayList = jdbctemplate.query(getAllBays, new BeanPropertyRowMapper<>(Bay.class));
		System.out.println(bayList);
//		System.out.println(jdbctemplate.query(getAllBays, new BeanPropertyRowMapper<>(Bay.class)));
//		return jdbctemplate.query(getAllBays, new BeanPropertyRowMapper<>(Bay.class));
	}
	
}
