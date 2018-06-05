package bootcamp.dao;

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

	private final String GET_ALL_Bays = "Insert INTO bay (id, dep)\r\n" + 
			"VALUES (3,\"D03\");";
	
	private final String getAllBays = "SELECT * FROM baymanagement.bay;";
	private final String getAllMasterBays = "select distinct masterbay from baymanagement.bay";
	private final String getBayList = "";
	
	@Autowired
	JdbcTemplate jdbctemplate;
	
	
	public void getBays() {
		

		List<Bay> bayList = jdbctemplate.query(getAllBays, new BeanPropertyRowMapper<>(Bay.class));
		System.out.println(bayList);
		for(Bay b: bayList) {
			System.out.println(b.getId() + b.getDep() + b.getMasterbay());
		}
	}
	
	public void getMasterBays() {
		List<Bay> masterBays = jdbctemplate.query(getAllMasterBays, new BeanPropertyRowMapper<>(Bay.class));
		for(Bay b: masterBays) {
			List<String> masterBaysz = new ArrayList<String>();
			masterBaysz.add(b.getMasterbay());
			System.out.println(b.getMasterbay());
		}
	}
}
