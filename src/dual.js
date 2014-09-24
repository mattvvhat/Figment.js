/**
 * Create and Return the Dual Space Representation of a Mesh
 * Returns a Mesh that represents the dual OBJ. That is, the OBJ that swaps
 * vertices and faces.
 * @param {Mesh} mesh a mesh object
 * @return {Mesh} a dual representation of a Mesh object
 */
function dual (mesh) {
}


// Export for browser and NodeJS
~function () {
  var root = this;
  if (typeof module === 'object' && 'exports' in module) {
    module.exports = dual;
  }
  root.dual= dual;
}();
