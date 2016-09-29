###Github recently introduced a GraphQL-based API as an alternative to a RESTful API. Compare and contrast a GraphQL-based API versus a RESTful API. What are some advantages and disadvantages of each approach? How might this affect the experience of a developer using the API and developers building and supporting the API?

GraphQL is a query language for an API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

GraphQL tries to improve the way clients communicate with remote systems. An Application Programming Interface. As such, it’s a direct replacement for REST.

__Advantages of GraphQl API over REST API:__

* **Retrieve only the data your client needs in a single request (flexibility):**
 GraphQL APIs also allows to retrieve only necessary information in single http request where we might need to make muliple requests in case of REST APIs.
* **One endpoint to access your data: **
GraphQL APIs provides a single end point to access data whereas in REST APIs, we might need to explore multiple end points .
* **No need to tailor endpoints for your views : ** With GraphQL the UI gets exactly the data it needs instead, in a shape handy for the UI.
* **No versioning: We don't specify any version in the query. We only specify fields whichmight get deprecated but this won't break the code.**

__**Disadvantages:**__
* GraphQl is very new and it might take longer for developers to adapt to it although it provides all the benefits of REST
* Currently, the only production use case of GraphQL is at Facebook. It works great for them but we’re still yet to see how it will work for everyone else. Github's graphql is still maturing and in early-access state.

----

REST stands for Representational State Transfer which is an architectural design built to serve network applications.

__Advantages of REST API:__

* **REST APIs became popular because of their simplicity**
* **Separation between the client and the server:** the REST protocol totally separates the user interface from the server and the data storage.
* **Uniform interface:** to transfer data, the REST system applies specific actions (POST, GET, PUT and DELETE) on the resources, provided they are identified with a URI. This makes it easier to obtain a uniform interface that systematizes the process with the information.
* **The REST API is always independent of the type of platform or languages:** With a REST API you can have PHP, Java, Python or Node.js servers. The only thing is that it is indispensable that the responses to the requests should always take place in the language used for the information exchange, normally XML or JSON.

__**Disadvantages :**__

* REST delivers all the data a UI might need about a resource and it's up to the client to go look for the bits it actually wants to show. If that data is not in a resource it already has, the client needs to go off to the server and request some more data from another URL.
* Frequent changes in API version.
* The REST vocabulary is not fully supported.  For example, most web browsers have limited support for PUT or DELETE. And many server applications often don’t properly support these methods either.


###### Reference : https://medium.freecodecamp.com/introduction-to-graphql-1d8011b80159#.rllg2pvsj
###### Reference : https://www.meteor.com/articles/what-is-graphql