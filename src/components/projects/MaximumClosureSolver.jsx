export default function MaximumClosureSolver() {
    return (
        <details className="project-details" id="mcs">

            <summary>C, GLPK linear programming kit - Maximum Closure Solver</summary>
                            
            <p>This is a piece of academic work for the advanced algorithms course. The objective of this project was to solve the <a href="https://en.wikipedia.org/wiki/Closure_problem">maximum closure problem</a> disguised as a simple game for children. In this game, an individual is tasked with achieving the highest score by removing blocks from a wall. Each block has a positive or negative proffit score and can only be removed if the blocks above it have been removed.</p>
            <p>Reducing this to the maximum closure problemm was an effective way of finding the optimal selection of blocks to remove for proffit. First we represent the wall as a directed graph of weighted nodes. Each node, a block, each directed edge, a dependancy.</p>
            <p>We can reduce this problem even further for our solver. The maximum closure problem can be reduced to the maximum flow problem. First we change our graph to a directed graph with capacitated edges, where the capacity is set to value of the incoming node. Each positively weighted node is assigned a connection to a new node called source, and each negatively weighted node is connected to the sink. When maximum flow is calculated across this network and saturated edges removed, the nodes in the closure containing the source will be out maximum closure and therefore we will have found the optimal selection of blocks to remove.</p>
            <p>If you don't understand this, don't worry. I'm not even sure I do anymore. But the important takeaway is, I did this. And you can see my suffering in the commit history of the <a href="https://github.com/TheGwionInGlasses/Maximum-closure-solver">repository.</a></p>
        </details>
    )
}