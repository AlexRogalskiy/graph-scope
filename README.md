# graph-scope

## Concepts

* Scope of all graphs
* Scope of some graphs
    * Scope of graphs with some common metadata attribute, for example all graphs within an "account")
    * Scope of graphs with a specific "graph template"
* Scope of a single graph
* Scope of a node within a graph
* Scope of a sub-graph

### Alternatives

* "Functional style" - where graph nodes "pass values" to connected nodes, and nodes can only reference data that has been passed to them.
    * A graph would have to initialize the first visited node(s) with overall data.
    * This implies that a path must exist between any nodes that want to share data.
        * In a digraph, either data could only be shared "downstream", or we would need to allow cycles.
        * We could essentially have two "types" of edges, where the subset of edges with a given type has no cycles. This provides a notion of "forwards" and "backwards" in the graph. Data can be passed forwards or backwards from a given node, assuming it has a path to the target node.
    * Another necessity implied by "passing" data is the possibility of multiple parents.
        * When a node is visited, and then "passes" its data to a downstream node, that downstream node must "hold" until its remaining parents are visited and pass their own data. The combined data must be somehow merged in order to specify the full  set of data passed into the downstream node.



## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone git@github.com:skarger/graph-scope.git`
* `cd graph-scope`
* `npm install`

## Running / Development

* `ember serve`
* Visit app at [http://localhost:4200](http://localhost:4200).
* Visit tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* TODO
