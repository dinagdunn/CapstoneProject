package bootcamp.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bootcamp.model.Department;
import bootcamp.service.DepartmentService;

@RestController
public class DepartmentContoller {
	@Autowired
	DepartmentService departmentService;
	
	@RequestMapping(value="/getDepartments", method=RequestMethod.GET)
	public List<Department> getDepartments(){
		return departmentService.getDepartments();
	}
	
	@RequestMapping(value="/getClasses", method=RequestMethod.GET)
	public List<Department> getClasses(){
		return departmentService.getClasses();
	}
	
	@RequestMapping(value="/getCategories", method=RequestMethod.GET)
	public List<Department> getCategories(){
		return departmentService.getCategories();
	}
}
