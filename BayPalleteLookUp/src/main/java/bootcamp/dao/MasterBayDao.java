package bootcamp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import bootcamp.model.Bay;
import bootcamp.model.MasterBay;

@Component
public class MasterBayDao {
	
	@Autowired
	JdbcTemplate jdbctemplate;

	private final String GET_MASTERBAY_LIST = "SELECT * FROM masterbay;";
	private final String GET_BAY_LIST = "SELECT * FROM Bay WHERE masterbay =?;";
	private final String GET_MASTERBAY = "SELECT * FROM masterbay WHERE id = ?;";
	
	public List<MasterBay> getMasterBayList() {
		return jdbctemplate.query(GET_MASTERBAY_LIST, new BeanPropertyRowMapper<>(MasterBay.class));
	}
	
	public MasterBay getMasterbayById(String masterbay) {
		Object[] args = {masterbay};
		List<Bay> bayList = jdbctemplate.query(GET_BAY_LIST, args, new BeanPropertyRowMapper<>(Bay.class));
		MasterBay masterBay = jdbctemplate.query(GET_MASTERBAY, args, new BeanPropertyRowMapper<>(MasterBay.class)).get(0);
		
		return new MasterBay(masterBay.getWidth(), masterBay.getHeight(), masterBay.getLength(), bayList);
	}
	
}
