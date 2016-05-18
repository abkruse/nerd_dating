# gDating

Welcome to gDating! Dating for nerds!

![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/home.png)

### Your Task

The [gDating API](http://galvanize-student-apis.herokuapp.com/gdating/api-docs/) is the _entire_ backend for an online dating/networking site.

Your task is to use build a front end application with AngularJS that uses this API.

---

### Acceptance Criteria

In the most general sense, we are evaluating you based on your ability to:

* Build a single-page CRUD application in Angular using routing, factories / services and $http
* Implement custom-directives
* Implement JWT-based authentication between single-page apps and servers

---

# [Go here for Mockups and Stories](mockups_stories.md)

### gDating API

API Documentation can be found here:

[http://galvanize-student-apis.herokuapp.com/gdating/api-docs/](http://galvanize-student-apis.herokuapp.com/gdating/api-docs/)

You may test it out by hitting a `/ping` endpoint for any of the available resources.

```
curl http://galvanize-student-apis.herokuapp.com/gdating/ping
```

If you'd like to run the API locally during development, follow the instructions [here](https://github.com/gSchool/galvanize-student-apis/tree/master/server/gdating).

Note: your final deployed version must use the API hosted on heroku linked above.

The API has the following endpoints:

|Method|Endpoint|Description
|---|---|---|
|**Auth**||
|POST|/auth/register|Create and login a Member
|POST|/auth/login|Login a Member
|**Conversations**||
|GET|/members/{id}/conversations|Retrieve all Conversations for a single Member
|POST|/members/{id}/conversations|Update or create a Conversation between two Members.
|GET|/members/{id}/conversations/{recipientId}|Retrieve the Conversation between two members
|**Matches**||
|GET|/members/{id}/matches|Get all Matches for a single Member
|POST|/members/{id}/matches|Creates a new Match for a single Member
|DELETE|/members/{id}/matches/{matchId}|Removes a Match for a single Member
|**Members**||
|GET|/members|All Members
|POST|/members|Create a Member
|DELETE|/members/{id}|Deactivates a single Member
|GET|/members/{id}|Retrieve a single Member
|PUT|/members/{id}|Update a single Member
|GET|/members/search/{slug}|Retrieve a single Member by Slug
|**Search**||
|GET|/members/search|Search for a Member

---
