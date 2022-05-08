import React from 'react'
import Blog from '../components/Blog'

const Blogs = () => {
  return (
    <div className='container px-6 grid grid-cols-1 md:grid-cols-2  gap-6 lg:gap-10 my-5'>
      <Blog title={'1. Difference between javascript and nodejs'}>
        <ol className='list-decimal list-outside ml-4 mt-3 space-y-2'>
          <li>
            JavaScript is a simple programming language that runs in any browser
            JavaScript Engine. Whereas Node JS is an interpreter or running
            environment for a JavaScript programming language that holds many
            excesses, it requires libraries that can easily be accessed from
            JavaScript programming for better use.
          </li>
          <li>
            JavaScript is normally used for any client-side activity for one web
            application. An activity can be addressing business validation or
            dynamic page display in some schedule time interval or basic Ajax
            call kind of task. Those are used for a maximum time for any web
            application. Whereas Node JS mainly used for accessing or running
            any operating system for non-blocking operation. An operation like
            creating or executing a shell script, or getting some specific
            hardware-related information on one call or installed certificate
            details in the system or a lot of define task is non-blocking on an
            operating system.
          </li>
          <li>
            JavaScript running in any engine like Spider monkey (FireFox),
            JavaScript Core (Safari), V8 (Google Chrome). So JavaScript
            programming is very easy to write, and put any running environment
            means proper browser. Whereas Node JS only support the V8 engine,
            which googles chrome specific. But whether it supports the V8
            engine, written JavaScript code can able to run in any environment.
            So there has no browser-specific constraint on it.
          </li>
        </ol>
      </Blog>

      <Blog title={'2. What is the purpose of jwt and how does it work ?'}>
        <p className='mt-3'>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <p className='mt-2'>
          A JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          xxxxx.yyyyy.zzzzz.
        </p>
        <p className='mt-4'>Once decoded, you will get two JSON strings:</p>
        <ol className='list-decimal list-outside ml-4 mt-2 space-y-2'>
          <li>The header and the payload.</li>
          <li>The signature.</li>
        </ol>
        <p className='mt-4'>
          The payload contains the claims. This is displayed as a JSON string,
          usually containing no more than a dozen fields to keep the JWT
          compact. This information is typically used by the server to verify
          that the user has permission to perform the action they are
          requesting.
        </p>
      </Blog>
      <Blog
        title={
          '3. When should you use nodejs and when should you use mongodb ?'
        }
      >
        <p className='mt-3'>
          Node JS is an interpreter or running environment for a JavaScript
          programming language that holds many excesses, it requires libraries
          that can easily be accessed from JavaScript programming for better use
          and Mongodb is a NoSql database. which is used for backend database to
          store large or small amount of data. So nodejs is used for making
          backend or server-side program and mongodb is used for storing data in
          the server
        </p>
      </Blog>
      <Blog title={'4. Differences between sql and nosql databases.'}>
        <ol className='list-decimal list-outside ml-4 mt-3 space-y-2'>
          <li>
            SQL databases are relational, NoSQL databases are non-relational.
          </li>
          <li>
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
          </li>
          <li>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </li>
          <li>
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
          </li>
          <li>
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </li>
        </ol>
      </Blog>
    </div>
  )
}

export default Blogs
