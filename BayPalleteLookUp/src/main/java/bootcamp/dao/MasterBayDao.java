package bootcamp.dao;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;
import bootcamp.model.Bay;
import bootcamp.model.MasterBay;

@Component
public class MasterBayDao {
	
	@Autowired
	JdbcTemplate jdbctemplate;

	private final String GET_MASTERBAY_LIST = "SELECT * FROM masterbay;";
	private final String GET_BAY_LIST = "SELECT * FROM Bay WHERE masterbay =?;";
	private final String GET_MASTERBAY_BY_ID = "SELECT * FROM masterbay WHERE id = ?;";
	private final String ADD_MASTERBAY = "INSERT INTO masterbay (width, height, length, dep) VALUES (?, ?, ?, ?);";
	private final String DELETE_MASTERBAY = "DELETE FROM masterbay WHERE id = ?";
	private final String EDIT_MASTERBAY = "UPDATE masterbay SET width =?, height=?, length=?, dep=? WHERE id = ?; ";
	
	public List<MasterBay> getMasterBayList() {
		return jdbctemplate.query(GET_MASTERBAY_LIST, new BeanPropertyRowMapper<>(MasterBay.class));
	}
	
	public MasterBay getMasterbayById(int id) {
		Object[] args = {id};
		System.out.println("id in get method " + id);
		List<Bay> bayList = jdbctemplate.query(GET_BAY_LIST, args, new BeanPropertyRowMapper<>(Bay.class));
		for (Bay b : bayList) {
			System.out.println("bay list pallet: " + b.getPalette());
		}
		List<MasterBay> masterBayList = jdbctemplate.query(GET_MASTERBAY_BY_ID, args, new BeanPropertyRowMapper<>(MasterBay.class));
		MasterBay masterBay = new MasterBay();
		if(!masterBayList.isEmpty()) {
			masterBay = masterBayList.get(0);
			masterBay.setBayList(bayList);
		}
		System.out.println(masterBay.getId());
		return masterBay;
	}
	
	public int addMasterBay(MasterBay masterBay) {
		System.out.println("dep from dao: "+masterBay.getDep());
	      KeyHolder keyHolder = new GeneratedKeyHolder();
	      jdbctemplate.update(
	              connection -> {
	                  PreparedStatement ps = connection.prepareStatement(ADD_MASTERBAY, Statement.RETURN_GENERATED_KEYS);
	                  ps.setLong(1, masterBay.getWidth());
	                  ps.setLong(2, masterBay.getHeight());
	                  ps.setLong(3, masterBay.getLength());
	                  ps.setString(4, masterBay.getDep());
	                  return ps;
	              }, keyHolder);

	      Number key = keyHolder.getKey();
	      return key.intValue();
	}
	
	public void deleteMasterBay(int id) {
		Object[] args = {id};
		jdbctemplate.update(DELETE_MASTERBAY,args);
	}
	
	public void editMasterBay(MasterBay masterBay) {
		Object[] args = {masterBay.getWidth(),masterBay.getHeight(),masterBay.getLength(),masterBay.getDep(),masterBay.getId()};
		jdbctemplate.update(EDIT_MASTERBAY, args);
	}
}
