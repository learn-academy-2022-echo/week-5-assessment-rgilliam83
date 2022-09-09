# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

* Your answer:  Hash is a data structure which store data in the form of key-value pairs. Hashes can have multiple values or multiple objects in a single variable. Hashes are more controlled data structures than are arrays. In a Hash, Unlike arrays, a key can be anything such as integer, string, symble etc. In an array, an index must be an integer. Hashes are better to use because of eash of use. Hashes have a default value that is returned when accessing keys that do not exist in the hash. If no default is set nil is used. 

* Researched answer:  Hashes, like arrays, are a fundamental data structure in Ruby. Hashes are based on the hashtable data structure and serve to map key objects to value objects. Simply, a Hash associates value objects with key objects. Hashes use square brakets, like arrays do, to query and set values in the hash. Instead of using an integer index, they expect key objects within the square brackets. Like the Array class, the Hash class also defines an 'each' iterator method. This method invokes the associated block of code once for each key/value pair in the Hash, and passes both the key and the value as parameters to the block. Ruby's Hashes can use any object as a key, but symbol objects are the most commonly used.

2. What is a gem?

* Your answer: Ruby code, or packages, that is brought in to application and gives you access to custom methods that have been created. Funtionality that has been pre-written by another developer. Technically, you can go into each establised ruby gem file and copy all the code, and bring into your application manually and have access to them the same way as if all the methods were built by the user. This, of course, is not advised. Gems are simply Ruby code that make it is for you to have built in functionality, without the user having to create all it yourself, saving time which also saves money.

* Researched answer: The RubyGems utility is the standard way to package and distribute Ruby libraries. During a Ruby installation, several gems are installed, i.e. rake, rdoc, test-unit, etc. Some of these libraries start as third-party libraries and have been incorporated into the Ruby language because of their usefulness in the Ruby language. When Ruby instillation is complete, the code in the established gems is immediatley available for use. Ruby takes advantage of RubyGems mechanics to only install what's necessary. The first time ruby is installed, all the gems listed will be installed.

3. What is Ruby on Rails?

* Your answer: Rails is a ruby gem. Rails at its core is set of modules and code libraries that are Ruby files  that allow you to do lot of things in the application when called. Ruby on Rails (or "Rails") is an open-source web application development framework written on top of the Ruby programming language that has a lot of the tools and functionality already in place pre-installed which saves the developer a lot of time. Ruby on rails in used to buld web applications, such as twitter or reddit. Rails can be good to use when creating a web application that requires users, for example, to create an account, to post information, or like/share information, because of the development time it saves. Reasons to not use Rails includes, if you are just building a static website or blog, such as a portfolio website or blog site. For simple projects, it doesnt make sence to use rails because its overkill in the aforementioned senarios. Rails websites can be constructed and adjusted quickly, less money is spent on their creation and maintenance.

* Researched answer: Ruby on Rails is a framework used to build interactive web applications. Rails is a model view controller, which is an architectural apptern that separates the application layer into Model, View and Controller, based framework used for web development and app programming ast the server-side of the applications. Rails is a framework written in Ruby language and extends Ruby to solve problems without a programmer having to reinvent anything. Ruby on Rails is preferred by developers because of its time-saving qualities when writing code. It offers ready-made code ligraries for task such as building forms, menus, and tables. Ruby on Rails comes with a lot of ready-to-use plugins and modules, so developers don't have to waste time developing boilerplate code.


4. What is a relational database? Are there other kinds of databases?

* Your answer: relation database is a place to store and retireve data. Relational databases are a collection of linked tables with relationships to each other using primary keys. Relational databases are also called SQL databases. The relationship between each data point is clear and searching through those relationships is relatively easy. The relationship between tables and field types is called a schema. For relational databases, the schema must be clearly defined. SQL is used to access, manipulate, and retrieve data from objects in a database. Databases can have one or more schemas, which provide the organization and structure and contain other objects.

* Researched answer: A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables are used to hold information about the objects to be represented in the database. Each column in a table holds a certain kind of data and a field stores the actual value of an attribute. The rows in the table represent a collection of related values of one object or entity. Each row in a table could be marked with a unique identifier called a primary key, and rows among multiple tables can be made related using foreign keys. This data can be accessed in many different ways without reorganizing the database tables themselves. Every databse server provides a mechanism for generatging unique sets of numbers to use as primary key values, so you wont need to worry about keeping track of what numbers have been assigned.

5. What are primary keys? Why are they important?

* Your answer: a primary key is one or more columns that can be used as a unique indentifier for each row in a table. A primary key’s main features are that it must contain a unique value for each row of data, it cannot contain null values and every row must have a primary key value. A primary key might use one or more fields already present in the underlying data model, or a specific extra field can be created to be the primary key. 

* Researched answer: A Primary key is one or more columns in a table that uniquely indentify a row. The primary key is important to an efficient relational database. a field that identies every record in a database. Without the primary key and closely related foreign key concepts, relational databases would not work. The primary key is important to an efficient relational database. a field that identies every record in a database. Primary key is a  candidate key with no null values.  Almost all individuals deal with natural primary keys frequently in everyday life. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: A RESTful route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route depends on the HTTP verb and the URL. What this means is that when your application receives an HTTP request, it identifies the HTTP method and URL contained in the request, finds the controller action that consists of that method and URL, executes the code in that constroller action, and determines which response gets sent back to the client. We don't need to worry about how the mechanics of the pattern matching occurs, just that it does happen.

2. JSON: JavaScript Object Notation, more commonly known by the acronym JSON, is an open data interchange format that is both human and machine-readable. Despite the name JavaScript Object Notation, JSON is independent of any programming language and is a common API output in a wide variety of applications. JSON represents data in two ways, object a collection of name-value (or key-value) pairs. An object is defined within left ({) and right (}) braces. Each name-value pair begins with the name, followed by a colon, followed by the value. Name-value pairs are comma separated. Array: an ordered collection of values. An array is defined within left ([) and right (]) brackets. Items in the array are comma separated.

3. ERB: ERB, Embedded RuBy, provides an easy to use but powerful templating system for Ruby. Using ERB, actual Ruby code can be added to any plain text document for the purposes of generating document information details and/or flow control.

4. Params: params is an alias for the parameters method. params comes from ActionController Base, which is accessed by your application via ApplicationController. Specifically, params refers to the parameters being passed to the controller via a GET or POST request. In a GET request, params get passed to the controller from the URL in the user’s browser. in practice it behaves a lot like a hash.

5. API: API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.
