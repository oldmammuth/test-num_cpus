fetch("js/test-num_cpus.wasm")
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes, {}))
  .then(results => {    
    var output = document.getElementById("output");
    output.value = results.instance.exports.get_cpus();
  });
