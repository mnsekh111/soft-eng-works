## HW2 Design and Architectural Patterns

#### Define and describe 2 design patterns from each category.

### Creational Patterns

1. #### Builder Pattern
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
2. #### Singleton Pattern
    > This pattern is mainly used when only one instance of a class has to present at any point during the life 	cycle of an application.
    
    * It uses a single class that is resposible to create an object and makes sure that no more objects get created.
    * It also creates the object during the first access and provides a single point of access for this object. Here the `getInstance()` method.
    
	Reference: https://www.tutorialspoint.com/design_pattern/singleton_pattern.htm
    **Example:**
    ```java
    public class SingleObject {

       //create an object of SingleObject
       private static SingleObject instance = new SingleObject();

       //make the constructor private so that this class cannot be
       //instantiated
       private SingleObject(){}

       //Get the only object available
       public static SingleObject getInstance(){
          return instance;
       }

       public void showMessage(){
          System.out.println("Hello World!");
       }
    }
    ```

### Structural Patterns
1. #### Adapter Pattern
	> Adapter pattern is used when there is a need to provide a bridge between two incompatible interfaces without modifying their source code. i.e it comes into place when we want to use an existing class but its interfaces don't match our needs.
	
    Reference: https://www.tutorialspoint.com/design_pattern/adapter_pattern.htm
    **Example:**
    ```java
    	public interface NewMediaPlayer {
   			public void play(String fileName);
		}
    ```
	```java
    	public interface LegacyMediaPlayer {	
        	public void legacyPlay(String fileName);
		}
    ```
    ```java
		public class MusicPlayer implements LegacyMediaPlayer{
           @Override
			public void lagacyPlay(String fileName){
            	System.out.println("Playing " + fileName);
            }
        }
    ```
    ```java
		public class VideoPlayer implements LegacyMediaPlayer{
           @Override
			public void lagacyPlay(String fileName){
            	System.out.println("Playing " + fileName);
            }
        }
    ```
    ```java
		public class MediaPlayerAdapter implements NewMediaPlayer{
           	LegacyMediaPlayer lmp;
            public MediaPlayerAdapter(String mediaType){
            	if(mediaType.contentEquals("music")){
                	lmp = new MusicPlayer();
                }else if(mediaType.contentEquals("video")){
                	lmp = new VideoPlayer();
                }
            }
            @Override
            public void play(String fileName){
            	lmp.legacyPlay(fileName);
            }
        }
    ```
    ```java
		public class UniversalPlayer implements NewMediaPlayer{
        	MediaPlayerAdapter mAdapter;
            @Override
            public void play(String mediaType, String fileName){
                	mAdapter = new MediaPlayerAdapter(mediaType);
                    mAdapter.play(fileName);
                }
            }
        }
    ```
    
2. #### Decorator Pattern
	> Decorator pattern is used to add a new functionality to an existing object without altering its structure. This pattern acts as a wrapper to exisiting class and provides additional features keeping the signatures of the other methods intact.
	
    Reference: https://www.tutorialspoint.com/design_pattern/decorator_pattern.htm
	**Example:**
    ```java
    	public interface Coder{
        	void code();
        }
        
        public class NormalProgrammer implements Coder{
        	@Override 
            public void code(){
            	System.out.println("If you tell me to code, I code");
            }
        }
        
        public class CoderDecorator implements Coder{
        	protected Coder coder;
            public CoderDecorator(Coder c){
            	this.coder = c;
            }
            
            @Override
            public void code(){
            	this.coder.code();
            }
        }
    ```
### Behavioral Patterns





