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
	private final String ADD_MASTERBAY = "INSERT INTO masterbay (id, width, height, length) VALUES (?, ?, ?, ?);";
	private final String DELETE_MASTERBAY = "DELETE FROM masterbay WHERE id = ?";
	private final String EDIT_MASTERBAY = "UPDATE masterbay SET width =?, height=?, length=? WHERE id = ?; ";
	
	public List<MasterBay> getMasterBayList() {
		return jdbctemplate.query(GET_MASTERBAY_LIST, new BeanPropertyRowMapper<>(MasterBay.class));
	}
	
	public MasterBay getMasterbayById(int id) {
		Object[] args = {id};
		List<Bay> bayList = jdbctemplate.query(GET_BAY_LIST, args, new BeanPropertyRowMapper<>(Bay.class));
		MasterBay masterBay = jdbctemplate.query(GET_MASTERBAY, args, new BeanPropertyRowMapper<>(MasterBay.class)).get(0);
		
		return new MasterBay(masterBay.getId(), masterBay.getWidth(), masterBay.getHeight(), masterBay.getLength(), bayList);
	}
	
	public void addMasterBay(MasterBay masterBay) {
		Object[] args = {masterBay.getId(), masterBay.getWidth(), masterBay.getHeight(), masterBay.getLength()};
		jdbctemplate.update(ADD_MASTERBAY, args);
	}
	
	public void deleteMasterBay(int id) {
		Object[] args = {id};
		jdbctemplate.update(DELETE_MASTERBAY,args);
	}
	
	public void editMasterBay(MasterBay masterBay) {
		Object[] args = {masterBay.getWidth(),masterBay.getHeight(),masterBay.getLength(),masterBay.getId()};
		jdbctemplate.update(EDIT_MASTERBAY, args);
	}
	
}
