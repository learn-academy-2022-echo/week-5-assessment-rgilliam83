# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer:  A Hash is a collection of unique keys and their values. Also called associative arrays, they are similar to Arrays, but where an Array uses integers as its index, a Hash allows you to use any object type. Hashes enumerate their values in the order that the corresponding keys were inserted. Hashes allow an alternate syntax for keys that are symbols. Hashes have a default value that is returned when accessing keys that do not exist in the hash. If no default is set nil is used.

Researched answer:  In Ruby, Hash's are a array of key value pairs. Hash's and arrays are similar, except for how the indexing is done. In Hash, the order of key value pairs are usually not in the order presented. The default value of Hashes is nil. When keys, that are not contained in the hash, are attempted to be accessed, then the nil value is returned.

2. What is a gem?

Your answer: A gem in Ruby programming language is a software package in which Ruby applications or libraries can be distributed in a single format. They are simply open source libraries that contain Ruby code and are packaged with a little extra data . Using a gem allows a programmer to use the code within the gem in their own program, without explicitly inserting that code.


Researched answer: RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem"), a tool designed to easily manage the installation of gems, and a server for distributing them. The gem command is used to build, upload, download, and install Gem packages. RubyGems is very similar to apt-get, portage, and yum in functionality.

3. What is Ruby on Rails?

Your answer: Ruby on Rails (or "Rails") is an open-source web application development framework written in the Ruby programming language. One of key principles of Ruby on Rails development is convention over configuration. This means that the programmer does not have to spend a lot of time configuring files in order to get setup, Rails comes with a set of conventions which help speed up development. Another aspect of Rails is the importance of RESTful application design. REST (Representational State Transfer) is a style of software architecture based around the client-server relationship. It lends itself to a logical structure within applications, which means they can easily be exposed as an API (Application Programming Interface).

Researched answer: Rails is a development tool which gives web developers a framework, providing structure for all the code they write. The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks. Rails is written in Ruby, the programming language which is also used alongside Rails. Ruby is to Rails as PHP is to Symfony and Zend, or as Python is to Django. The appeal of Ruby to developers comes down to the sophistication and conciseness of the language.

4. What is a relational database? Are there other kinds of databases?

Your answer: Relational databases are a collection of linked tables with relationships to each other using primary keys. Relational databases are also called SQL databases. SQL stands for Structured Query Language and it's the language relational databases are written in. SQL is used to execute queries, retrieve data, and edit data by updating, deleting, or creating new records. A relational database is one that stores data in tables. The relationship between each data point is clear and searching through those relationships is relatively easy. The relationship between tables and field types is called a schema. For relational databases, the schema must be clearly defined.

Researched answer: A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables are used to hold information about the objects to be represented in the database. Each column in a table holds a certain kind of data and a field stores the actual value of an attribute. The rows in the table represent a collection of related values of one object or entity. Each row in a table could be marked with a unique identifier called a primary key, and rows among multiple tables can be made related using foreign keys. This data can be accessed in many different ways without reorganizing the database tables themselves.

5. What are primary keys? Why are they important?

Your answer: A primary key is a special relational database table column (or combination of columns) designated to uniquely identify each table record. A primary key is used as a unique identifier to quickly parse data within the table. A table cannot have more than one primary key. A primary key’s main features are that it must contain a unique value for each row of data, it cannot contain null values and every row must have a primary key value. A primary key might use one or more fields already present in the underlying data model, or a specific extra field can be created to be the primary key.

Researched answer: The primary key is important to an efficient relational database. Without the primary key and closely related foreign key concepts, relational databases would not work. Since a table can contain thousands of records (including duplicates), a primary key is necessary to ensure that a table record can always be uniquely identified. All keys that come from real-world observables and attributes are called natural primary keys, as opposed to surrogate primary keys that are, instead, arbitrarily assigned to each record. Almost all individuals deal with natural primary keys frequently in everyday life. For example, students are routinely assigned unique identification (ID) numbers, and all U.S. citizens have government-assigned and uniquely identifiable Social Security numbers. Street addresses or driver license numbers are examples of primary keys used to uniquely identify (respectively) locations or cars.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: A RESTful route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route depends on the HTTP verb and the URL. What this means is that when your application receives an HTTP request, it identifies the HTTP method and URL contained in the request, finds the controller action that consists of that method and URL, executes the code in that constroller action, and determines which response gets sent back to the client. We don't need to worry about how the mechanics of the pattern matching occurs, just that it does happen.

2. JSON: JavaScript Object Notation, more commonly known by the acronym JSON, is an open data interchange format that is both human and machine-readable. Despite the name JavaScript Object Notation, JSON is independent of any programming language and is a common API output in a wide variety of applications. JSON represents data in two ways, object a collection of name-value (or key-value) pairs. An object is defined within left ({) and right (}) braces. Each name-value pair begins with the name, followed by a colon, followed by the value. Name-value pairs are comma separated. Array: an ordered collection of values. An array is defined within left ([) and right (]) brackets. Items in the array are comma separated.

3. ERB: ERB, Embedded RuBy, provides an easy to use but powerful templating system for Ruby. Using ERB, actual Ruby code can be added to any plain text document for the purposes of generating document information details and/or flow control.

4. Params: params is an alias for the parameters method. params comes from ActionController Base, which is accessed by your application via ApplicationController. Specifically, params refers to the parameters being passed to the controller via a GET or POST request. In a GET request, params get passed to the controller from the URL in the user’s browser. in practice it behaves a lot like a hash.

5. API: API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.
