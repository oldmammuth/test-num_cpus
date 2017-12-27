extern crate num_cpus;

#[no_mangle]
pub fn get_cpus() -> i32 {
    return num_cpus::get() as i32;
}

fn main() {}
