# Test For patched num_cpus

## Build and Run
```sh
cargo +nightly build --target wasm32-unknown-unknown --release
```

Copy inside the *js/* folder the file *test-num_cpus.wasm*, found in *target/wasm32-unknown-unknown/release*

Then launch a server, for example with:

```sh
python -m http.server
```
