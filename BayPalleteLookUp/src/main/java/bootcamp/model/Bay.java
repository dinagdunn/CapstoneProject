package bootcamp.model;

public class Bay {
	int id;
	int width;
	int height;
	int length;
	String dep;
	String category;
	String subCategory;
	String masterbay;
	
	public Bay() {
	}
	
//	this is only for testing purposes
	public Bay(int id, String dep) {
		this.id = id;
		this.dep = dep;
	}
	
	public Bay(int id, int width, int height, int length, String dep, String category, String subCategory,
			String masterbay) {
		super();
		this.id = id;
		this.width = width;
		this.height = height;
		this.length = length;
		this.dep = dep;
		this.category = category;
		this.subCategory = subCategory;
		this.masterbay = masterbay;
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


	public String getMasterbay() {
		return masterbay;
	}

	public void setMasterbay(String masterbay) {
		this.masterbay = masterbay;
	}
	
	public int getId() {
		return this.id;
	}
	public String getDep() {
		return this.dep;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setDep(String dep) {
		this.dep = dep;
	}
	


}
