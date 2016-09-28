## HW2 Design and Architectural Patterns

#### Define and describe 2 design patterns from each category.

### Creational Patterns
#### Singleton Pattern
> > > This pattern is mainly used when only one instance of a class has to present at any point during the life cycle of an application. It is based on just-in-time initialization or initialization on first use.

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



