export function max(a) {
  var tmax = Number.NEGATIVE_INFINITY
  for (let x of a) {
    if (tmax < x) tmax = x
  }
  if (tmax == Number.NEGATIVE_INFINITY)
    return 
  else 
    return tmax
}
