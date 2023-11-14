//
// L01S01 - let
//

// Using let for block-level scoping.
if (true) {
  let blockScopedVariable = 'I am confined to this block!';
  gs.info(blockScopedVariable); // Works fine here.
}
gs.info(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined.