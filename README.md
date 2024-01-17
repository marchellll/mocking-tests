# mocking-tests
This repo saves the results of testing multiple open mocking servers

## Background

We currently use a hand-coded mock server whenever we need to mock a server. It serves us well, especially when we want the mock to be dynamic enough (with a little bit of logic, caching, and data saving). But most of the time we don't need dynamic mock, we usually just need a static mock.

Creating new repos and deployment for every static mock is lavish and adds overhead complexity to our deployment.

## The goal of this spike

- find an easy-to-use and good-enough mock server

## Criteria

- free
- configurable via file, so the configuration can be committed in the repo, so it become stateless and easy to scale
- handling requests in async runtime (like nodejs, or rust’s tokio) to prevent unnecessary thread hogging
- (optional) able to serve from open api spec
- (optional) configurable via API to do fast prototyping, if this enabled, then a persistance layer must be used to keep all instances in-sync

## Mocking Servers Tested

- [Wiremock](https://library.wiremock.org/)
- [MockServer](https://www.mock-server.com/)

## Wiremock

### Good
- support expectation config via API
- support expectation config via structured file
- support webhook
- support proxy
- support latency simulation

### Bad
- high latency (10s) will hog threads
- support stateful scenario, but in single server, not distributed

## Mock Server

### Good
- support expectation config via API
- support expectation config via single file
- support expectation config via open api spec
- support webhook
- support proxy
- support latency simulation

### Bad
- performance unpredictable
- expectation config via single file, not structured

## Handcoded

### Good
- performance very good and predictable
- very flexible

### Bad
- manual work
