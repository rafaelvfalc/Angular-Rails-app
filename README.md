# Rails Blog

Rails blog is a web app that can be used to post, check, edit and delete posts.

## Getting Started

In order to get the copy of the project up and running on your local machine, run the following command:

<pre><code> https://github.com/rafaelvfalc/Angular-Rails-app </pre></code>

### Installing

Using one terminal, go to the directory of the back-end of the app

<pre><code> cd Angular-Rails-app/blog </pre></code>

Run bundle install

<pre><code> bundle install </pre></code>

Run the following commands to configure de db

<pre><code> rails g model Post title:string description:text </pre></code>

<pre><code> rails g serializer post </pre></code>

<pre><code> rails g controller Posts  </pre></code>

<pre><code> rails db:seed </pre></code>

Observation: Oweride any conflict that can happen

And run the following command to start the api.

<pre><code> rails s </pre></code>

Now, using another terminal, go to the directory of the front-end of the app

<pre><code> cd Angular-Rails-app/blog-front </pre></code>

Run npm install

<pre><code> npm install </pre></code>

And run the following command to start the front-end app.

<pre><code> ng serve </pre></code>

Now, using any browser, access the _localhost:4200_ to be able to use the aplication.

Have fun :)