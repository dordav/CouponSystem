package beans;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * this is the object for making customers users.
 *
 */
@SuppressWarnings("serial")
@XmlRootElement
public class Customer implements Serializable{
	private long id;
	private String name;
	private String password;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Custumer [id=" + id + ", name=" + name + ", password=" + password + "]";
	}
	public Customer(){
		super();
	}
	public Customer(long id, String name, String password) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
	}
	public Customer( String name, String password) {
		super();
		
		this.name = name;
		this.password = password;
	}
	
	
}
