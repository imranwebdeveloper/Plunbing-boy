import React from "react";
import Accordion from "../components/common/Accordion";
import Container from "../components/common/Container";
import useTitle from "../hook/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <Container CS="py-16">
      <div className="max-w-[700px] mx-auto min-h-screen">
        <Accordion title="What is the difference between SQL and NoSQL?">
          <ul>
            <strong>SQL</strong>
            <li className="list-disc ml-4 mt-1">
              Relational Database Management System
            </li>
            <li className="list-disc ml-4 mt-1">
              These databases have fixed or static or predefined schema
            </li>
            <li className="list-disc ml-4 mt-1">
              These databases are not suited for hierarchical data storage.
            </li>
          </ul>
          <ul className="mt-4">
            <strong>NO SQL</strong>
            <li className="list-disc ml-4 mt-1">They have dynamic schema</li>
            <li className="list-disc ml-4 mt-1">
              These databases are best suited for hierarchical data storage.
            </li>
            <li className="list-disc ml-4 mt-1">
              These databases are best suited for hierarchical data storage.
            </li>
          </ul>
        </Accordion>
        <Accordion title="What is JWT, and how does it work?">
          <p>
            <strong>JSON Web Token</strong> (JWT) is an open standard (RFC 7519)
            that defines a compact and self-contained way for securely
            transmitting information between parties as a JSON object. This
            information can be verified and trusted because it is digitally
            signed.{" "}
          </p>
          <p className="mt-1">
            Although JWTs can be encrypted to also provide secrecy between
            parties, we will focus on signed tokens. Signed tokens can verify
            the integrity of the claims contained within it, while encrypted
            tokens hide those claims from other parties. When tokens are signed
            using public/private key pairs, the signature also certifies that
            only the party holding the private key is the one that signed it.
          </p>
        </Accordion>
        <Accordion title="What is the difference between javascript and NodeJS?">
          <p>
            <strong>Javascript</strong> is a Scripting language. It is mostly
            abbreviated as JS. It can be said that Javascript is the updated
            version of the ECMA script. Javascript is a high-level programming
            language that uses the concept of Oops but it is based on prototype
            inheritance.
          </p>
          <p className="mt-2">
            <strong>Node.js</strong> is a platform built on Chrome's JavaScript
            runtime to easily build fast and scalable network applications.
            Node.js uses an event-driven, non-blocking I/O model that makes it
            lightweight and efficient, perfect for data-intensive real-time
            applications that run across distributed devices. Node.js is an
            open-source, cross-platform JavaScript run-time environment (Google
            Chrome's V8 Engine) that executes JavaScript code outside of a
            browser. Node.js lets developers use JavaScript to write
            command-line tools and for server-side scripting—running scripts
            server-side to produce dynamic web page content before the page is
            sent to the user's web browser.
          </p>
        </Accordion>
        <Accordion title="How does NodeJS handle multiple requests at the same time?">
          <p c>
            <strong>NodeJS</strong> receives multiple client requests and places
            them into EventQueue. NodeJS is built with the concept of
            event-driven architecture. NodeJS has its own EventLoop which is an
            infinite loop that receives requests and processes them. EventLoop
            is the listener for the EventQueue.
          </p>
          <p className="mt-2">
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module.
          </p>
        </Accordion>
      </div>
    </Container>
  );
};

export default Blog;
