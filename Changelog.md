# `basic_dsp`
Changes:

## Version 0.2.3 (Breaking changes)
Added a nicer interface for prepared operations/multi operations.

- Breaking change: RededicateVector trait now defines exactly one conversion. Vectors implement the trait several times so the same functionality is still available.
- Breaking change: perform_operations and related types appear on the API differently now.

## Version 0.2.2
Added Apache-2.0 as license option.

## Version 0.2.1
Bugfix release: Fixed implementation of AVX operations.

## Version 0.2.0
First release: Vectors with a couple of operations are available.