var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matcheen 
  // en resultSet
  // usa matchFunc para identificar elementos que matcheen
  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl)
  for (let i = 0; i < startEl.children.length; i++) {
   var result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
   resultSet = [...resultSet, ...result]
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) { // usa filter
  // tu código aquí
  if (selector.includes('#')) { // if selector[0] === 'id';
    return 'id';
  } else if (selector.charAt(0) === '.') { // if selector[0] === '.';
    return 'class';
  } else if (selector.charAt(0) !== '.' && selector.includes('.')) {
    return 'tag.class';
  } else {
    return 'tag';
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) { 
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(el) {
      return '#' + el.id === selector
    } 
  } else if (selectorType === "class") {
    matchFunction = function(el) {
      for (let i = 0; i < el.classList.length; i++) {
        if ('.' + el.classList[i] === selector) return true;
      }
        return false;
    }
  } else if (selectorType === "tag.class") { // 'div.myClass'
    matchFunction = function(el) {
    let [t, c] = selector.split('.') // t: tag c: class 
      return matchFunctionMaker(t)(el) && matchFunctionMaker('.' + c)(el)
      // SI tiene el tag 'div' --> recursion y SOLO SI tiene la class le agrego . y 'myClass'
      // necesito poner 'el' de parametro porque las funciones recursivas necesitan ese parametro.
    }
  } else if (selectorType === "tag") {
    matchFunction = function(el) {
      return el.tagName === selector.toUpperCase();  
    }
  }
  return matchFunction;
}

;

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
