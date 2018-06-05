package bootcamp.model;

public class Palette {

	int id;
	int width;
	int height;
	int length;
	int bayId;
	String dep;
	String category;
	String subCategory;
	
	public Palette() {
		
	}
	
	public Palette(int id, int width, int height, int length, int bayId, String dep, String category,
			String subCategory) {
		super();
		this.id = id;
		this.width = width;
		this.height = height;
		this.length = length;
		this.bayId = bayId;
		this.dep = dep;
		this.category = category;
		this.subCategory = subCategory;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getWidth() {
		return width;
	}
	public void setWidth(int width) {
		this.width = width;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getLength() {
		return length;
	}
	public void setLength(int length) {
		this.length = length;
	}
	public int getBayId() {
		return bayId;
	}
	public void setBayId(int bayId) {
		this.bayId = bayId;
	}
	public String getDep() {
		return dep;
	}
	public void setDep(String dep) {
		this.dep = dep;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getSubCategory() {
		return subCategory;
	}
	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}
	
	
}
