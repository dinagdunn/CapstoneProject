package bootcamp.model;

import java.util.List;

public class MasterBay {
	int width;
	int height;
	int length;
	List<Bay> bayList;
	
	
	public MasterBay() {
		
	}
	
	
	public MasterBay(int width, int height, int length, List<Bay> bayList) {
		super();
		this.width = width;
		this.height = height;
		this.length = length;
		this.bayList = bayList;
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
	public List<Bay> getBayList() {
		return bayList;
	}
	public void setBayList(List<Bay> bayList) {
		this.bayList = bayList;
	}
	
	
	
}
