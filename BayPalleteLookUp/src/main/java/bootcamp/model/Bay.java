package bootcamp.model;

public class Bay {
	String id;
	int width;
	int height;
	int length;
	String dep;
	String bayClass;
	String category;
	String masterbay;
	String palette;
	
	public Bay() {
	}
	
//	this is only for testing purposes
	public Bay(String id, String dep) {
		this.id = id;
		this.dep = dep;
	}

public Bay(String id, int width, int height, int length, String dep, String bayClass, String category, String masterbay, String palette) {
	super();
	this.id = id;
	this.width = width;
	this.height = height;
	this.length = length;
	this.dep = dep;
	this.bayClass = bayClass;
	this.category = category;
	this.masterbay = masterbay;
	this.palette = palette;
}



public String getPalette() {
	return palette;
}

public void setPalette(String palette) {
	this.palette = palette;
}

public String getId() {
	return id;
}

public void setId(String id) {
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

public String getDep() {
	return dep;
}

public void setDep(String dep) {
	this.dep = dep;
}

public String getBayClass() {
	return bayClass;
}

public void setBayClass(String bayClass) {
	this.bayClass = bayClass;
}

public String getCategory() {
	return category;
}

public void setCategory(String category) {
	this.category = category;
}

public String getMasterbay() {
	return masterbay;
}

public void setMasterbay(String masterbay) {
	this.masterbay = masterbay;
}

}
