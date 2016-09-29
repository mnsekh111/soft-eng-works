## Define and describe 2 design patterns from each category.

### Creational Patterns

1. #### Builder Pattern
    > Builder pattern is generally used for creating complex  objects using simple methods in a step by step approach. The component responsible for building the instances are independent of other components of the application.

	Builder pattern is used to build complex objects with many attributes where certain attributes are optional. Using builder pattern prevents the need for numberous number of constructors and setter methods for attributes. The Builder pattern separates the construction of a complex object from its representation so that the same construction process can create different representations.

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

	It uses a single class that is resposible to create an object and makes sure that no more objects get created. It also creates the object during the first access and provides a single point of access for this object. Here the `getInstance()` method. The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It is named after the singleton set, which is defined to be a set containing one element. 
    
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

	Adapter is about creating an intermediary abstraction that translates, or maps, the old component to the new system. Clients call methods on the Adapter object which redirects them into calls to the legacy component. This strategy can be implemented either with inheritance or with aggregation.
	
    **Example:**
    ```java
    	public interface NewMediaPlayer {
   			public void play(String fileName);
		}

    	public interface LegacyMediaPlayer {	
        	public void legacyPlay(String fileName);
		}

		public class MusicPlayer implements LegacyMediaPlayer{
           @Override
			public void lagacyPlay(String fileName){
            	System.out.println("Playing " + fileName);
            }
        }

		public class VideoPlayer implements LegacyMediaPlayer{
           @Override
			public void lagacyPlay(String fileName){
            	System.out.println("Playing " + fileName);
            }
        }
  
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
	
	This pattern allows responsibilities to be added to an object, not methods to an object's interface. The interface presented to the client must remain constant as successive layers are specified. Also the core object's identity has now been "hidden" inside of a decorator object. Trying to access the core object directly is now a problem.

	**Example:**
    ```java
    	public interface Coder{
        	void code();
        }
        
        public class NormalProgrammer implements Coder{
        	@Override 
            public void code(){
            	System.out.println("If you tell me to code, I simple code Mostly without comments");
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
        
        public class SuperProgrammer extends CoderDecorator{
        	public SuperProgrammer(Coder c){
            	super(c);
            }
            
            @Override
            public void code(){
            	super.code();
                System.out.println("I also decorate the code with comments");
            }
        }
    ```
    
### Behavioral Patterns
1. #### Iterator pattern
	> Iterator pattern is one of the most common behavioral pattern that helps to access the elements of collection without the need to know about the internal representation. i.e without knowing the data structure that stores the data.

	The key idea is to take the responsibility for access and traversal out of the aggregate object and put it into an Iterator object that defines a standard traversal protocol.The Iterator abstraction is fundamental to an emerging technology called "generic programming". This strategy seeks to explicitly separate the notion of "algorithm" from that of "data structure". The motivation is to: promote component-based development, boost productivity, and reduce configuration management.
	
    **Example**
    ```java
    	public interface Iterator {
   			public boolean hasNext();
   			public Object next();
		}
        
        public interface Container {
        	public Iterator getIterator();
        }
        
		public class NameRepository implements Container {
 			public String names[] = {"Robert" , "John" ,"Julie" , "Lora"};

			@Override
			public Iterator getIterator() {
				return new NameIterator();
			}

			private class NameIterator implements Iterator {
				int index;

				@Override
				public boolean hasNext() {
					if(index < names.length){
						return true;
					}
                    return false;
                 }

				@Override
                public Object next() {
                	if(this.hasNext()){
                    	return names[index++];
					}
					return null;
				}		
			}
		}
        
    ```
2. #### Observer pattern
	> Observer pattern is used when multiple objects need to be notified when the state of a particular object (which they are observing) changes. This is just like broadcasting a change to the listeners. Thus Observer pattern is suitable whenever there is a one to many relationship between an observable object and observer objects.

	This pattern allows to delegate all "view" functionality to decoupled and distinct Observer objects. The Observer pattern captures the lion's share of the Model-View-Controller architecture.
    
	**Example**
    ```java
    
    public abstract class Observable{
    	protected List<Observer> observers;
        public abstract void notifyAll();
        public abstract addObserver(Observer obs);
    }
    
    public abstract class Observer{
    	protected Observable subject;
        public abstract void update();
    }
    
    public class Seller extends Observable{
        private List<Items> itemList = new ArrayList<>();
        
        public void Seller(){
        	this.observers = new ArrayList<>();
        }
        
        public void addItem(Item item){
        	itemList.add(item);
            notifyAll();
        }
        
    	@Override
        public void addObserver(Observer obs){
        	if(!observers.contains(obs)){
            	observers.add(obs);
            }
        }
        
        @Override
        public void notifyAll(){
        	for(Observer obs : observers){
            	obs.update();
            }
        }
    }
    
    public class Buyer1 extends Observer{
        public Buyer1(Seller s){
        	this.subject = s;
            s.addObserver(this);
        }
        
        @Override
        public void update(){
        	System.out.println("Seller has added a new item. Check it out");
        }
    }
    
    public class Buyer2 extends Observer{
    	public Buyer2(Seller s){
        	this.subject = s;
        	s.addObserver(this)
        }
        
        @Override
        public void update(){
        	System.out.println("Hey Observer2 . Seller has added a new item. Check it out");
        }
    }
    ```


	Reference : https://www.tutorialspoint.com/design_pattern/
    Reference : https://www.javacodegeeks.com/2013/01/the-builder-pattern-in-practice.html
    
    







