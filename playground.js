let lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank",
};

function phoneticLookup(val) {
  let result = lookup[val];
  return result;
}

phoneticLookup("charlie");
