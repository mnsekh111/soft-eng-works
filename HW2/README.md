## HW2 Design and Architectural Patterns

#### Define and describe 2 design patterns from each category.

### Creational Patterns

#### Builder Pattern
> Builder pattern is generally used for creating complex  objects using simple methods in a step by step approach. The component responsible for building the instances are independent of other components of the application.

* Builder pattern is used to build complex objects with many attributes where certain attributes are optional. 
* Using builder pattern prevents the need for numberous number of constructors and setter methods for attributes.

Reference : https://www.javacodegeeks.com/2013/01/the-builder-pattern-in-practice.html
**Example:**
```java
public class User {
	private final String firstName; // required
	private final String lastName; // required
	private final int age; // optional
	private final String phone; // optional
	private final String address; // optional

	private User(UserBuilder builder) {
		this.firstName = builder.firstName;
		this.lastName = builder.lastName;
		this.age = builder.age;
		this.phone = builder.phone;
		this.address = builder.address;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public int getAge() {
		return age;
	}

	public String getPhone() {
		return phone;
	}

	public String getAddress() {
		return address;
	}

	public static class UserBuilder {
		private final String firstName;
		private final String lastName;
		private int age;
		private String phone;
		private String address;

		public UserBuilder(String firstName, String lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		public UserBuilder age(int age) {
			this.age = age;
			return this;
		}

		public UserBuilder phone(String phone) {
			this.phone = phone;
			return this;
		}

		public UserBuilder address(String address) {
			this.address = address;
			return this;
		}

		public User build() {
			return new User(this);
		}

	}
}

// Use
public User getUser() {
	return new
			User.UserBuilder('Jhon', 'Doe')
			.age(30)
			.phone('1234567')
			.address('Fake address 1234')
			.build();
}
```
#### Singleton Pattern
> This pattern is mainly used when only one instance of a class has to present at any point during the life cycle of an application. It is based on just-in-time initialization or initialization on first use.

**Example**
```java
public class Singleton {
  // Private constructor prevents instantiation from other classes
  private Singleton() {}
 
  /**
   * SingletonHolder is loaded on the first execution of Singleton.getInstance() 
   * or the first access to SingletonHolder.INSTANCE, not before.
   */
  private static class SingletonHolder { 
    private static final Singleton INSTANCE = new Singleton();
  }

  public static Singleton getInstance() {
    return SingletonHolder.INSTANCE;
  }
}
```



